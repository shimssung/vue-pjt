
<template>
     <!-- 검색해서 보내고 읽어와야하기때문에 v-model 사용 -->
     <input type="text" 
            class="form-control mb-2" 
            placeholder="Search" 
            v-model="searchTxt" 
            @input="onSearch">
</template>

<script>

import { ref } from "vue";

export default {
    setup(props, context) {
        const searchTxt = ref('');

        const onSearch = () => {
             context.emit('search-Txt', searchTxt.value)
        };

        return {
            onSearch,
            searchTxt
        }
    }
}
</script>

<style>

</style>