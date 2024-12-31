<template>

        <div v-for="(data, index) in todos" :key="data.id" class="card mt-2">
            <div class="card-body p-2 d-flex align-items-center">     <!--padding 인듯-->
                <div class="form-check flex-grow-1">    <!--bootstrap 체크박스 css-->
                    <input type="checkbox" 
                           class="form-check-input" 
                           :value="data.completed"
                           @change="toggleTodo(index)">
                    <label class="form-check-lable" 
                           :style="data.completed ? todoStyle : {}"> <!--클래스 바인딩-->
                        {{ data.subject }}
                    </label>
                </div>

                <div>
                    <button class="btn btn-danger btn-sm"
                            @click="onDelete(index)" >
                        Delete
                    </button>
                </div>
            </div>
        </div>
</template>

<script>

/*
props 사용시 주의점
 - props 전달된 데이터는 One-Way Data Flow (부모(TodoApp)가 자식(TodoList)에게 보낸 데이터)
 - 그래서, 부모의 데이터를 자식에서 값을 변경할 수 없다.
 - 여기선 부모의 data.completed값이 여기서 변경될 수가 있다.
 - 그래서 변경된값을 여기서 처리하는게 아니라 부모로 전송
*/


export default {
    // TodoApp로부터 내려받은 props 데이터 이름: todos
    props : {
        todos : {
            type : Array,
            required : true
        }
    },

    // context라는 객체 안에서 emit꺼내서 사용
    emits : ['toggle-todo', 'delete-index'],

    setup(props, context) {

        // 클래스 바인딩
        const todoStyle = {
            textDecoration : 'line-through' , 
            color : 'red'
        }


        // TodoApp에게 toggle-todo라는 이름으로 값을 보냄
        const toggleTodo = (index) => {
            context.emit('toggle-todo', index);
        }

        const onDelete = (index) => {
            context.emit('delete-index', index);
        }

        return {
            toggleTodo,
            onDelete,
            todoStyle
        }
    }
}
</script>

<style>

</style>