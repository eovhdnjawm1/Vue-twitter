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
      <Tweet />
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