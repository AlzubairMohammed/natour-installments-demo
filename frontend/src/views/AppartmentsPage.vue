<script setup>
import AppLayout from "@/components/AppLayout.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import AppartmentsTable from "@/components/Appartments/AppartmentsTable.vue";
import EditAppartmentModal from "@/components/Appartments/EditAppartmentModal.vue";
import { onMounted, ref, inject } from "vue";
import { useStore } from "vuex";
const checkCookie = inject("checkCookie");
const store = useStore();

let appartments = ref([]);

// let search_term = "";
// let isShowAddModal = ref(false);

// const showAddModal = () => {
//   isShowAddModal.value = true;
// };

onMounted(async () => {
  try {
    await store.dispatch("getAppartments");
    appartments.value = store.getters.getAppartments;
  } catch (error) {
    console.error("Error dispatching fetchProducts:", error);
  }
  checkCookie();
});
</script>

<template>
  <app-layout>
    <app-navbar :title="'الشقق'"></app-navbar>
    <div class="w-full py-8 px-4">
      <AppartmentsTable :appartments="appartments" />
      <EditAppartmentModal />
    </div>
  </app-layout>
</template>

<style></style>
