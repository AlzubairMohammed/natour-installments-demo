<script setup>
import { FwbModal } from "flowbite-vue";

import { useStore } from "vuex";
import { defineProps, onMounted } from "vue";
let props = defineProps(["isShowModal", "closeShowModal", "app"]);
const store = useStore();
const closeShowModal = () => {
  props.closeShowModal();
};
onMounted(async () => {
  try {
    await store.dispatch("getRequest");
  } catch (error) {
    console.error("Error dispatching fetchAttributes:", error);
  }
});
</script>

<template>
  <fwb-modal v-if="props.isShowModal" @close="closeShowModal">
    <template #header>
      <div class="flex items-center text-lg">عرض تفاصيل الطلب</div>
    </template>
    <template #body>
      <form
        enctype="multipart/form-data"
        @submit.prevent="add()"
        ref="add_form"
      >
        <div class="p-4 flex flex-wrap overflow-y-auto">
          <div class="w-1/2 p-1 input-group">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >إسم المالك</label
            >
            <input
              type="text"
              id="name"
              :value="app.owner_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >رقم جوال المالك</label
            >
            <input
              type="text"
              id="data.product_data.buy_price"
              :value="app.owner_phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >رقم المبنى</label
            >
            <input
              type="text"
              id="app.building_name"
              :value="app.building_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >رقم المبنى</label
            >
            <input
              type="number"
              id="app.building_no"
              :value="app.building_no"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >حالة الإجار</label
            >
            <input
              type="text"
              id="data.status"
              :value="app.status ? 'مؤجر' : 'غير مؤجر'"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >اسم المدينة</label
            >
            <input
              type="text"
              id="data.city.name"
              :value="app.city.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >اسم المنطقة</label
            >
            <input
              type="text"
              id="data.area.name"
              :value="app.area.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >خريطة الطول</label
            >
            <input
              type="text"
              id="data.lat"
              :value="app.lat"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >خريطة العرض</label
            >
            <input
              type="text"
              id="data.lng"
              :value="app.lng"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
        </div>
      </form>
    </template>
  </fwb-modal>
</template>
