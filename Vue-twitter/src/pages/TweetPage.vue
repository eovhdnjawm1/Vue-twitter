<template>
  <div class="flex-1 flex">
    <div class="flex-1 border-r border-gray-100">
      <div class="flex flex-col">
        <!-- title -->
        <div class="flex items-center px-3 py-2 border border-gray-100">
          <button @click="router.go(-1)">
            <i
              class="
                fas
                fa-arrow-left
                text-primary text-lg
                ml-3
                hover:bg-blue-50
                p-2
                rounded-full
                h-10
                w-10
              "
            ></i>
          </button>
          <span class="font-bold text-lg ml-6">트윗</span>
        </div>
        <!-- tweet -->
        <div class="px-3 py-2 flex">
          <img
            src="http://picsum.photos/100"
            class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer"
            alt=""
          />
          <div class="ml-2">
            <div class="font-bold">이메일</div>
            <div class="text-gray text-sm">@id</div>
          </div>
        </div>
        <!-- body  -->
        <div class="px-3 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptas voluptates velit sit minima magnam repudiandae id nemo. Rerum
          nesciunt recusandae est harum totam maiores similique rem tempore
          asperiores consectetur.
        </div>
        <div class="px-3 py-2 text-gray text-xs">오후 7:00 2021년 2월 20일</div>
        <div class="h-px w-full bg-gray-100"></div>
        <div class="flex space-x-2 px-3 py-2 items-center">
          <span class="">1</span>
          <span class="text-sm text-gray">리트윗</span>
          <span class="ml-5">1</span>
          <span class="text-sm text-gray">마음에 들어요</span>
        </div>
        <div class="h-px w-full bg-gray"></div>
        <!-- button -->
        <div class="flex justify-around py-2">
          <button>
            <i
              class="
                far
                fa-comment
                text-gray-400 text-xl
                hover:bg-blue-50 hover:text-primary
                p-2
                rounded-full
                h-10
                w-10
              "
            ></i>
          </button>
          <button>
            <i
              class="
                fas
                fa-retweet
                text-gray-400 text-xl
                hover:bg-green-50 hover:text-green-400
                p-2
                rounded-full
                h-10
                w-10
              "
            ></i>
          </button>
          <button>
            <i
              class="
                far
                fa-heart
                text-gray-400 text-xl
                hover:bg-red-50 hover:text-red-400
                p-2
                rounded-full
                h-10
                w-10
              "
            ></i>
          </button>
        </div>
        <div class="h-px w-full bg-gray"></div>
        <!-- comments -->
        <div
          class="
            flex
            hover:bg-gray-100
            cursor-pointer
            p-3
            border-b border-gray-100
          "
        >
          <img
            src="http://picsum.photos/100"
            class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer"
            alt=""
          />
          <div class="ml-2 flex-1 space-x-2">
            <div class="flex items-center">
              <span class="font-bold">skyyj32@nate.com</span>
              <span class="text-gray text-sm">@skyyj32</span>
              <span class="font-bold">19 days ago</span>
            </div>
            <div>
              <div>댓글</div>
            </div>
            <button>
              <i
                class="
                  fas
                  fa-trash
                  text-red-400
                  hover:bg-red-50
                  w-10
                  h-10
                  rounded-full
                  p-2
                "
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <trends></trends>
  </div>
</template>

<script>
import Trends from "../components/Trends.vue";
import router from "../router";

export default {
  components: { Trends },
  setup() {
    return { router };
  },
};
</script>

<style>
</style>