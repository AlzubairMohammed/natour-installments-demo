<script setup>
import { FwbModal } from "flowbite-vue";

import { useStore } from "vuex";
import { defineProps, onMounted, ref } from "vue";
let props = defineProps([
  "isShowAddModal",
  "closeShowModal",
  "app",
  "isShowAcceptRquesModal",
  "accept",
]);
const paymentMethods = ["", "كاش", "اونلاين", "حوالة بنكية"];
const add_form = ref({});
const month_form = ref({});
const monthData = ref({});
const isShowEditMonth = ref(false);
const store = useStore();
const closeShowModal = () => {
  props.closeShowModal();
};
const closeShowEditMonth = () => {
  isShowEditMonth.value = false;
};
const accept = (app) => {
  // const payload = new FormData(add_form.value);
  console.log("hi from accept");
  props.closeShowModal();
  props.accept(app);
};
const openEditeMonth = async (item) => {
  monthData.value = item;
  props.closeShowModal();
  isShowEditMonth.value = true;
};
const updateMonth = async () => {
  const data = new FormData(month_form.value);
  await store.dispatch("updateMonth", data);
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
  <div>
    <fwb-modal v-if="props.isShowAddModal" @close="closeShowModal">
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
                :value="
                  app.installment_user_register.have_family ? 'نعم' : 'لا'
                "
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
            <!-- mounths -->
            <h1>تفاصيل الاشهر</h1>
            <div class="w-full border-t border-gray-400 my-3"></div>
            <form :ref="`month_form${index}`" @submit.prevent="">
              <div
                v-for="(item, index) in app.installment_months"
                :key="item"
                class="w-full bg-blue-100 p-4 rounded-xl my-4 flex flex-wrap"
              >
                <div class="w-1/2 input-group pr-2 pl-2">
                  <label
                    :for="`add_value_${index}`"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >التاريخ</label
                  >
                  <input
                    type="text"
                    :id="`add_value_${index}`"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :value="item.date"
                    readonly
                  />
                </div>
                <div class="w-1/2 input-group pr-2 pl-2">
                  <label
                    :for="`add_value_${index}`"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >السعر</label
                  >
                  <input
                    type="text"
                    :id="`add_value_${index}`"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :value="`${item.price} درهم`"
                    readonly
                  />
                </div>
                <div class="w-1/2 input-group pr-2 pl-2">
                  <label
                    :for="`add_value_${index}`"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >حالة الدفع</label
                  >
                  <input
                    type="text"
                    :id="`add_value_${index}`"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :value="item.status ? 'مدفوع' : 'غير مدفوع'"
                    name="status"
                    readonly
                  />
                </div>
                <div
                  class="w-1/2 input-group pr-2 pl-2"
                  v-if="item.payment_method"
                >
                  <label
                    :for="`add_value_${index}`"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >طريقة الدفع</label
                  >
                  <input
                    type="text"
                    :id="`add_value_${index}`"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :value="paymentMethods[item.payment_method]"
                    readonly
                    name="payment_method"
                  />
                </div>
                <div class="w-1/2 input-group pr-2 pl-2">
                  <label
                    :for="`add_value_${index}`"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >تاريخ الدفع</label
                  >
                  <input
                    type="text"
                    :id="`add_value_${index}`"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :value="
                      item.paid_date
                        ? item.paid_date
                        : 'يظهر عندما يقوم العميل بالدفع'
                    "
                    readonly
                  />
                </div>
                <input type="number" :value="item.id" name="id" hidden />
                <div
                  class="w-full input-group pr-2 pl-2"
                  v-if="!item.payment_method"
                >
                  <button
                    type="submit"
                    @click="openEditeMonth(item)"
                    class="py-3 px-4 mb-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
                  >
                    تعديل
                  </button>
                </div>
              </div>
            </form>
            <!-- mounths -->
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
          </div>
        </form>
      </template>
    </fwb-modal>
    <fwb-modal v-if="isShowEditMonth" @close="closeShowEditMonth">
      <template #header>
        <div class="flex items-center text-lg">تعديل الشهر</div>
      </template>
      <template #body>
        <form ref="month_form" @submit.prevent="updateMonth">
          <div class="w-full bg-blue-100 p-4 rounded-xl my-4 flex flex-wrap">
            <div class="w-1/2 input-group pr-2 pl-2">
              <label
                :for="`add_value_${index}`"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >التاريخ</label
              >
              <input
                type="text"
                :id="`add_value_${index}`"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :value="monthData.date"
                name="date"
                readonly
              />
            </div>
            <div class="w-1/2 input-group pr-2 pl-2">
              <label
                :for="`add_value_${index}`"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >السعر</label
              >
              <input
                type="text"
                :id="`add_value_${index}`"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :value="`${monthData.price} درهم`"
                readonly
              />
            </div>
            <div class="w-1/2 input-group pr-2 pl-2">
              <label
                :for="`add_value_${index}`"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >حالة الدفع</label
              >
              <input
                type="text"
                :id="`add_value_${index}`"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :value="monthData.status ? 'مدفوع' : 'غير مدفوع'"
                name="status"
                readonly
              />
            </div>
            <div class="w-1/2 input-group pr-2 pl-2">
              <label
                :for="`add_value_${index}`"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >طريقة الدفع</label
              >
              <input
                v-if="monthData.payment_method"
                type="text"
                :id="`add_value_${index}`"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :value="paymentMethods[monthData.payment_method]"
                readonly
                name="payment_method"
              />
              <select
                v-else
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :id="`add_attribute`"
                name="payment_method"
              >
                <option>اختيار</option>
                <option :value="1">كاش</option>
                <option :value="2">اونلاين</option>
                <option :value="3">حوالة بنكية</option>
              </select>
            </div>
            <div class="w-1/2 input-group pr-2 pl-2">
              <label
                :for="`add_value_${index}`"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >تاريخ الدفع</label
              >
              <input
                type="text"
                :id="`add_value_${index}`"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :value="
                  monthData.paid_date
                    ? monthData.paid_date
                    : 'يظهر عندما يقوم العميل بالدفع'
                "
                readonly
              />
            </div>
            <input type="number" :value="monthData.id" name="id" hidden />
            <div class="w-full input-group pr-2 pl-2">
              <button
                type="submit"
                class="py-3 px-4 mb-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
              >
                تعديل
              </button>
            </div>
          </div>
        </form>
      </template>
    </fwb-modal>
  </div>
</template>
