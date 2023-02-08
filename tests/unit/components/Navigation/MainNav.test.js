import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import userEvent from "@testing-library/user-event";
import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const renderMainNav = () => {
    const $route = {
      name: "Home",
    };
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
        mocks: {
          $route,
        },
      },
    });
  };

  it("displays the company name", () => {
    renderMainNav();
    const companyName = screen.getByText("DevCareers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    renderMainNav();
    const menuItems = screen.getAllByRole("listitem");
    const menuItemsText = menuItems.map((item) => item.textContent);
    expect(menuItemsText).toEqual([
      "Teams",
      "Locations",
      "Life at DevCareers",
      "How we Hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when the user logs in", () => {
    it("display user profile image", async () => {
      renderMainNav();
      let profileImage = screen.queryByRole("img", {
        name: /profile image/i,
      });

      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });

      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /profile image/i,
      });

      expect(profileImage).toBeInTheDocument();
    });
  });
});
