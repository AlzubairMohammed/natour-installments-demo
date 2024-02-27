<script setup>
import { FwbModal } from "flowbite-vue";

import { useStore } from "vuex";
import { defineProps, onMounted, ref } from "vue";
let props = defineProps(["isShowAddModal", "closeAddModal"]);
const store = useStore();

let data = ref({
  product_data: {},
  images_data: [{}],
  variation_data: [],
});
let attributes = ref([]);
let categories = ref([]);
let add_form = ref({});

const add = async () => {
  await store.dispatch("addProduct", data.value);
};
const closeAddModal = () => {
  props.closeAddModal();
};
onMounted(async () => {
  try {
    await store.dispatch("fetchAttributes");
    attributes.value = store.getters.allAttributes;
  } catch (error) {
    console.error("Error dispatching fetchAttributes:", error);
  }
  try {
    await store.dispatch("fetchCategories");
    categories.value = store.getters.getCategories;
  } catch (error) {
    console.error("Error dispatching fetchCategories:", error);
  }
});
const handleBaseProductImageChange = (event) => {
  const reader = new FileReader();
  const file = event.target.files[0];
  reader.onload = () => {
    data.value.images_data[0].image = reader.result;
  };
  reader.readAsDataURL(file);
};
</script>

<template>
  <fwb-modal v-if="props.isShowAddModal" @close="closeAddModal">
    <template #header>
      <div class="flex items-center text-lg">اضافة</div>
    </template>
    <template #body>
      <form
        enctype="multipart/form-data"
        @submit.prevent="add()"
        ref="add_form"
      >
        <div class="p-4 overflow-y-auto">
          <div class="input-group">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >إسم المنتج</label
            >
            <input
              type="text"
              id="name"
              v-model="data.product_data.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="input-group">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >سعر الشراء</label
            >
            <input
              type="number"
              id="data.product_data.buy_price"
              v-model="data.product_data.buy_price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >سعر البيع</label
            >
            <input
              type="number"
              id="data.product_data.sale_price"
              v-model="data.product_data.sale_price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="input-group">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >القسم</label
            >
            <select
              v-model="data.product_data.sub_category_id"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="input-group">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >نوع المنتج</label
            >
            <select
              v-model="data.product_data.product_type"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="basic">مفرد</option>
              <option value="any">متغير</option>
            </select>
          </div>
          <div class="input-group">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >الوصف</label
            >
            <textarea
              id="descr"
              v-model="data.product_data.descr"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div class="input-group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
              >الصورة</label
            >
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="image"
              type="file"
              @change="handleBaseProductImageChange"
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
