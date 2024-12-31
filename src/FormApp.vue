<!-- 기본적으로 브라우저가 수행하는 기본 동작을 막기 위해 사용됩니다. @submit.prevent는 주로 폼 제출 시 페이지가 리로드되는 것을 방지하는 데 사용됩니다. -->
<!-- 지정된 요소가 부모의 가용 공간을 비율에 맞게 차지하도록 하는 속성입니다. 숫자 1은 요소가 가능한 한 많이 공간을 차지하도록 설정합니다. 여러 요소가 flex-grow 값을 가지고 있을 때, 이 값은 요소들 간의 가용 공간의 비율을 결정합니다. -->
<template>
    <form @submit.prevent="onSumbit" class="d-flex"> <!-- submit이 두번발생하는 이벤트 버블링때문에 .prevent붙여줌-->
        <div class="flex-grow-1 mr-2"> <!-- 여기 class 검색해보자-->
            <input class="form-control" 
                   type="text" 
                   placeholder="Add Your To-Do"
                   v-model="todo">

        </div>
        <div>
            <button class="btn btn-primary" type="submit">Add</button>
        </div>
    </form>

    {{ todos }}

</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const todo = ref('') ; // 양방향 통신 가능하게 만든 데이터
        const todos = ref([]);
        const onSumbit = () => {
            console.log("debug event : ");
            todos.value.push({
                id : Date.now(),
                subject : todo.value
            });
        }

        return {
            onSumbit,
            todos,
            todo
        }
    }
}
</script>

<style>

</style>