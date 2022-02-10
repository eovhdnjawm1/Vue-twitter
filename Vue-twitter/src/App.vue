<template>
  <div class="flex h-screen">
    <div class="w-1/4 mt-5 ml-10 flex-col flex justify-between">
      <div>
        <!-- twitter logo -->
        <i class="fab fa-twitter text-3xl text-primary ml-4"></i>
        <!-- sidemenu icons -->
        <div class="flex flex-col items-start space-y-1">
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-fw fa-home text-2xl"></i>
            <span class="text-lg ml-5">홈</span>
          </div>

          <!-- Home -->
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-fw fa-hashtag text-2xl"></i>
            <span class="text-lg ml-5">탐색하기</span>
          </div>
          <!-- Home -->
          <!-- 알림 -->
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-fw fa-bell text-2xl"></i>
            <span class="text-lg ml-5">알림</span>
          </div>
          <!-- 알림 -->
          <!-- 쪽지 -->
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-fw fa-envelope text-2xl"></i>
            <span class="text-lg ml-5">쪽지</span>
          </div>
          <!-- 쪽지 -->
          <!-- 북마크 -->
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-fw fa-bookmark text-2xl"></i>
            <span class="text-lg ml-5">북마크</span>
          </div>
          <!-- 북마크 -->
          <!-- 리스트 -->
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-fw fa-list-alt text-2xl"></i>
            <span class="text-lg ml-5">리스트</span>
          </div>
          <!-- 리스트 -->
          <!-- 프로필 -->
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-fw fa-user text-2xl"></i>
            <span class="text-lg ml-5">프로필</span>
          </div>
          <!-- 프로필 -->
          <!-- 더보기 -->
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-fw fa-ellipsis-h text-2xl"></i>
            <span class="text-lg ml-5">더보기</span>
          </div>
          <!-- 더보기 -->
        </div>
        <!-- twitter logo -->
        <!-- twitter button -->
        <div class="mr-3">
          <button
            class="
              bg-primary
              text-white
              mt-3
              w-full
              h-12
              rounded-full
              hover:bg-dark
            "
          >
            트윗
          </button>
        </div>
      </div>
      <!-- 프로필 버튼 -->
      <div class="mr-3 mb-3">
        <button
          class="
            mt-3
            w-full
            h-12
            rounded-full
            hover:bg-blue-50
            px-2
            py-1
            flex
            items-center
          "
        >
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full" />
          <div class="ml-2">
            <div class="text-sm font-bold">skyyj32.com</div>
            <div class="text-xs text-gray-500 text-left">@young</div>
          </div>
          <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs"></i>
        </button>
      </div>
    </div>

    <div class="flex-1 bg-red-200"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>