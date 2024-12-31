<template>
  <!-- 중괄호 두번하는게 문법 (바인딩) -->
  <div class="name">{{msg}}</div>
  <div class="name">{{ greeting() }}</div>
  <div class="name">{{ hello("jslim") }}</div>
</template>


<script>
  // Vue2, Vue3 두가지 버전
  // Vue3 : Composition API 기반으로 개발이 이루어지고 있음.
  // setup()이 있으면 3버전 없으면 2버전
  // msg에 들어있는 데이터를 바꾸면 페이지 리로딩없이 랜더링이됨.
  export default {
    setup() {
      const msg = "즐거운 점심시간~~~~ 뭐 먹지?" ;

      const greeting = () => {
        return "Hi~~";
      }

      const hello = (name) => {
        return `Hi~~, ${name}`;
      }

      return {
        msg,
        greeting,
        hello
      }
    }
  }
</script>

<style>
  .name {
    color: red;
  }
</style>
