import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useJobsStore } from "@/stores/jobs";
import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  const pinia = createTestingPinia();

  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        plugins: [pinia],
        mocks: {
          $route,
        },
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
  };

  it("fetches jobs", () => {
    const $route = createRoute();

    renderJobListings($route);

    const jobsStore = useJobsStore();

    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("displays a maximum of 10 jobs", async () => {
    const $route = createRoute({ page: "1" });

    renderJobListings($route);

    const jobsStore = useJobsStore();
    jobsStore.jobs = Array(15).fill({ id: "1", title: "Vue Developer" });

    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });

  describe("when params exclude page number", () => {
    it("displays page number 1", () => {
      const $route = createRoute({ page: undefined });
      renderJobListings($route);

      expect(screen.getByText("Page 1")).toBeInTheDocument();
    });
  });

  describe("when params include the page number", () => {
    it("display the page number", () => {
      const $route = createRoute({ page: "7" });
      renderJobListings($route);

      expect(screen.getByText("Page 7")).toBeInTheDocument();
    });
  });

  describe("when the user is on the first page", () => {
    it("should not show link to previous page", async () => {
      const $route = createRoute({ page: "1" });
      renderJobListings($route);

      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({ id: "1", title: "Vue Developer" });

      await screen.findAllByRole("listitem");

      const previousLink = screen.queryByRole("link", { name: /previous/i });

      expect(previousLink).not.toBeInTheDocument();
    });

    it("display link to next page", async () => {
      const $route = createRoute({ page: "1" });
      renderJobListings($route);

      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({ id: "1", title: "Vue Developer" });

      await screen.findAllByRole("listitem");

      const nextLink = screen.queryByRole("link", { name: /next/i });

      expect(nextLink).toBeInTheDocument();
    });
  });

  describe("when the user is on the last page", () => {
    it("should not show link to next page", async () => {
      const $route = createRoute({ page: 2 });

      renderJobListings($route);

      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({ id: "1", title: "Vue Developer" });

      await screen.findAllByRole("listitem");

      const nextLink = screen.queryByRole("link", { name: /next/i });

      expect(nextLink).not.toBeInTheDocument();
    });

    it("should show link to previous page", async () => {
      const $route = createRoute({ page: "2" });

      renderJobListings($route);

      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({ id: "1", title: "Vue Developer" });

      await screen.findAllByRole("listitem");

      const previousLink = screen.queryByRole("link", { name: /previous/i });

      expect(previousLink).toBeInTheDocument();
    });
  });
});
