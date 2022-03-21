<template>
  <div class="flex h-screen container mx-auto relative">
    <!-- side Section -->
    <div
      class="
        w-20
        xl:w-1/4
        pt-5
        xl:ml-10
        flex-col flex
        justify-between
        border-r border-gray-200
      "
    >
      <div class="flex flex-col items-center xl:items-start">
        <!-- twitter logo -->
        <i class="fab fa-twitter text-3xl text-primary xl:ml-4 mb-3"></i>
        <!-- sidemenu icons -->
        <div class="flex flex-col items-start space-y-1">
          <router-link
            :to="route.path"
            :class="`
              hover:text-primary hover:bg-blue-50
              px-4
              py-2
              rounded-full
              cursor-pointer
            ${
              router.currentRoute.value.name == route.name ? 'text-primary' : ''
            }`"
            v-for="route in routes"
            :key="route"
          >
            <div v-if="route.meta.isMenu">
              <i :class="route.icon"></i>
              <span class="text-xl ml-5 hidden xl:inline-block">{{
                route.title
              }}</span>
            </div>
          </router-link>
        </div>
        <!-- twitter logo -->
        <!-- twitter button -->
        <div class="w-full xl:pr-3 flex justify-center">
          <button
            class="
              bg-primary
              text-white
              mt-3
              xl:w-full
              w-12
              h-12
              rounded-full
              hover:bg-dark
            "
          >
            <span class="hidden xl:block">트윗</span>
            <i class="fas fa-plus xl:hidden"></i>
          </button>
        </div>
      </div>
      <!-- 프로필 버튼 -->
      <div class="xl:pr-3 mb-3 flex relative" @click="showProfileDrop = true">
        <button
          class="
            hidden
            xl:flex
            mt-3
            w-full
            h-12
            rounded-full
            hover:bg-blue-50
            px-2
            py-1
            items-center
          "
        >
          <img
            :src="currentUser.profile_image_url"
            class="w-10 h-10 rounded-full"
          />
          <div class="xl:ml-2 hidden xl:block">
            <div class="text-sm font-bold">{{ currentUser.email }}</div>
            <div class="text-xs text-gray-500 text-left">
              @{{ currentUser.username }}
            </div>
          </div>
          <i
            class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden xl:block"
          ></i>
        </button>
        <div class="xl:hidden flex justify-center">
          <img
            :src="currentUser.profile_image_url"
            class="cursor-pointer hover:opacity-80 w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
    <!-- main section -->
    <div class="flex h-screen flex-1">
      <router-view />
    </div>
    <!-- profile dropdown menu -->
    <div
      v-if="showProfileDrop"
      @click="showProfileDrop = false"
      class="absolute bottom-20 left-10 shadow rounded-lg w-60 bg-white"
    >
      <button
        class="
          hover:bg-gray-50
          border-b border-gray-100
          flex
          p-3
          w-full
          items-center
        "
      >
        <img
          :src="currentUser.profile_image_url"
          class="w-10 h-10 rounded-full"
          alt="#"
        />
        <div class="ml-2">
          <div class="font-bold text-sm">{{ currentUser.email }}</div>
          <div class="text-left text-gray500 text-sm">
            {{ currentUser.username }}
          </div>
        </div>
        <i class="fas fa-check text-primary ml-auto"></i>
      </button>
      <button
        @click="onLogout"
        class="hover:bg-gray-50 p-3 w-full text-left text-sm"
      >
        @{{ currentUser.username }} 계정에서 로그아웃
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from "vue";
import router from "../router";
import { auth } from "../firebase";
import store from "../store";

export default {
  setup() {
    // ref 안에 들어갈껀 초기값이다
    const routes = ref([]);
    const showProfileDrop = ref(false);

    const currentUser = computed(() => store.state.user);

    const onLogout = async () => {
      await auth.signOut();
      store.commit("SET_USER", null);
      await router.replace("/login");
    };
    onBeforeMount(() => {
      routes.value = router.options.routes;
    });

    return {
      routes,
      showProfileDrop,
      currentUser,
      onLogout,
      router,
    };
  },
};
</script>

<style>
</style>