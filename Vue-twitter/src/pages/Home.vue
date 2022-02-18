<template>
  <!-- main parts -->
  <div class="flex-1 border-r border-gray-200 overflow-y-auto">
    <div class="flex flex-col">
      <!-- page title -->
      <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
      <!-- tweeting section -->
      <div class="flex px-3 py-3 border-b-8 border-gray-100">
        <img
          src="http://picsum.photos/200"
          alt=""
          class="w-10 h-10 rounded-full hover:opacity-60 cursor-pointer"
        />
        <div class="flex flex-1 flex-col ml-2">
          <textarea
            class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptatem molestiae amet quae iure, impedit eius explicabo quas,
            modi itaque voluptas eaque illum nesciunt blanditiis ad tempore
            quasi! Molestiae, nisi?
          </div>
          <!-- tweet actions -->
          <div class="flex justify-between pr-12">
            <div class="text-gray-500 hover:text-primary">
              <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
              <span class="ml-1 text-sm p-1">11</span>
            </div>

            <div class="text-gray-500 hover:text-green-500">
              <i class="fa fa-retweet hover:bg-green-50 p-2 rounded-full"></i>
              <span class="ml-1 text-sm p-1">11</span>
            </div>

            <div class="text-gray-500 hover:text-red-500">
              <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
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
  <Trends />
</template>

<script>
import Trends from "../components/Trends.vue";
export default {
  components: { Trends },
  setup() {},
};
</script>

<style>
</style>