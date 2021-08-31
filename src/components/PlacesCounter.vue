<template>
  <div class="counter">
    <p class="counter__title">Lugares del establecimiento</p>
    <div class="counter__container-free">
      <p>LIBRES</p>
      <p>{{places.free}}</p>
    </div>
    <div class="counter__container-busy">
      <p>OCUPADOS</p>
      <p>{{places.busy}}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    places: {
      busy: Number,
      free: Number
    }
  }
});
</script>

<style lang="scss" scoped>
.counter {
  width: 90vw;
  max-width: 400px;
  height: 50px;
  padding-left: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $primary;
  color: white;
  border-radius: 6px;
  font-weight: 600;
  &__title {
    width: 100%;
    font-size: 1rem;
    margin: 0px;
  }
  &__container-free {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $secondary;
    height: 50px;
    width: 100%;
    & > p {
      margin: 0px;
    }
  }
  &__container-busy {
    @extend .counter__container-free;
    background-color: $accent;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
</style>