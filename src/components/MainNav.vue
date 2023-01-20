<template>
  <header class="w-full text-sm">
    <div class="top-0-left-0 fixed h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a href="/" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="(menuItem, index) in menuItems"
              :key="index"
              class="ml-9 h-full first:ml-0"
            >
              <a href="/" class="flex h-full items-center py-2.5">
                {{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "DevCareers",
      menuItems: [
        "Teams",
        "Locations",
        "Life at DevCareers",
        "How we Hire",
        "Students",
        "Jobs",
      ],
    };
  },
};
</script>
