<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
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
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" @click="loginUser" />
          <action-button
            v-else
            text="Sign in"
            type="primary"
            @click="loginUser"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import SubNav from "@/components/SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
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
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
