<template>
  <li v-for="(todo, index) in todos">
    <i class="fa fa-check" aria-hidden="true"></i>
    <span>{{ todo.content }}</span>
    <button @click="btnDelete(no)">삭제</button>
  </li>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Item",
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);
    const btnDelete = (index, no) => {
      store.dispatch("removeTodo", { index, no });
    };
    return { todos, btnDelete };
  },
};
</script>

<style scoped></style>
