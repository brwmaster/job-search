import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays the company name", () => {
    render(MainNav);
    const companyName = screen.getByText("DevCareers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(MainNav);
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
      render(MainNav);

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
