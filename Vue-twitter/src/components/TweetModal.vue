<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    @click="$emit('close-modal')"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <!-- contents -->
      <div
        @click.stop
        class="
          relative
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
        "
      >
        <div class="border-b border-gray-100 px-4 p-2">
          <button
            class="
              fas
              fa-times
              text-primary text-lg
              p-2
              h-10
              w-10
              hover:bg-blue-50
              rounded-full
            "
          ></button>
        </div>
        <div class="flex p-4">
          <img
            src="https://picsum.photos/100"
            alt=""
            class="w-10 h-10 rounded-full hover:opacity-60 cursor-pointer"
          />
          <div class="flex flex-1 flex-col ml-2">
            <textarea
              v-model="tweetBody"
              class="
                w-full
                text-lg
                font-bold
                focus:outline-none
                mb-3
                resize-none
              "
              rows="5"
              placeholder="무슨 일이 일어나고 있나요?"
            ></textarea>
            <div class="text-right">
              <button
                v-if="!tweetBody.length"
                class="
                  font-bold
                  bg-light
                  text-white
                  px-4
                  py-2
                  rounded-full
                  cursor-default
                "
              >
                트윗
              </button>
              <button
                v-else
                @click="onAddTweet"
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
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const tweetBody = ref("");

    return {
      tweetBody,
    };
  },
};
</script>

<style>
</style>