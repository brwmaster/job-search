import { render, screen } from "@testing-library/vue";
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
});
