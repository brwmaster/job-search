<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in pagedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="mx-3 flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            role="link"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";
import JobListing from "@/components/JobResults/JobListing.vue";
import { useJobsStore, FETCH_JOBS } from "@/stores/jobs";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  computed: {
    ...mapState(useJobsStore, {
      jobs: "jobs",
      nextPage() {
        const nextPage = this.currentPage + 1;

        return nextPage <= Math.ceil(this.jobs.length / 10)
          ? nextPage
          : undefined;
      },
      pagedJobs() {
        const page = this.currentPage;
        const offset = (page - 1) * 10;
        const total = page * 10;

        return this.jobs.slice(offset, total);
      },
    }),
    currentPage() {
      return Number.parseInt(this.$route.query.page) || 1;
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      return previousPage >= 1 ? previousPage : undefined;
    },
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS]),
  },
};
</script>
