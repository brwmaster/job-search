import { nextTick } from "vue";
import { render, screen } from "@testing-library/vue";
import TheHeadline from "@/components/TheHeadline.vue";
import { vi } from "vitest";

describe("TheHeadline", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("displays introductory verb", () => {
    render(TheHeadline);

    const verb = screen.getByRole("heading", {
      name: /Build for everyone/i,
    });

    expect(verb).toBeInTheDocument();
  });

  it("changes verb at a consistent inerval", () => {
    const mock = vi.fn();
    vi.stubGlobal("setInterval", mock); // same as vi.useFakeTimers. But now we can access it

    render(TheHeadline);

    expect(mock).toHaveBeenCalled();
  });

  it("swaps verb after interval", async () => {
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
  });
});
