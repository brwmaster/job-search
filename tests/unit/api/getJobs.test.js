import axios from "axios";
import getJobs from "@/api/getJobs";

vi.mock("axios");

describe("getJobs", () => {
  it("fetches jobs that canidates can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });
});
