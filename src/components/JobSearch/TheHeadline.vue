<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="verbClasses">{{ verb }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at DevCareers.</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
  name: "TheHeadline",
  data() {
    return {
      verb: "Build",
      interval: null,
    };
  },
  computed: {
    verbClasses() {
      return {
        [this.verb.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.updateTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    updateTitle() {
      this.interval = setInterval(() => {
        const verbs = ["Build", "Create", "Design", "Code"];
        const nextVerb = nextElementInList(verbs, this.verb);
        this.verb = nextVerb;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
