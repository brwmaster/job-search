<template>
  <main>
    <section class="flex h-screen flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            src="/images/hero-image.svg"
            alt="hero resume image"
            class="h-80 w-80 object-contain"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "@/components/JobSearch/TheHeadline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  name: "MainHero",
  components: {
    TheHeadline,
    JobSearchForm,
  },
};
</script>
