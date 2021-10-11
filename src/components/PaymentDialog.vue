<template>
  <q-dialog persistent v-model="dialog" style="width:75vw">
    <q-card class="payment">
      <q-card-section horizontal>
        <img
          class="payment__image"
          ref="imageComponent"
          id="theImg"
          src="http://www.albiladdailyeng.com/wp-content/uploads/2018/07/880x495_cmsv2_7624e743-e9f7-508f-b4f3-b3e86c31ca30-3226692.jpg"
        />

        <q-card-section class="payment__data">
          <q-input
            ref="plateNumberRef"
            v-model="plateNumber"
            label="Número de patente"
            maxlength="7"
            counter
            reactive-rules
            :rules="[ val => val.length >= 6 || 'Mínimo 6 caracteres' ]"
          />
          <q-select
            v-model="vehicle"
            :options="vehicleOptions"
            label="Tipo de vehículo"
            stack-label
          />
          <q-select v-model="payment" :options="paymentOptions" label="Tipo de pago" stack-label />
          <q-input
            color="black"
            bg-color="deep-purple-2"
            v-model="cost"
            outlined
            prefix="$"
            label="Monto a cobrar"
            placeholder
            :input-style="{ 'font-size': '1.2rem' }"
            :rules="[ val => val >= 0 || 'El valor no puede ser negativo' ]"
            reactive-rules
            type="number"
            style="padding-top:10px;"
          >
            <template v-slot:label>
              <span style="color:black;padding-left:10px;">Monto a cobrar (${{initialCost}})</span>
            </template>
          </q-input>

          <!-- <h6 class="payment__data-text">Monto a cobrar: ${{cost}}</h6> -->
          <q-input
            v-model="moneyReceived"
            label="Paga con:"
            prefix="$"
            v-if="payment==='Efectivo'"
          />
          <h6
            class="payment__data-text"
            v-if="payment==='Efectivo' && moneyReceived!==''"
          >Vuelto: ${{parseFloat(moneyReceived) - parseFloat(cost)}}</h6>
          <q-card-actions align="right">
            <q-btn flat color="primary" label="Cobrar" @click="makePayment" />
          </q-card-actions>
        </q-card-section>
      </q-card-section>
      <q-separator />
    </q-card>
  </q-dialog>
</template>


<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "PaymentDialog",
  setup() {
    const $q = useQuasar();

    return {
      dialog: ref(false),
      plateNumber: ref(""),
      initialCost: ref("0"),
      moneyReceived: ref(""),
      vehicle: ref("Motocicleta"),
      payment: ref("Efectivo"),
      cost: ref("0"),
      vehicleOptions: ["Auto", "Camioneta", "Motocicleta"],
      paymentOptions: ["Efectivo", "Tarjeta de credito", "Tajeta de debito"]
    };
  },
  data() {
    return {
      imageData: String,
      vehicleData: {}
    };
  },
  props: {},

  methods: {
    makePayment() {
      if (this.checkConditions()) {
        console.log("realizando pago");
        const result = {
          ...this.vehicleData,
          cost: this.cost,
          computePayment: false,
          exitTime: new Date().getTime(),
          method:
            this.payment === "Efectivo"
              ? "Cash"
              : this.payment === "Tarjeta de credito"
              ? "Credit Card"
              : "Debit Card"
        };
        console.log(this.vehicleData);
        if (
          Object.keys(this.vehicleData).length > 0 &&
          this.vehicleData.plateNumber.toUpperCase() !==
            this.plateNumber.toUpperCase()
        )
          result.plateNumber = this.plateNumber.toUpperCase();
        if (
          Object.keys(this.vehicleData).length > 0 &&
          result.plateNumber.length === 6
        )
          result.plateNumber += "_";
        console.log(result);

        this.$emit("payment-realized", result);
        this.hideDialog();
      } else {
        this.$refs.plateNumberRef.validate();
      }
    },

    showDialog(photo, data) {
      this.dialog = true;

      if (data !== undefined && data !== "") {
        //           cost: 100
        // entryId: 3
        // entryTime: "2021-10-01T00:20:36.009Z"
        // hasPhoto: false
        // plateNumber: "AA000ZZ"
        // type: "car"

        console.log("en el dialog: ", data);
        this.vehicleData = data;
        this.cost = data.cost;
        this.initialCost = data.cost;
        data.type === "car"
          ? (this.vehicle = "Auto")
          : data.type === "van"
          ? (this.vehicle = "Camioneta")
          : (this.vehicle = "Motocicleta");

        this.plateNumber = data.plateNumber;
      }
      if (photo !== undefined && photo !== "") this.showPhoto(photo);
    },
    hideDialog() {
      (this.plateNumber = ""),
        (this.moneyReceived = ""),
        (this.vehicle = "Motocicleta"),
        (this.payment = "Efectivo"),
        (this.dialog = false);
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
    },
    checkConditions() {
      return this.plateNumber.length >= 6 && this.plateNumber.length <= 7;
    }
  }
});
</script>

<style scoped lang="scss">
// .payment__image {
//   width: 450px;
//   height: 100%;
// }

.payment {
  width: 75%;
  min-width: 250px;
  max-width: 1000px;
  &__image {
    width: 70%;
    min-width: 125px;
  }
  &__data {
    width: 30%;
    &-text {
      margin: 0;
      margin-top: 6px;
    }
  }
  //   height: 40vh;
}
</style>