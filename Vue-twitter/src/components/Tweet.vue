<template>
  <!-- tweets -->
  <div
    class="
      flex
      px-3
      py-3
      border-b border-gray-100
      hover:bg-gray-50
      cursor-pointer
    "
  >
    <router-link :to="`/profile/${tweet.uid}`">
      <img
        :src="tweet.profile_image_url"
        class="w10 h-10 rounded-full hover:opacity-60 cursor-pointer"
      />
    </router-link>
    <div class="flex-1 flex flex-col ml-3 space-y-2">
      <div class="text-sm flex justify-between items-center">
        <div class="space-x-2">
          <span class="font-bold">{{ tweet.email }}</span>
          <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
          <span>.</span>
          <span class="text-gray-500 text-xs">{{
            moment(tweet.created_at).fromNow()
          }}</span>
        </div>
        <button
          v-if="currentUser.uid === tweet.uid"
          @click="onDeleteTweet(tweet)"
        >
          <i
            class="fas fa-trash text-red-400 p-2 rounded-full hover:bg-red-50"
          ></i>
        </button>
      </div>
      <!-- tweet body -->
      <router-link :to="`/tweet/${tweet.id}`">
        {{ tweet.tweet_body }}
      </router-link>
      <!-- tweet actions -->
      <!-- comment button -->
      <div class="flex justify-between pr-12">
        <div
          @click="showCommentModal = true"
          class="text-gray-400 hover:text-primary"
        >
          <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm p-1">{{ tweet.num_comments }}</span>
        </div>
        <!-- retweet button -->
        <div
          v-if="!tweet.isRetweeted"
          @click="handleRetweet(tweet)"
          class="text-gray-400 hover:text-green-400"
        >
          <i class="fa fa-retweet hover:bg-green-50 p-2 rounded-full"></i>
          <span class="ml-1 text-sm p-1">{{ tweet.num_retweets }}</span>
        </div>
        <div v-else @click="handleRetweet(tweet)" class="text-green-400">
          <i class="fa fa-retweet hover:bg-green-50 p-2 rounded-full"></i>
          <span class="ml-1 text-sm p-1">{{ tweet.num_retweets }}</span>
        </div>
        <!-- like button -->
        <div
          v-if="!tweet.isLiked"
          @click="handleLikes(tweet)"
          class="text-gray-400 hover:text-red-400"
        >
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm p-1">{{ tweet.num_likes }}</span>
        </div>
        <div v-else @click="handleLikes(tweet)" class="text-red-400">
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm p-1">{{ tweet.num_likes }}</span>
        </div>
        <!-- share button -->
        <div class="text-gray-400 hover:text-primary rounded-full">
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
import handleRetweet from "../utils/handleRetweet";
import handleLikes from "../utils/handleLikes";
import {
  COMMENT_COLLECTION,
  LIKE_COLLECTION,
  RETWEET_COLLECTION,
  TWEET_COLEECTION,
  USER_COLEECTION,
} from "../firebase";
import firebase from "firebase";

export default {
  components: { commentModal },
  props: ["currentUser", "tweet"],
  setup() {
    const showCommentModal = ref(false);

    const onDeleteTweet = async (tweet) => {
      // 예외처리
      if (confirm("정말로 트윗을 삭제하시겠습니까?")) {
        // delete tweet
        await TWEET_COLEECTION.doc(tweet.id).delete();

        //delete comments
        const commentSnapShot = await COMMENT_COLLECTION.where(
          "from_tweet_id",
          "==",
          tweet.id
        ).get();
        commentSnapShot.docs.forEach(async (doc) => await doc.ref.delete());
        // likes
        const likeSnapShot = await LIKE_COLLECTION.where(
          "from_tweet_id",
          "==",
          tweet.id
        ).get();
        likeSnapShot.docs.forEach(async (doc) => await doc.ref.delete());
        // delete retweets
        const retweetSnapshot = await RETWEET_COLLECTION.where(
          "from_tweet_id",
          "==",
          tweet.id
        ).get();
        retweetSnapshot.docs.forEach(async (doc) => await doc.ref.delete());
        // user collection - num_tweets (-1)
        await USER_COLEECTION.doc(tweet.uid).update({
          num_tweets: firebase.firestore.FieldValue.increment(-1),
        });
      }
    };
    return {
      moment,
      showCommentModal,
      handleLikes,
      handleRetweet,
      onDeleteTweet,
    };
  },
};
</script>

<style>
</style>