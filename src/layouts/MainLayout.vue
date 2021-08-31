<template>
  <q-layout view="lHh Lpr lff">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="250"
      :breakpoint="500"
    >
      <q-list class="q-py-md">
        <!-- <q-item-label header class="text-white">Smart Parking lot</q-item-label> -->

        <PagesLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        <q-space />
        <q-item-label class="absolute-bottom q-pl-sm text-grey-3">0.0.1</q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import PagesLink from "components/PagesLink.vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "dashboard",
    link: "/"
  },
  {
    title: "Estadisticas",
    icon: "analytics",
    link: "/stats"
  },
  {
    title: "Historial",
    icon: "history",
    link: "/history"
  },
  {
    title: "Cámaras",
    icon: "videocam",
    link: "/camera"
  },
  {
    title: "Configuración",
    icon: "settings",
    link: "/configuration"
  },
  {
    title: "Sistema",
    icon: "info",
    link: "/system"
  },
  {
    title: "Gestión de cuentas",
    icon: "manage_accounts",
    link: "/management-account"
  },
  {
    title: "Empleados",
    icon: "people",
    link: "/employees"
  }
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    PagesLink
  },

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      miniState: ref(true),
      essentialLinks: linksList,
      leftDrawerOpen: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      
      onLogoutClick() {
        console.log("cerrando sesion");
      }
    };
  }
});
</script>
