<template>
  <div></div>
</template>


<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
export default defineComponent({
  name: "NotificationOut",
  setup() {
    const $q = useQuasar();

    return {
      showNotif(entry) {
        $q.notify({
          message: "Un vehículo esta listo para retirarse.",
          color: "primary",
          timeout: 0,
          icon: "info",
          group: false,
          position: "bottom-right",
          actions: [
            {
              label: "Cobrar",
              color: "yellow",
              handler: () => {
                this.$emit("manage-payment", entry);
              }
            }
          ]
        });
      }
    };
  },
  props: {},

  methods: {}
});
</script>

<style scoped lang="scss">
</style>