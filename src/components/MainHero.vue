<template>
  <main>
    <section class="flex h-screen flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-5 col-start-2 border border-red-500">
          <the-headline />
        </div>
        <div class="col-span-5 col-start-7 border border-red-500">5 col</div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "@/components/TheHeadline.vue";
export default {
  name: "MainHero",
  components: {
    TheHeadline,
  },
};
</script>
