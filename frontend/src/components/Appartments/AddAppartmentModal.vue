<script setup>
import { FwbModal } from "flowbite-vue";

import { useStore } from "vuex";
import { defineProps, onMounted, ref } from "vue";
let props = defineProps(["isShowModal", "closeShowModal", "app"]);
const store = useStore();
let add_form = ref({});
let cities = ref([]);
let areas = ref([]);
const closeShowModal = () => {
  props.closeShowModal();
};
const rentTypes = ref(["غرفة", "شقة", "جناح", "بارتشن"]);
onMounted(async () => {
  try {
    await store.dispatch("getCities");
    cities.value = store.getters.getCities;
    console.log(cities.value);
  } catch (error) {
    console.error("Error dispatching getCities:", error);
  }
});
const add = async () => {
  const payload = new FormData(add_form.value);
  await store.dispatch("createAppartment", payload);
};
const getAreasCity = async (event) => {
  console.log(event.target.value);
  await store.dispatch("getAreas", event.target.value);
  console.log("hi from area");
  areas.value = store.getters.getAreas;
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
              >السعر</label
            >
            <input
              type="number"
              id="building_name"
              name="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >اسم المبنى</label
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
              >اسم الشارع</label
            >
            <input
              type="text"
              id="building_no"
              name="street_name"
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
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :id="`add_attribute`"
              name="status"
            >
              <option :value="1">
                {{ "مؤجر" }}
              </option>
              <option :value="0">
                {{ "غير مؤجر" }}
              </option>
            </select>
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >المدينة</label
            >
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :id="`add_attribute`"
              name="city_id"
              @change="getAreasCity"
            >
              <option v-for="city in cities" :value="city.id" :key="city.id">
                {{ city.name }}
              </option>
            </select>
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >اسم المنطقة</label
            >
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :id="`add_attribute`"
              name="area_id"
            >
              <option v-for="area in areas" :value="area.id" :key="area.id">
                {{ area.name }}
              </option>
            </select>
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
          <div class="w-1/2 p-1 input-group">
            <label
              :for="`add_attribute`"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >النوع</label
            >
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :id="`add_attribute`"
              name="type"
            >
              <option
                v-for="rentType in rentTypes"
                :key="rentType"
                :value="rentTypes.indexOf(rentType)"
              >
                {{ rentType }}
              </option>
            </select>
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
