import { render, screen } from "@testing-library/vue";
import SubNav from "@/components/Navigation/SubNav.vue";

describe("SubNav", () => {
  const renderSubNav = (onJobsResultPage) => {
    render(SubNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      data() {
        return {
          onJobsResultPage,
        };
      },
    });
  };

  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      renderSubNav(true);

      const jobCount = screen.getByText("1423");
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("does not display job count", () => {
      renderSubNav();

      const jobCount = screen.queryByText("1423");
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
