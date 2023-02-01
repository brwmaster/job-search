import { nextTick } from "vue";
import { render, screen } from "@testing-library/vue";
import TheHeadline from "@/components/TheHeadline.vue";
import { vi } from "vitest";

describe("TheHeadline", () => {
  it("displays introductory verb", () => {
    vi.useFakeTimers();
    render(TheHeadline);

    const verb = screen.getByRole("heading", {
      name: /Build for everyone/i,
    });

    expect(verb).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("changes verb at a consistent inerval", () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    vi.stubGlobal("setInterval", mock); // same as vi.useFakeTimers. But now we can access it

    render(TheHeadline);

    expect(mock).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it("swaps verb after interval", async () => {
    vi.useFakeTimers();

    render(TheHeadline);

    vi.advanceTimersToNextTimer();
    await nextTick();

    const result = screen.getByRole("heading", {
      name: /create for everyone/i,
    });

    expect(result).toBeInTheDocument();
  });

  it("removes interval when component disappears", () => {
    const clearInterval = vi.fn();
    vi.stubGlobal("clearInterval", clearInterval);

    const { unmount } = render(TheHeadline);
    unmount();
    expect(clearInterval).toHaveBeenCalled();
    vi.unstubAllGlobals();
  });
});
