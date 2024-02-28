<script setup>
import AppLayout from "@/components/AppLayout.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import SearchAddButton from "@/components/Tables/SearchAddButton.vue";
import AppartmentsTable from "@/components/Appartments/AppartmentsTable.vue";
import AddAppartmentModal from "@/components/Appartments/AddAppartmentModal.vue";
import EditAppartmentModal from "@/components/Appartments/EditAppartmentModal.vue";
import { onMounted, ref, inject } from "vue";
import { useStore } from "vuex";
const checkCookie = inject("checkCookie");
const store = useStore();

let appartments = ref([]);
let attributes = ref([]);

// let search_term = "";
let isShowAddModal = ref(false);

const showAddModal = () => {
  isShowAddModal.value = true;
};
const closeAddModal = () => {
  isShowAddModal.value = false;
};

onMounted(async () => {
  try {
    await store.dispatch("getAppartments");
    appartments.value = store.getters.getAppartments;
  } catch (error) {
    console.error("Error dispatching fetchProducts:", error);
  }
  try {
    // await store.dispatch("fetchAttributes");
    attributes.value = store.getters.allAttributes;
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
      <SearchAddButton :showModel="showAddModal" />
      <AppartmentsTable :appartments="appartments" />
      <AddAppartmentModal
        :isShowAddModal="isShowAddModal"
        :closeAddModal="closeAddModal"
      />
      <EditAppartmentModal />
    </div>
  </app-layout>
</template>

<style></style>
