import { render, screen } from "@testing-library/vue";
import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
  it("renders text", () => {
    render(ActionButton, {
      props: {
        text: "Text to test",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /text to test/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("applies one of the several styles to button", () => {
    render(ActionButton, {
      props: {
        text: "Text to test",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /text to test/i,
    });

    expect(button).toHaveClass("primary");
  });
});
