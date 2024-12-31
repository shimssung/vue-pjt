<template>
    <div class="container">
        <h2>List</h2>
        <form @submit.prevent="onSumbit" class="d-flex"> 
        <div class="flex-grow-1 mr-2"> 
            <input class="form-control" 
                   type="text" 
                   placeholder="Add Your To-Do"
                   v-model="todo">

        </div>
        <div>
            <button class="btn btn-primary" type="submit">Add</button>
        </div>
        
    </form>

    <div v-show="hasError" style="color: red;">
        This field cannot be empty!!
    </div>

    <!-- <div class="card mt-2">     margin-top 인듯
            <div class="card-body p-2">     padding 인듯
                {{ todos[0].subject }}
            </div>
        </div>
        <div class="card mt-2">
            <div class="card-body p-2">
                {{ todos[1].subject }}
            </div>
        </div> -->

        <!--vue에서 제공하는 반복문 : v-for-->
        <div v-for="data in todos" :key="data.id" class="card mt-2">
            <div class="card-body p-2">     <!--padding 인듯-->
                {{ data.subject }}
            </div>
        </div>



    </div>
</template>

<script>
import { ref } from "vue";  // 필요한 라이브러리 import
export default {
    setup() {
        let hasError = ref(false);  // v-show 조건처리
        let cnt = 1;
        const todo = ref('') ;
        const todos = ref([
            { id : cnt++, subject : '파일럿 영화보기'},
            { id : cnt++, subject : '충분한 휴식'},
        ]);

        // const onSumbit = () => {
        //     todos.value.push({
        //         id : cnt++, 
        //         subject : todo.value        
        //     });
        // }

        const onSumbit = () => {
            if(todo.value == '') {
                hasError.value = true;
            } else {
                todos.value.push({
                id : cnt++, 
                subject : todo.value       
            });
            hasError.value = false; 
            todo.value = '';
            }
        }

        return {
            todo,
            todos,
            onSumbit,
            hasError
        }
    }
}
</script>

<style>

</style>