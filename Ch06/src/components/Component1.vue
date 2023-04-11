<template>
  <h4>Component1</h4>
  <p>
    vuex value : {{ value }}<br />
    vuex count : {{ count }}
  </p>
  <button @click="btnIncrement">증가</button>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

// vuex 전역스토어 가져오기
const store = useStore();

const value = store.getters.getValue;
const count = computed(() => store.getters.getCount);

const btnIncrement = () => {
  store.dispatch("increment");
};
</script>
<style scoped></style>
