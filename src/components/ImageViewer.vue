<template>
  <q-dialog v-model="card">
    <q-card class="imageViewer">
      <img ref="imageComponent" id="theImg" />
    </q-card>
  </q-dialog>
</template>

<script >
import { ref, onMounted } from "vue";

export default {
  setup() {
    const card = ref(false);
    const imageComponent = ref(null);
    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      // console.log(imageComponent.value); // this is your $el
    });
    return {
      card,
      imageComponent
    };
  },
  data() {
    return {
      imageData: String
    };
  },
  methods: {
    showModal(data) {
      this.card = true;
      this.showPhoto(data);
    },
    hideModal() {
      this.card = false;
    },

    showPhoto(data) {
      setTimeout(() => {
        console.log(data);
        this.$refs.imageComponent.src = `data:image/png;base64,${this.toBase64(
          data.photo.data
        )}`;
      }, 1);
    },

    toBase64(arr) {
      return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.imageViewer {
  width: 75%;
  min-width: 300px;
  max-width: 1000px;
  > img {
    width: 100%;
  }
  //   height: 40vh;
}
</style>