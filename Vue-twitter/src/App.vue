<template>
  <div class="flex h-screen container mx-auto">
    <!-- side Section -->
    <div
      class="
        w-20
        lg:w-1/4
        pt-5
        lg:ml-10
        flex-col flex
        justify-between
        border-r border-gray-200
      "
    >
      <div class="flex flex-col items-center lg:items-start">
        <!-- twitter logo -->
        <i class="fab fa-twitter text-3xl text-primary lg:ml-4 mb-3"></i>
        <!-- sidemenu icons -->
        <div class="flex flex-col items-start space-y-1">
          <div
            class="
              hover:text-primary hover:bg-blue-50
              px-4
              py-2
              rounded-full
              cursor-pointer
            "
          >
            <i class="fas fa-fw fa-home text-2xl"></i>
            <span class="text-lg ml-5 hidden lg:inline-block">홈</span>
          </div>

          <!-- Home -->
          <div
            class="
              hover:text-primary hover:bg-blue-50
              px-4
              py-2
              rounded-full
              cursor-pointer
            "
          >
            <i class="fas fa-fw fa-hashtag text-2xl"></i>
            <span class="text-lg ml-5 hidden lg:inline-block">탐색하기</span>
          </div>
          <!-- Home -->
          <!-- 알림 -->
          <div
            class="
              hover:text-primary hover:bg-blue-50
              px-4
              py-2
              rounded-full
              cursor-pointer
            "
          >
            <i class="fas fa-fw fa-bell text-2xl"></i>
            <span class="text-lg ml-5 hidden lg:inline-block">알림</span>
          </div>
          <!-- 알림 -->
          <!-- 쪽지 -->
          <div
            class="
              hover:text-primary hover:bg-blue-50
              px-4
              py-2
              rounded-full
              cursor-pointer
            "
          >
            <i class="fas fa-fw fa-envelope text-2xl"></i>
            <span class="text-lg ml-5 hidden lg:inline-block">쪽지</span>
          </div>
          <!-- 쪽지 -->
          <!-- 북마크 -->
          <div
            class="
              hover:text-primary hover:bg-blue-50
              px-4
              py-2
              rounded-full
              cursor-pointer
            "
          >
            <i class="fas fa-fw fa-bookmark text-2xl"></i>
            <span class="text-lg ml-5 hidden lg:inline-block">북마크</span>
          </div>
          <!-- 북마크 -->
          <!-- 리스트 -->
          <div
            class="
              hover:text-primary hover:bg-blue-50
              px-4
              py-2
              rounded-full
              cursor-pointer
            "
          >
            <i class="fas fa-fw fa-list-alt text-2xl"></i>
            <span class="text-lg ml-5 hidden lg:inline-block">리스트</span>
          </div>
          <!-- 리스트 -->
          <!-- 프로필 -->
          <div
            class="
              hover:text-primary hover:bg-blue-50
              px-4
              py-2
              rounded-full
              cursor-pointer
            "
          >
            <i class="fas fa-fw fa-user text-2xl"></i>
            <span class="text-lg ml-5 hidden lg:inline-block">프로필</span>
          </div>
          <!-- 프로필 -->
          <!-- 더보기 -->
          <div
            class="
              hover:text-primary hover:bg-blue-50
              px-4
              py-2
              rounded-full
              cursor-pointer
            "
          >
            <i class="fas fa-fw fa-ellipsis-h text-2xl"></i>
            <span class="text-lg ml-5 hidden lg:inline-block">더보기</span>
          </div>
          <!-- 더보기 -->
        </div>
        <!-- twitter logo -->
        <!-- twitter button -->
        <div class="w-full lg:pr-3 flex justify-center">
          <button
            class="
              bg-primary
              text-white
              mt-3
              lg:w-full
              w-12
              h-12
              rounded-full
              hover:bg-dark
            "
          >
            <span class="hidden lg:block">트윗</span>
            <i class="fas fa-plus lg:hidden"></i>
          </button>
        </div>
      </div>
      <!-- 프로필 버튼 -->
      <div class="lg:pr-3 mb-3 flex justify-center">
        <button
          class="
            hidden
            lg:flex
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
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full" />
          <div class="lg:ml-2 hidden lg:block">
            <div class="text-sm font-bold">skyyj32.com</div>
            <div class="text-xs text-gray-500 text-left">@young</div>
          </div>
          <i
            class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden lg:block"
          ></i>
        </button>
        <div class="lg:hidden flex justify-center">
          <img
            src="http://picsum.photos/100"
            class="cursor-pointer hover:opacity-80 w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
    <!-- main section -->
    <div class="flex h-screen flex-1">
      <Notifications />
    </div>
  </div>
</template>

<script>
import Notifications from "./pages/Notifications.vue";
export default {
  components: { Notifications },
  setup() {},
};
</script>

<style>
</style>