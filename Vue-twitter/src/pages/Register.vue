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
      placeholder="아이디"
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
      placeholder="이메일"
    />
    <input
      type="password"
      @keyup.enter="onRegister"
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
    <button v-if="loading" class="rounded-full w-96 bg-light text-white py-3">
      회원가입 중 입니다.
    </button>
    <button
      v-else
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
import { auth, USER_COLEECTION } from "../firebase";
import { useRouter } from "vue-router";
// import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  // data = await createUserWithEmailAndPassword(
  //   authService,
  //         email.value,
  //         password.value
  // ),
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const router = useRouter();

    const onRegister = async () => {
      if (!username.value || !email.value || !password.value) {
        alert("유저네임, 이메일, 비밀번호를 모두 입력해주세요");
        return;
      }
      try {
        loading.value = true;
        const { user } = await auth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        // collection은 doc의 모음
        const doc = USER_COLEECTION.doc(user.uid);
        await doc.set({
          username: username.value,
          uid: user.uid,
          email: email.value,
          profile_image_url: "/profile.jpeg",
          num_tweets: 0,
          followers: [],
          followings: [],
          created_at: Date.now(),
        });
        alert("회원 가입에 성공 하셨습니다, 로그인 해주세요");
        router.push("/login");
      } catch (e) {
        switch (e.code) {
          case "auth/invalid-email":
            alert("이메일을 바르게 입력해주세요");
            break;
          case "auth/weak-password":
            alert("비밀번호가 너무 쉬워요");
            break;
          case "auth/email-already-in-use":
            alert("이미 가입되어 있는 이메일 입니다.");
            break;
          default:
            alert("회원가입 실패");
            break;
        }
      } finally {
        loading.value = false;
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