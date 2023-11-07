<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('img/post-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{ post.title }}</h1>

              <span class="meta-post" v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <p>
              {{ post.body }}
            </p>
          </div>
        </div>
      </div>
    </article>
    <hr />
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import getPost from "@/composable/getPost";
import Loading from "@/components/Loading";

export default {
  props: ["id"],
  components: {
    Loading,
  },
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return { post, error };
  },
};
</script>
