<script setup>
import { defineProps, ref } from "vue";
import ShowModle from "@/components/Requests/ShowModel";
import AcceptRequesModal from "@/components/Requests/AcceptRequesModal";
defineProps(["requests"]);

let page = 1;
let tot = 1;
let isShowAddModal = ref(false);
let isShowAcceptRquesModal = ref(false);
let acceptData = ref({});
let data = ref({});
const closeAddModal = () => {
  isShowAddModal.value = false;
};
const closeAcceptRquestModal = () => {
  isShowAcceptRquesModal.value = false;
};
const showAddModal = async (app) => {
  // console.log(app.id);
  app.rent ? app.rent : (app.rent = []);
  data.value = app;
  isShowAddModal.value = true;
};
const accept = (app) => {
  acceptData.value = app;
  isShowAcceptRquesModal.value = true;
};
</script>
<template>
  <div>
    <div class="table w-full">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3 text-center">الرقم</th>
              <th scope="col" class="px-6 py-3 text-center">اسم الؤجر</th>
              <th scope="col" class="px-6 py-3 text-center">رقم الجوال</th>
              <th scope="col" class="px-6 py-3 text-center">التاريخ المتوقع</th>
              <th scope="col" class="px-6 py-3 text-center">حالة العقار</th>
              <th scope="col" class="px-6 py-3 text-center">الضمان</th>
              <th scope="col" class="px-6 py-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(app, index) in requests"
              :key="app.id"
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ ++index }}
              </th>
              <td class="px-6 py-4 text-center">
                {{ app?.name }}
              </td>
              <td class="px-6 py-4 text-center">
                {{ app?.phone }}
              </td>
              <td class="px-6 py-4 text-center">
                {{ app?.expect_rent_date }}
              </td>
              <td class="px-6 py-4 text-center">
                {{ app?.rent_id ? "خارج التطبيق" : "داخل التطبيق" }}
              </td>
              <td class="px-6 py-4 text-center flex justify-center">
                {{ app?.is_guarantee ? "يوجد" : "لايوجد" }}
              </td>
              <td class="px-6 py-4">
                <button
                  @click="showAddModal(app)"
                  type="button"
                  class="font-medium mx-4 text-green-600 dark:text-blue-500 hover:underline"
                >
                  عرض
                </button>
                <button
                  @click="reject(app)"
                  type="button"
                  class="font-medium text-red-600 mx-2 dark:text-red-500 hover:underline"
                >
                  رفض
                </button>
                <button
                  @click="accept(app)"
                  type="button"
                  class="font-medium mx-4 text-blue-600 dark:text-blue-500 hover:underline"
                >
                  قبول
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <nav class="flex justify-center my-4" v-if="tot > 1">
          <ul class="inline-flex -space-x-px text-base h-10">
            <li
              v-for="page_number in tot"
              @click="handlePagination(page_number)"
              :key="page_number"
            >
              <a
                :class="{
                  'bg-blue-600 text-white hover:text-gray-100 hover:bg-blue-900 ':
                    page_number == page,
                }"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >{{ page_number }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <ShowModle
      :isShowAddModal="isShowAddModal"
      :closeAddModal="closeAddModal"
      :app="data"
    />
    <AcceptRequesModal
      :app="acceptData"
      :isShowModal="isShowAcceptRquesModal"
      :closeShowModal="closeAcceptRquestModal"
    />
  </div>
</template>
