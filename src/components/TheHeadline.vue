<template>
  <section>
    <h1>Build for everyone</h1>
    <h2>Find your next job at DevCareers.</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      sample: "Hello",
    };
  },
  created() {
    console.log("Hey I've been created ", this.sample);
  },
};
</script>
