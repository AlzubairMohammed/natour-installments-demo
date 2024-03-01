<script setup>
import { FwbModal } from "flowbite-vue";

import { useStore } from "vuex";
import { defineProps, onMounted, ref } from "vue";
let props = defineProps(["isShowModal", "closeShowModal", "app"]);
const store = useStore();
let add_form = ref({});
let cities = ref([]);
const closeShowModal = () => {
  props.closeShowModal();
};

onMounted(async () => {
  try {
    await store.dispatch("getCities");
    cities.value = store.getters.getCities;
  } catch (error) {
    console.error("Error dispatching getCities:", error);
  }
});
const add = async () => {
  const payload = new FormData(add_form.value);
  await store.dispatch("createInstallment", payload);
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
        <input
          type="text"
          name="installment_user_register_id"
          :value="app.id"
          hidden
        />
        <div class="p-4 flex flex-wrap overflow-y-auto">
          <div class="w-full p-1 input-group">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >تاريخ البداية</label
            >
            <input
              type="date"
              id="name"
              name="installment_start_date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="w-full p-1 input-group">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >تاريخ النهاية</label
            >
            <input
              type="date"
              id="product_buy_price"
              name="installment_end_date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="w-full p-1 input-group">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >رقم الغرفة</label
            >
            <input
              type="text"
              id="product_buy_price"
              name="appartment_id"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="w-full p-1 input-group">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >حالة الضمان</label
            >
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :id="`is_guarantee`"
              name="is_guarantee"
              required
            >
              <option :value="false" selected>اختر حالة الضمان</option>
              <option :value="true">يوجد ضمان</option>
              <option :value="false">لايوجد ضمان</option>
            </select>
          </div>
        </div>
        <div
          class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700"
        >
          <button
            type="button"
            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            @click="closeShowModal()"
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
