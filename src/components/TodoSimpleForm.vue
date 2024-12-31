<template>
        <form @submit.prevent="onSubmit" class="d-flex"> 

        <div class="flex-grow-1 mr-2"> 
            <input class="form-control" 
                   type="text" 
                   placeholder="Add Your To-Do"
                   v-model="todo">

        </div>
        <!-- Add버튼을 누르면 TodoApp인 부모로 데이터를 올려줘야한다. -->
        <div>
            <button class="btn btn-primary" type="submit">Add</button>
        </div>
        
    </form>

    <!-- 기존 탬플릿에서 빈상태로 add를 누르면 빈칸이 계속 추가됨 조건처리 필요 -->
    <div v-show="hasError" style="color: red;">
        This field cannot be empty!!
    </div>

</template>

<script>

import { ref } from "vue";

export default {
    // setup에서 사용하는 props는 해당 버튼이든 뭐든 사용했다는걸 인지하기 위해 사용
    emits : ['add-todo'],

    setup(props, context) {

        const todo = ref('');
        const hasError = ref(false);

        // 부모인 TodoApp.vue 에게 리프팅업 해줘야함 = emit
        const onSubmit = () => {
            if(todo.value == '') {
                hasError.value = true;
            } else {
                context.emit('add-todo', {          // add-todo라는 이름으로 부모에게 리프팅 시킨다는 뜻
                    id : Date.now(),
                    subject : todo.value,
                    completed : false
                })
                hasError.value = false; 
                todo.value = '';
            }   
        }

        return {
            todo,
            hasError,
            onSubmit,

        }
    }
}
</script>

<style>

</style>