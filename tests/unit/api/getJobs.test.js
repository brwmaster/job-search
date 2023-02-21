import axios from "axios";
import getJobs from "@/api/getJobs";

vi.mock("axios");

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [{ id: 1, title: "VueJS Engineer" }],
    });
  });

  it("fetches jobs that canidates can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });

  it("extract jobs from response", async () => {
    const jobs = await getJobs();
    expect(jobs).toEqual([{ id: 1, title: "VueJS Engineer" }]);
  });
});
