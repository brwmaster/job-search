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
      const page = Number.parseInt(this.$route.query.page) || 1;
      const offset = (page - 1) * 10;
      const total = page * 10;

      return this.jobs.slice(offset, total);
    },
  },
  async mounted() {
    const result = await axios.get("http://localhost:3000/jobs");
    this.jobs = result.data;
  },
};
</script>
