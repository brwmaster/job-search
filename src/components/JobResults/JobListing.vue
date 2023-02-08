<template>
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
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications</h3>
          <div>
            <ul class="list-disc pl-8">
              <li>Bachelor's degree or equivalent practical experience.</li>
              <li>
                10 years of experience in product management, consulting, as a
                co-founder or a related technical role.
              </li>
              <li>
                building and shipping technical products. 2 years of experience
                in people leadership.
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-4 text-center">
          <router-link
            to="/jobs/results/1"
            class="p-1 text-brand-blue-1 hover:shadow-blue"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
};
</script>
