<!--
onToggle은 함수이름임 
    -->
<template>
    <!-- v-show 사용
    <div v-show="toggle">true</div>
    <div v-show="!toggle">false</div> 
    -->
    <!-- v-if 사용 -->
    <div v-if="toggle">true</div>
    <div v-else>false</div> 
    <button @click="onToggle">Toggle</button>
</template>

<script>
// 입력형식에 null 값이 입력되면 에러메시지를 출력하고싶다.- v-if구문 또는 v-show 사용가능
// v-if, v-show를 이용해서 에러메시지를 보여주거나 정상적인 데이터 입력시에는 보여주지 않는 것.

import { ref } from "vue";

export default {
    setup() {
        const toggle = ref(false);
        const onToggle = () => {
            toggle.value = !toggle.value ;
        }

        return {
            onToggle,
            toggle
        }
    }
}
</script>

<style>

</style>