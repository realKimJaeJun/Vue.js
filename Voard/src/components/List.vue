<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글목록</v-app-bar-title>
      <p>
        {{ user?.nick }}님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-table>
            <thead>
              <tr>
                <th class="text-center" width="80">번호</th>
                <th class="text-center" width="auto">제목</th>
                <th class="text-center" width="100">작성자</th>
                <th class="text-center" width="100">조회수</th>
                <th class="text-center" width="100">작성일</th>
              </tr>
            </thead>
            <tbody @click="btnView">
              <tr v-for="(article, index) in state.data.articles">
                <td class="text-center">
                  {{ state.data.pageStartNum - index }}
                </td>
                <td class="text-left">{{ article.title }}</td>
                <td class="text-center">{{ article.nick }}</td>
                <td class="text-center">{{ article.hit }}</td>
                <td class="text-center">{{ article.rdate }}</td>
              </tr>
            </tbody>
          </v-table>

          <v-sheet class="text-right pt-6">
            <v-btn @click="btnWrite" color="success">글쓰기</v-btn>
          </v-sheet>

          <div class="text-center">
            <v-pagination
              :length="state.data.lastPage"
              :total-visible="5"
              v-model="page"
              @click="pageClickHandler"
              rounded="circle"
            ></v-pagination>
          </div>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import axios from "axios";
import { computed, onBeforeMount, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();

const user = computed(() => store.getters.user);

const state = reactive({
  data: {},
});

const page = ref(1);

const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};

const btnWrite = () => {
  router.push("/write");
};

const pageClickHandler = () => {
  getArticles(page.value);
};

onBeforeMount(() => {
  getArticles(1);
});

const getArticles = (page) => {
  axios
    .get("/list?pg=" + page)
    .then((response) => {
      console.log(response);
      state.data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style scoped></style>
