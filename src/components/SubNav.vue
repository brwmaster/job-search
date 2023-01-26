<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div>
        <font-awesome-icon icon="fa-solid fa-search" class="mr-3" />
        <span><span class="text-brand-green-1">1423</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "SubNav",
  components: { FontAwesomeIcon },
};
</script>
