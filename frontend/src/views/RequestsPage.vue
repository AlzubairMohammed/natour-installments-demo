<script setup>
import AppLayout from "@/components/AppLayout.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import SearchAddButton from "@/components/Tables/SearchAddButton.vue";
import InstallmentsTable from "@/components/Requests/RequestsTable";
import ShowModle from "@/components/Requests/ShowModel";
import { onMounted, ref, inject } from "vue";
import { useStore } from "vuex";
const checkCookie = inject("checkCookie");
const store = useStore();

let requests = ref([]);
let attributes = ref([]);

// let search_term = "";
let isShowAddModal = ref(false);

const showAddModal = () => {
  isShowAddModal.value = true;
};

const closeAddModal = () => {
  isShowAddModal.value = false;
};

const deletProduct = async (id) => {
  await store.dispatch("deleteProduct", id);
};
onMounted(async () => {
  try {
    await store.dispatch("fetchRequests");
    requests.value = store.getters.getRequests;
  } catch (error) {
    console.error("Error dispatching fetchProducts:", error);
  }
  try {
    attributes.value = store.getters.allAttributes;
  } catch (error) {
    console.error("Error dispatching fetchProducts:", error);
  }
  checkCookie();
});
</script>

<template>
  <app-layout>
    <app-navbar :title="'الطلبات'"></app-navbar>
    <div class="w-full py-8 px-4">
      <SearchAddButton :showModel="showAddModal" />
      <InstallmentsTable
        :showEditModal="showEditModal"
        :deletProduct="deletProduct"
        :requests="requests"
      />
      <ShowModle
        :isShowAddModal="isShowAddModal"
        :closeAddModal="closeAddModal"
      />
    </div>
  </app-layout>
</template>

<style></style>
