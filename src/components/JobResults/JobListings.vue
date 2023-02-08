<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <li class="mb-7">
        <router-link
          to="/jobs/results/1"
          class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
        >
          <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
            <h2 class="mb-2 text-2xl">Vue Developer (Senior)</h2>

            <div class="flex flex-row align-middle">
              <div class="mr-5">
                <span>DevCarreers</span>
              </div>
              <div>
                <span>Amsterdam</span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ol>
  </main>
</template>

<script>
export default {
  name: "JobListings",
};
</script>
