<template>
  <router-view></router-view>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onBeforeMount } from "vue";

const router = useRouter();
const store = useStore();

onBeforeMount(() => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken != null) {
    axios
      .get("/user", {
        headers: { "X-AUTH-TOKEN": accessToken },
      })
      .then((response) => {
        console.log(response);
        const user = response.data;
        store.dispatch("setUser");
        router.push("/list");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    router.push("/user/login");
  }
});
</script>

<style scoped>
h3 {
  padding: 10px;
}
</style>
