import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";
import { collection } from "firebase/firestore";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // firebase
      const res = await projectFirestore.collection("posts").get();
      console.log(res);

      // fake rest api
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

      // let data = await fetch("http://localhost:3000/posts");
      // if (!data.ok) {
      //   throw Error("Tidak ada data");
      // }
      // posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
