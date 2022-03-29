<template>
  <!-- tweets -->
  <div
    class="
      flex
      px-3
      py-3
      border-b border-gray-100
      hover:bg-gray-100
      cursor-pointer
    "
  >
    <img
      :src="currentUser.profile_image_url"
      class="w10 h-10 rounded-full hover:opacity-60 cursor-pointer"
    />
    <div class="flex-1 flex flex-col ml-3 space-y-2">
      <div class="text-sm space-x-1">
        <span class="font-bold">{{ tweet.email }}</span>
        <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
        <span>.</span>
        <span class="text-gray-500 text-xs">{{
          moment(tweet.create_at).fromNow()
        }}</span>
      </div>
      <!-- tweet body -->
      <div>
        {{ tweet.tweet_body }}
      </div>
      <!-- tweet actions -->
      <!-- comment button -->
      <div class="flex justify-between pr-12">
        <div
          @click="showCommentModal = true"
          class="text-gray-500 hover:text-primary"
        >
          <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm p-1">{{ tweet.num_comments }}</span>
        </div>
        <!-- tweet button -->
        <div class="text-gray-500 hover:text-green-500">
          <i class="fa fa-retweet hover:bg-green-50 p-2 rounded-full"></i>
          <span class="ml-1 text-sm p-1">{{ tweet.num_retweets }}</span>
        </div>
        <!-- like button -->
        <div class="text-gray-500 hover:text-red-500">
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm p-1">{{ tweet.num_likes }}</span>
        </div>
        <!-- share button -->
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
  <comment-modal
    v-if="showCommentModal"
    @close-modal="showCommentModal = false"
    :tweet="tweet"
  ></comment-modal>
</template>

<script>
import moment from "moment";
import { ref } from "vue";
import commentModal from "./CommentModal.vue";

export default {
  components: { commentModal },
  props: ["currentUser", "tweet"],
  setup() {
    const showCommentModal = ref(false);
    return {
      moment,
      showCommentModal,
    };
  },
};
</script>

<style>
</style>