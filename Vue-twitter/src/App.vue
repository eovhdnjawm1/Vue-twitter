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

    <div class="flex-1">
      <div class="flex h-screen">
        <!-- main section -->
        <div class="flex-1 border-r border-gray-200 overflow-y-auto">
          <div class="flex flex-col">
            <!-- page title -->
            <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">
              홈
            </div>
            <!-- tweeting section -->
            <div class="flex px-3 py-3 border-b-8 border-gray-100">
              <img
                src="http://picsum.photos/200"
                alt=""
                class="w-10 h-10 rounded-full hover:opacity-60 cursor-pointer"
              />
              <div class="flex flex-1 flex-col ml-2">
                <textarea
                  class="
                    w-full
                    text-lg
                    font-bold
                    focus:outline-none
                    mb-3
                    resize-none
                  "
                  placeholder="무슨 일이 일어나고 있나요?"
                ></textarea>
                <div class="text-right">
                  <button
                    class="
                      font-bold
                      bg-primary
                      hover:bg-dark
                      text-white
                      px-4
                      py-2
                      rounded-full
                    "
                  >
                    트윗
                  </button>
                </div>
              </div>
            </div>
            <!-- tweets -->
            <div
              class="flex px-3 py-3 border-b border-gray-100"
              v-for="tweet in 10"
              :key="tweet"
            >
              <img
                src="http://picsum.photos/200"
                class="w10 h-10 rounded-full hover:opacity-60 cursor-pointer"
              />
              <div class="flex-1 flex flex-col ml-3 space-y-2">
                <div class="text-sm space-x-1">
                  <span class="font-bold">조국</span>
                  <span class="text-gray-500 text-xs">@skyyj32</span>
                  <span>.</span>
                  <span class="text-gray-500 text-xs">7분</span>
                </div>
                <!-- tweet body -->
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis voluptatem molestiae amet quae iure, impedit eius
                  explicabo quas, modi itaque voluptas eaque illum nesciunt
                  blanditiis ad tempore quasi! Molestiae, nisi?
                </div>
                <!-- tweet actions -->
                <div class="flex justify-between pr-12">
                  <div class="text-gray-500 hover:text-primary">
                    <i
                      class="far fa-comment hover:bg-blue-50 rounded-full p-2"
                    ></i>
                    <span class="ml-1 text-sm p-1">11</span>
                  </div>

                  <div class="text-gray-500 hover:text-green-500">
                    <i
                      class="fa fa-retweet hover:bg-green-50 p-2 rounded-full"
                    ></i>
                    <span class="ml-1 text-sm p-1">11</span>
                  </div>

                  <div class="text-gray-500 hover:text-red-500">
                    <i
                      class="far fa-heart hover:bg-red-50 rounded-full p-2"
                    ></i>
                    <span class="ml-1 text-sm p-1">11</span>
                  </div>

                  <div class="text-gray-500 hover:text-primary rounded-full">
                    <i
                      class="
                        fa-solid fa-share-from-square
                        hover:bg-blue-50
                        rounded-full
                        p-2
                      "
                    ></i>
                  </div>
                </div>
                <!-- tweets -->
              </div>
            </div>
          </div>
        </div>
        <!-- trend section -->
        <div class="hidden lg:block lg:w-2/5 px-4 py-2">
          <!-- tweet search input -->
          <div class="relative mb-5">
            <input
              type="text"
              class="
                rounded-full
                w-full
                p-2
                bg-gray-100
                text-sm
                focus:ring-1
                focus:ring-primary
                focus:bg-white
                focus:outline-none
                pl-10
              "
              placeholder="트위터 검색"
            />
            <i
              class="absolute fas fa-search left-0 mt-2 ml-3 text-sm text-light"
            ></i>
          </div>
          <!-- trend for me -->
          <div class="w-full rounded-xl bg-gray-50 flex flex-col">
            <div
              class="
                flex
                items-center
                justify-between
                px-3
                py-1
                border-b border-gray-100
              "
            >
              <span class="text-lg font-bold"
                >나를 위한 트랜드
                <i
                  class="
                    fas
                    fa-cog
                    text-lg text-primary
                    hover:bg-blue-50
                    p-2
                    rounded-full
                    text-center
                  "
                ></i>
              </span>
            </div>
            <div
              class="
                border-b border-gray-100
                hover:bg-gray-100
                px-4
                py-2
                cursor-pointer
              "
              v-for="trend in 3"
              :key="trend"
            >
              <div class="flex">
                <div class="flex-1 flexs flex-col">
                  <div class="text-gray-500">대한민국에서 트랜드 중</div>
                  <div class="font-bold text-lg">러블리즈</div>
                  <div class="text-gray-500">3,564 트윗</div>
                </div>
                <i class="fas fa-ellipsis-h text-gray-500"></i>
              </div>
            </div>
            <div class="px-4 py-2 hover:bg-gray-100 hover:rounded-b-xl">
              <span class="text-primary text-lg rounded-xl">더 보기</span>
            </div>
          </div>
          <!-- trend for me -->
          <!-- follw recommends-->
          <div class="mt-5 w-full rounded-xl bg-gray-50 flex flex-col">
            <div class="px-3 py-3 border-b border-gray-100">
              <span class="text-lg font-bold"
                >팔로우 추천
                <i
                  class="
                    text-lg text-primary
                    hover:bg-blue-50
                    p-2
                    rounded-full
                    text-center
                  "
                ></i>
              </span>
            </div>
            <div
              class="
                border-b border-gray-100
                hover:bg-gray-100
                cursor-pointer
                px-4
                py-2
              "
              v-for="trend in 3"
              :key="trend"
            >
              <div class="flex items-center">
                <div>
                  <img
                    src="http://picsum.photos/200"
                    class="
                      w-12
                      h-12
                      rounded-full
                      mr-2
                      hover:opacity-60
                      cursor-pointer
                    "
                  />
                </div>
                <div class="flex-1 flexs flex-col">
                  <div class="font-bold text-lg ml-2">문재인</div>
                  <div class="text-gray-500">@president_of_korea</div>
                </div>
                <div>
                  <button
                    class="
                      border-2 border-primary
                      hover:bg-blue-100
                      px-4
                      py-1
                      rounded-full
                      text-primary
                    "
                  >
                    팔로우
                  </button>
                </div>
              </div>
            </div>
            <div class="px-4 py-2 hover:bg-gray-100 hover:rounded-b-xl">
              <span class="text-primary text-lg rounded-xl">더 보기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>