<template>
    <!--  
    데이터에 바인드하기 위해서는 v-bind 사용
    이벤트를 처리하기 위해서는 v-on 사용 - @로 대체 가능 
    양방향 통신을 위해? v-model 사용 (반응형) - v-model을 사용하여 양방향 바인딩을 설정하면 데이터 변경이 반영
    -->
    <div>
        {{ name }}
    </div>
    <!-- <input v-bind:type="type" v-bind:value="name"> -->
     <input type="text" v-model="name">
    <div class="container">
        <button class="btn btn-primary" @click="updateDate">Click</button>
    </div>
</template>

<script>
// Vue.js에서 이벤트 처리는 v-on:eventName="함수이름" 문법 사용, v-on생략하고싶으면 @를 대신 넣으면댐
// name의 값이 dynamic data로 바뀌는데 let name의 값(화면에 보이는 name)이 바뀌지않음.
// DOM에서 script로 script에서 DOM으로 양방향 통신하기 위해서는 
// 스크립트에서 반응형 데이터(reactive state)로 작성해야만한다.
// 반응형 데이터(reactive state) : 데이터변경시 템플릿도 변경되어야 하는것을 의미
// 즉 이벤트 발생전 jslim에서 이벤트 발생 후 dynamic data로 데이터는 변경이 되었지만 템플릿으 변경되지 않음.
// 해결하기 위해 사용할 수 있는 함수 : ref(), reactive()

import {ref} from 'vue' ;

export default {
    setup() {
        // 템플릿과 실시간으롭 변화를 감지하고 통신하기위해 ref()함수를 사용, 
        // ref()대신 reactive가능 reactive는 .value없어도댐 - 뭔가 문제가있음 일단 ref() 사용
        // ref()함수에 있는 값을 변경하기 위해서는 .value를 붙여줘야한다.
        // let name = "jslim" ;
        let name = ref("jslim") ;
        let type = ref("number") ;

        const updateDate = () => {
            // console.log("debug : ", name.value);
            // name.value = "dynamic data" ;
            // type.value = "text" ;
            // console.log("debug : ", name.value);
            console.log(name.value);  // 데이터를 적으면 실시간으로 name부분이 적은대로 바뀜 리로딩없이
            
        };

        return {
            updateDate,
            name,
            type
        }
    }
}
</script>

<style>

</style>