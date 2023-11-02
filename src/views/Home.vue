<template>
  <div class="home">
    <!-- <div v-if="error">{{ error }}</div> -->
    <h1>HOME</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>

    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import Loading from "@/components/Loading";
import getPosts from "../composable/getPosts";

export default {
  name: "Home",
  components: {
    PostList,
    Loading,
  },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
