<script setup>
import AppLayout from "@/components/AppLayout.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import SearchAddButton from "@/components/Requests/SearchAddButton.vue";
import InstallmentsTable from "@/components/Requests/RequestsTable";
import { onMounted, ref, inject } from "vue";
import { useStore } from "vuex";
const checkCookie = inject("checkCookie");
const store = useStore();

let requests = ref([]);
let attributes = ref([]);

// let search_term = "";

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
        :showAddModal="showAddModal"
        :deletProduct="deletProduct"
        :requests="requests"
      />
    </div>
  </app-layout>
</template>

<style></style>
