<template>
  <!-- Page Header -->
  <header class="masthead" style="background-image: url('img/contact-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>Create new post</h1>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <form @submit.prevent="handleSubmit">
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Title</label>
              <input type="text" class="form-control" placeholder="Title" required v-model="title" />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Body</label>
              <textarea rows="5" class="form-control" placeholder="Body" required v-model="body"></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Tags</label>
              <input type="text" class="form-control" placeholder="Input Tags (silahkan ketikan tag satu per satu dengan tekan enter)" v-model="tag" @keydown.enter.prevent="handleKeydown" />
              <p class="help-block text-danger"></p>
            </div>
            <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>

  <hr />
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, "");
        tags.value.push(tag.value);
      }

      tag.value = "";
    };

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      await fetch("http://localhost:3000/posts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      router.push({
        name: "Home",
      });
    };

    return { title, body, tag, tags, handleKeydown, handleSubmit };
  },
};
</script>
