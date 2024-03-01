<script setup>
import { FwbModal } from "flowbite-vue";

import { useStore } from "vuex";
import { defineProps, onMounted, ref } from "vue";
let props = defineProps([
  "isShowAddModal",
  "closeAddModal",
  "app",
  "isShowAcceptRquesModal",
  "accept",
]);
const add_form = ref({});
const store = useStore();
const closeAddModal = () => {
  props.closeAddModal();
};
const accept = (app) => {
  // const payload = new FormData(add_form.value);
  console.log("hi from accept");
  props.closeAddModal();
  props.accept(app);
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
  <fwb-modal v-if="props.isShowAddModal" @close="closeAddModal">
    <template #header>
      <div class="flex items-center text-lg">عرض تفاصيل الطلب</div>
    </template>
    <template #body>
      <form
        enctype="multipart/form-data"
        @submit.prevent="accept(app)"
        ref="add_form"
      >
        <input
          type="text"
          name="installment_user_register_id"
          :value="app.id"
          hidden
        />
        <div class="p-4 flex flex-wrap overflow-y-auto">
          <!-- user sectioin -->
          <h1>بيانات المستخدم</h1>
          <div class="w-full border-t border-gray-400 my-3"></div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >إلاسم</label
            >
            <input
              type="text"
              id="name"
              :value="app.installment_user_register.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >البريد الالكتروني</label
            >
            <input
              type="text"
              id="data.product_data.buy_price"
              :value="app.installment_user_register.email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >رقم الجوال</label
            >
            <input
              type="number"
              id="app.phone"
              :value="app.installment_user_register.phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >لديه أسرة</label
            >
            <input
              type="text"
              id="data.have_family"
              :value="app.installment_user_register.have_family ? 'نعم' : 'لا'"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >الراتب</label
            >
            <input
              type="text"
              id="data.salary"
              :value="app.installment_user_register.salary"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >الجنسية</label
            >
            <input
              type="text"
              id="data.nationality"
              :value="app.installment_user_register.nationality"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >الجنس</label
            >
            <input
              type="text"
              id="data.gender"
              :value="app.installment_user_register.gender ? 'زكر' : 'انثى'"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >التاريخ المتوقع</label
            >
            <input
              type="text"
              id="data.expect_rent_date"
              :value="app.installment_user_register.expect_rent_date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-full p-1 input-group">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >مزيد من المعلومات</label
            >
            <textarea
              readonly
              id="more_info"
              :value="app.installment_user_register.more_info"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <h1>بيانات الغرفة</h1>
          <div class="w-full border-t border-gray-400 my-3"></div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >جهة الغرفة</label
            >
            <input
              type="text"
              id="data.rent"
              :value="
                app?.installment_user_register?.rent_id
                  ? 'داخل التطبيق'
                  : 'خارج التطبيق'
              "
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>

          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >رقم الغرفة</label
            >
            <input
              type="text"
              id="data.rent"
              :value="app?.appartment.id"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>

          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >إسم المالك</label
            >
            <input
              type="text"
              id="data.rent"
              :value="app?.appartment.owner_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>

          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >رقم جوال المالك</label
            >
            <input
              type="text"
              id="data.rent"
              :value="app?.appartment?.owner_phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>

          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >المدينة</label
            >
            <input
              type="text"
              id="data.rent"
              :value="app?.apparment?.city?.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
            />
          </div>
          <div class="w-1/2 p-1 input-group">
            <label
              for="sale_price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              المنطقة</label
            >
            <input
              type="text"
              id="data.rent"
              :value="app?.appartment?.area?.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readonly
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
            قبول
          </button>
        </div>
      </form>
    </template>
  </fwb-modal>
</template>
