<template>
<q-page-container>
    <q-page class="loading-cont fullscreen">
    <q-layout class="text-center">
      <div class="fixed-center">
        <div class="row">
          <div class="col-12"></div>
        </div>
        <div class="row">
          <div class="col-12">
            <q-spinner-gears color="info" size="100px" />
            <p class="loading__text">Cargando...</p>
          </div>
        </div>
      </div>
    </q-layout>
  </q-page>
</q-page-container>
</template>

<script>
export default defineComponent({
  name: "ComponentLoadingFullScreen"
});
</script>

<style lang="scss">
.loading-cont {
  background-color: rgba(10, 10, 10, 0.6);
}

.loading__text {
  margin-top: 20px;
  font-size: 2rem;
  color: $primary;
}
</style>
