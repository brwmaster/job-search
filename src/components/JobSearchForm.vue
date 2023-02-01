<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
  >
    <font-awesome-icon icon="fa-solid fa-search" class="ml-4 mr-3" />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <input
          type="text"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <span
        class="bg-grand-gray-2 flex h-full items-center border-l border-r border-brand-gray-3 px-3"
      >
        in
      </span>
      <div class="relative flex h-full flex-1 items-center pl-3">
        <label class="absolute left-3 -top-10">Where?</label>
        <input
          type="text"
          placeholder="Amsterdam"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
};
</script>
