<template>
  <!-- main parts -->
  <div class="flex-1 border-r border-gray-200 overflow-y-auto">
    <div class="flex flex-col">
      <!-- page title -->
      <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
      <!-- tweeting section -->
      <div class="flex px-3 py-3 border-b-8 border-gray-100">
        <img
          :src="currentUser.profile_image_url"
          alt=""
          class="w-10 h-10 rounded-full hover:opacity-60 cursor-pointer"
        />
        <div class="flex flex-1 flex-col ml-2">
          <textarea
            v-model="tweetBody"
            class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
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
      <!-- tweets -->
      <Tweet
        v-for="tweet in tweets"
        :key="tweet.id"
        :currentUser="currentUser"
        :tweet="tweet"
      />
    </div>
  </div>
  <!-- trend section -->
  <Trends />
</template>

<script>
import Trends from "../components/Trends.vue";
import Tweet from "../components/Tweet.vue";
import { ref, computed, onBeforeMount } from "vue";
import store from "../store";
import { TWEET_COLEECTION, USER_COLEECTION } from "../firebase";
import addTweet from "../utils/addTweet";
import getTweetInfo from "../utils/getTweetInfo";

export default {
  components: { Trends, Tweet },
  setup() {
    const tweetBody = ref("");
    const currentUser = computed(() => store.state.user);
    const tweets = ref([]);

    onBeforeMount(() => {
      // Mount 되기전에 했으면 하는 코드
      TWEET_COLEECTION.orderBy("created_at", "desc").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          let tweet = await getTweetInfo(change.doc.data(), currentUser.value);
          if (change.type === "added") {
            // 트윗 추가
            tweets.value.splice(change.newIndex, 0, tweet);
          } else if (change.type === "modified") {
            // 리트윗
            tweets.value.splice(change.oldIndex, 1, tweet);
          } else if (change.type === "removed") {
            // 제거
            tweets.value.splice(change.oldIndex, 1);
          }
        });
      });
    });

    // 트윗을 올린 uid를 가지고 옴

    const onAddTweet = async () => {
      try {
        await addTweet(tweetBody.value, currentUser.value);
        tweetBody.value = "";
      } catch (e) {
        console.log("on add tweet error on hompage:", e);
      }
    };
    return { currentUser, tweetBody, onAddTweet, tweets };
  },
};
</script>

<style>
</style>