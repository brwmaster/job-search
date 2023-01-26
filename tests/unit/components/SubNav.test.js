import { render, screen } from "@testing-library/vue";
import SubNav from "@/components/SubNav.vue";

describe("SubNav", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobsResultPage: true,
          };
        },
      });

      const jobCount = screen.getByText("1423");
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("does not display job count", () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobsResultPage: false,
          };
        },
      });

      const jobCount = screen.queryByText("1423");
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
