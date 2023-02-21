import axios from "axios";

const getJobs = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/jobs`;

  const result = await axios.get(url);

  return result.data;
};

export default getJobs;
