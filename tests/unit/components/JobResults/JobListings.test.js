import { render, screen } from "@testing-library/vue";
import axios from "axios";
import JobListings from "@/components/JobResults/JobListings.vue";
import { RouterLinkStub } from "@vue/test-utils";

// mock axios
vi.mock("axios");

describe("JobListings", () => {
  it("fetches jobs", () => {
    // overwrite axios.get and return a promise with the data property
    axios.get.mockResolvedValue({ data: [] });
    render(JobListings);

    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("displays a maximum of 10 jobs", async () => {
    axios.get.mockResolvedValue({
      data: Array(15).fill({ id: "1", title: "Vue Developer" }),
    });
    render(JobListings, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });

    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });
});
