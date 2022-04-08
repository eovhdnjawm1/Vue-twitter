# 뜨위터 

Vue, Vuex, tailwind, firebase를 이용하여 1인 작업을한 트위터 클론 코딩 입니다.


## 1. 목표

- 트위터 주요 기능 구현
1. 로그인, 회원가입, 로그아웃 기능
2. 트윗 작성, 리트윗, 답글쓰기, 좋아요, 삭제 기능 
3. 알림 기능 (최근 팔로우한 유저의 트윗을 불러오는 것)
4. 쪽지 기능 (유저를 선택 후 메시지를 보내는 기능)
5. 프로필 이미지, 프로필 배경 이미지 선택 및 교체 기능
6. 반응형 레이아웃 기능
7. Github를 사용한 issue 관리, pullrequests 

## 2. 개발 환경 및 배포

### 2.1 스택

- HTML
- CSS
- JavaScript
- Node.js
- Vue
- Vuex
- tailwind
- firebase

### 2.2 배포

[URL]https://twitter-clone-youngjin.firebaseapp.com/


## 3. 프로젝트 구조와 개발 일정

### 3.1 프로젝트 구조

```
.
├── node_modules
├── src
│   ├── components
│   │   ├── Tweet.vue
│   |   └── ...vue
│   └── layout
│   |   ├── DefaultLayout.vue
│   |   └── ...vue
│   └── pages
│       ├── Home.vue
│       └── ...vue
├── firebase
│   ├── index.js
├── router
│   ├── index.js
├── store
│   ├── index.js
├── utils
│   ├── addTweet.js
│   ├── ...js
├── App.vue
├── index.css
└── main.js
```

### 3.2 개발일정

기간 : 4주 - 2022.03.11(금) ~ 2022.04.08(금)

- HTML/CSS 1주 - 2022.03.11(금) ~ 2022.03.18(금)
- Vue, Vuex - 2022.03.18(금) ~ 2022.04.08(화)

## 4. UI
![image](https://user-images.githubusercontent.com/70947883/162357587-df7972d1-03ed-4915-b672-4335e154967c.png)

## 5. Github
![image](https://user-images.githubusercontent.com/70947883/162259097-63c35592-4a6d-4dfe-98df-52e8952a275c.png)
![image](https://user-images.githubusercontent.com/70947883/162259174-ef26dc24-18cd-47d9-8936-096a8dd7bee0.png)

<br/>

## 6. 개발하며 고민한 부분 및 해결 방법

- Vue, Vuex, tailwind를 사용하여 작업한 것이 처음이라 모든게 낯설었다.
- 하지만 Vue 렌더링의 편리성, Vuex의 데이터관리, tailwind를 사용하여 빠르게 css 작업한다는 것에 새로운 기술을 알게되었다.
- 특히 firebase 처럼 서버를 혼자 이용하여 작업하는 것은 처음이였기 때문에 데이터를 주고받는 부분에서 많은 에러사항을 겪었다
  -  firebase 의 최신버전은 유저 정보 하나를 불러올때도 세부적으로 불러와야하기 때문에 firebase 버전을 강제적으로 낮추어 사용하였음
- 작업하면서 에러사항이 생기거나 막히는 부분이 생긴다면 개인 블로그에 정리를 하여 차후 동일한 문제에 대해 조심을 할 수 있었음
- 메세지 기능을 작업하면서 많은 시간이 소요가 되었는데 그 만큼 다른 작업에서 메세지 기능을 이전보단 용이하게 작업할 수 있는 자신감이 생김 
