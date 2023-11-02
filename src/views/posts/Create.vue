<template>
  <div>
    <form action="">
      <div>
        <label for="">Title</label>
        <input type="text" v-model="title" />
      </div>
      <div>
        <label for="">Body</label>
        <textarea name="" id="" cols="30" rows="10" v-model="body"></textarea>
      </div>
      <div>
        <label for="">Tags</label>
        <input type="text" name="" id="" v-model="tag" @keydown.enter.prevent="handleKeydown" />
      </div>

      <button type="submit">Create</button>
    </form>
    <div v-for="tag in tags" :key="tag">#{{ tag }}</div>
    {{ title }}
    {{ body }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
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

    return { title, body, tag, tags, handleKeydown };
  },
};
</script>

<style></style>
