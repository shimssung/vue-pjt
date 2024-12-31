<template>
    <div class="container">
        <h2>To-Do List Page</h2>
        <TodoSearch @search-Txt="filteredTodos"/>

        <!-- TodoSimpleForm에게 emit받은 add-todo 리프팅업 -->
        <TodoSimpleForm @add-todo="addTodo" />
        
        <div v-if="todos.length == 0" style="color: red;">
            추가된 일정이 없습니다.
        </div>
        <!-- props 개념 내려줄 데이터: todos, 이름: todos-->
        <!-- TodoList에서 다시 보낸 데이터 delete-index를 받아 onDelete로 사용 -->
        <TodoList :todos="filterTodos" 
                   @toggle-todo="toggleTodo"
                   @delete-index="onDelete"/>
        
    </div>
</template>
<script>
import { ref, computed } from "vue";
import TodoSimpleForm from "./components/TodoSimpleForm.vue";
import TodoList from "./components/TodoList.vue";
import TodoSearch from "./components/TodoSearch.vue";


export default {
    // import로 가져온 컴포넌트를 탬플릿 쪽에서 태그로 사용하기 위한 필수 절차
    // 최상위 앱에서 컴포넌트를 사용하는 방법
    components : {
        TodoSimpleForm,
        TodoList,
        TodoSearch,
    },
    // TodoSimpleForm에게서 내려받은 데이터 이름을 addTodo로 바꿧고 이름 data라는 이름으로 함수에서 사용
    // 이걸 다시 todos.value로 배열에 넣고 이 todos를 다시 TodoList로 내려줌.
    setup() {
        const todos = ref([]);
        const search = ref('');

        const filteredTodos = (searchTxt => {
            console.log("debug >>> computed : ", searchTxt);
            return search.value = searchTxt
        });

        const filterTodos = computed(() => {
            if(search.value) {
                return todos.value.filter( todo => {
                    return todo.subject.includes(search.value);
                }) 
            }
            return todos.value;
        });


        const addTodo = (data) => {
            todos.value.push(data);
        }

        const toggleTodo = (index) => {
            console.log("debug >>> toggleTodo index : ", index);
            console.log("debug >>> toggleTodo before: ", todos.value[index]);
            todos.value[index].completed = !todos.value[index].completed;
            console.log("debug >>> toggleTodo after : ", todos.value[index]);
        }
        const onDelete = (index) => {
            console.log("debug >>> delete btn click index : ", index);
            todos.value.splice(index, 1);
        }
        
        return {
            todos,
            addTodo,
            toggleTodo,
            onDelete,
            filteredTodos,
            filterTodos,
        }
    }
}
</script>
<style>
</style>