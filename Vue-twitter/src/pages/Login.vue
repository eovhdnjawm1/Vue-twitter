<template>
  <div class="flex flex-col items-center space-y-4 mt-10">
    <i
      :class="`fab fa-twitter text-4xl text-primary  
      ${loading ? 'animate-bounce' : ''}`"
    ></i>
    <span class="text-2xl font-bold">뜨위떠 로그인</span>
    <input
      type="text"
      v-model="username"
      class="
        w-96
        px-4
        py-3
        border border-gray-300
        rounded
        focus:ring-2 focus:border-primary focus:outline-none
      "
      placeholder="이메일"
    />

    <input
      type="text"
      v-model="password"
      class="
        rounded
        w-96
        px-4
        py-3
        border border-gray-300
        focus:ring-2 focus:border-primary focus:outline-none
      "
      placeholder="비밀번호"
    />
    <button
      @click="onLogin"
      class="rounded-full w-96 bg-primary text-white py-3 hover:bg-dark"
    >
      회원가입
    </button>
    <router-link to="/register">
      <button class="text-primary">계정이 없으신가요? 회원가입 하기</button>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const loading = ref(true);

    const onLogin = () => {
      console.log(username.value, email.value, password.value);
    };
    return {
      username,
      email,
      password,
      onLogin,
      loading,
    };
  },
};
</script>

<style>
</style>