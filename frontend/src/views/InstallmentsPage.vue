<script setup>
import AppLayout from "@/components/AppLayout.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import SearchAddButton from "@/components/Tables/SearchAddButton.vue";
import InstallmentsTable from "@/components/Installments/InstallmentsTable.vue";
import AddInstallmentModal from "@/components/Installments/AddInstallmentModal.vue";
import { onMounted, ref, inject } from "vue";
import { useStore } from "vuex";
const checkCookie = inject("checkCookie");
const store = useStore();

let installments = ref([]);

// let search_term = "";
let isShowAddModal = ref(false);
// let isShowEditModal = ref(false);

// const showAddModal = () => {
//   isShowAddModal.value = true;
// };
const closeAddModal = () => {
  isShowAddModal.value = false;
};
// const closeEditModal = () => {
//   isShowEditModal.value = false;
// };
// const showEditModal = () => {
//   isShowEditModal = true;
// };

onMounted(async () => {
  try {
    await store.dispatch("fetchInstallments");
    installments.value = store.getters.getInstallments;
  } catch (error) {
    console.error("Error dispatching fetchInstallments:", error);
  }
  checkCookie();
});
</script>

<template>
  <app-layout>
    <app-navbar :title="'الاقساط'"></app-navbar>
    <div class="w-full py-8 px-4">
      <SearchAddButton />
      <InstallmentsTable
        :showEditModal="showEditModal"
        :deletProduct="deletProduct"
        :installments="installments"
      />
      <AddInstallmentModal
        :isShowAddModal="isShowAddModal"
        :closeAddModal="closeAddModal"
      />
    </div>
  </app-layout>
</template>

<style></style>
