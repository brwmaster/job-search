import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  it("renders job title", () => {
    render(JobListing, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        job: {
          title: "Vue Developer",
        },
      },
    });

    const jobTitle = screen.getByText("Vue Developer");
    expect(jobTitle).toBeInTheDocument();
  });

  it("renders job organization", () => {
    render(JobListing, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        job: {
          title: "Vue Developer",
          organization: "Vue Lovers",
        },
      },
    });

    const jobOrganization = screen.getByText("Vue Lovers");
    expect(jobOrganization).toBeInTheDocument();
  });
});
