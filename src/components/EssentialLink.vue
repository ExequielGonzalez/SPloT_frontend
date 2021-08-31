<template>
  <q-item
    clickable
    exact
    :to="link"
    :active="link===this.activeMenu"
    @click="setActiveMenu"
    active-class="activeMenu"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="white" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-white">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>


<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PagesLink",
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: "#"
    },

    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      activeMenu: "/"
    };
  },

  methods: {
    setActiveMenu() {
      this.activeMenu = this.link;
    }
  }
});
</script>

<style lang="scss">
.activeMenu {
  color: white;
  background: $accent;
}
</style>