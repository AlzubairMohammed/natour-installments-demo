<script setup>
import { FwbModal } from "flowbite-vue";

import { useStore } from "vuex";
import { defineProps, onMounted, ref } from "vue";
let props = defineProps(["isShowModal", "closeShowModal", "app"]);
const store = useStore();
let add_form = ref({});
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
const add = async () => {
  const payload = new FormData(add_form.value);
  await store.dispatch("createAppartment", payload);
};
</script>

<template>
  <fwb-modal v-if="isShowModal" @close="closeShowModal">
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
              name="owner_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
              id="product_buy_price"
              name="owner_phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
              id="building_name"
              name="building_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
              id="building_no"
              name="building_no"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
              id="status"
              name="status"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
              id="city"
              name="city"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
              id="area"
              name="area"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
              id="lat"
              name="lat"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
              id="lng"
              name="lng"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="w-full input-group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
              >الصور</label
            >
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="image"
              type="file"
              name="images"
              multiple
            />
          </div>
        </div>
        <div
          class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700"
        >
          <button
            type="button"
            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            @click="closeAddModal()"
          >
            الغاء
          </button>
          <button
            type="submit"
            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            اضافة
          </button>
        </div>
      </form>
    </template>
  </fwb-modal>
</template>
