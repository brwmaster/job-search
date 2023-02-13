<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in pagedJobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>

<script>
import axios from "axios";
import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    pagedJobs() {
      return this.jobs.slice(0, 10);
    },
  },
  async mounted() {
    const result = await axios.get("http://localhost:3000/jobs");
    this.jobs = result.data;
  },
};
</script>
