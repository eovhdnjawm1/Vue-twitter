<template>
  <component :is="layout"></component>
</template>

<script>
import DefaultLayout from "./DefaultLayout.vue";
import EmptyLayout from "./EmptyLayout.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  // 상황에 따라 Empty, Default Layout으로 이동하기
  components: { DefaultLayout, EmptyLayout },
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout || "DefaultLayout");

    //   return 을 해줘야 위에서 사용할 수 있음
    return {
      layout,
    };
  },
};
</script>

<style>
</style>