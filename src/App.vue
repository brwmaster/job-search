<template>
  <main-nav />
  <main-hero />
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import MainHero from "@/components/JobSearch/MainHero.vue";

export default {
  name: "App",
  components: {
    MainNav,
    MainHero,
  },
};
</script>
