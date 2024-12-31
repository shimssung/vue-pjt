<template>
    <div class="container">
        <h2>List</h2>
        <form @submit.prevent="onSubmit" class="d-flex"> 
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

        <div v-if="todos.length == 0" style="color: red;">
            추가된 일정이 없습니다.
        </div>

        <!-- 기존 탬플릿에서 빈상태로 add를 누르면 빈칸이 계속 추가됨 조건처리 필요 -->
        <div v-show="hasError" style="color: red;">
            This field cannot be empty!!
        </div>


        <!--vue에서 제공하는 반복문 : v-for-->
        <!-- v-model인 todos를 리턴받고있고 그 안에 data와 data.completed 둘다 들어있어서 리턴받을 필요없음 -->
        <!-- for문 검색해봐야할듯!! index없애고 data.id를 써도됌 -->
        <!-- data.id 보다 index를 받아서 넘기는건 삭제할때 splice()함수를 사용하기 위해 -->
        <!-- splice()함수는 배열의 특정 인덱스에서 제거하는 함수 -->
        <div v-for="(data, index) in todos" :key="data.id" class="card mt-2">
            <div class="card-body p-2 d-flex align-items-center">     <!--padding 인듯-->
                <div class="form-check flex-grow-1">    <!--bootstrap 체크박스 css-->
                    <input type="checkbox" 
                           class="form-check-input" 
                           v-model="data.completed">
                    <label class="form-check-lable" 
                           :style="data.completed ? todoStyle : {}"> <!--클래스 바인딩-->
                        {{ data.subject }}
                    </label>
                </div>

                <div>
                    <button class="btn btn-danger btn-sm"
                            @click="onDelete(index)">
                        Delete
                    </button>
                </div>
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
        const todos = ref([]);

        // 클래스 바인딩
        const todoStyle = {
            textDecoration : 'line-through',
            color : 'red'
        }
        
        const onSubmit = () => {
            if(todo.value == '') {
                hasError.value = true;
            } else {
                todos.value.push({
                id : cnt++, 
                subject : todo.value,
                completed : false  
            });
            hasError.value = false; 
            todo.value = '';
            }   
        }

        const onDelete = (index) => {
            console.log("debug >>> delete btn click index : ", index);
            todos.value.splice(index,1)
        }

        return {
            todo,
            todos,
            onSubmit,
            hasError,
            todoStyle,
            onDelete
            
        }
    }
}
</script>

<style>
    .todo {
        color: gray;
        text-decoration: line-through;
    }
</style>

