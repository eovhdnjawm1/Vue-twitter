<template>
  <div class="flex flex-col items-center space-y-4 mt-10">
    <i
      :class="`fab fa-twitter text-4xl text-primary  
      ${loading ? 'animate-bounce' : ''}`"
    ></i>
    <span class="text-2xl font-bold">뜨위떠 회원가입</span>
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
      v-model="email"
      class="
        rounded
        w-96
        px-4
        py-3
        border border-gray-300
        focus:ring-2 focus:border-primary focus:outline-none
      "
      placeholder="아이디"
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
      @click="onRegister"
      class="rounded-full w-96 bg-primary text-white py-3 hover:bg-dark"
    >
      회원가입
    </button>
    <router-link to="/login">
      <button class="text-primary">계정이 이미 있으신가요? 로그인 하기</button>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "../firebase";
export default {
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const loading = ref(true);

    const onRegister = async () => {
      try {
        const credential = await auth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        console.log(credential);
      } catch (e) {
        console.log("create use with email and password error:", e);
      }
    };
    return {
      username,
      email,
      password,
      onRegister,
      loading,
    };
  },
};
</script>

<style>
</style>