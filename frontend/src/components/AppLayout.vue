<template>
  <div>
    <aside
      id="logo-sidebar"
      class="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto app-bg">
        <div class="mb-3 pb-2">
          <h2 class="text-xl">اقساط ناطور</h2>
        </div>
        <ul class="space-y-2 font-medium">
          <li>
            <router-link
              to="/installments"
              class="flex items-center p-2 text-gray-800 dark:text-gray-800 hover:text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-800 dark:text-gray-800 hover:text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-800 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path
                  d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">الاقساط</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/requests"
              class="flex items-center p-2 text-gray-800 dark:text-gray-800 hover:text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-800 dark:text-gray-800 hover:text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-800 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path
                  d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">الطلبات</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/appartments"
              class="flex items-center p-2 text-gray-800 dark:text-gray-800 hover:text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-800 dark:text-gray-800 hover:text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-800 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path
                  d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">الشقق</span>
            </router-link>
          </li>

          <li @click="logout()">
            <a
              class="flex items-center p-2 text-red-600 hover:text-red-700 rounded-lg dark:hover:bg-gray-700 group cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="flex-shrink-0 w-5 text-red-600 hover:text-red-700 h-5 transition duration-75 dark:text-gray-400 dark:group-hover:text-gray-800 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>

              <span
                class="flex-1 ms-3 whitespace-nowrap text-red-600 hover:text-red-700"
                >تسجيل الخروج</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <div class="sm:mr-64">
      <slot />
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  data() {
    return {
      user_session: localStorage.getItem("GDSC_token"),
    };
  },
  components: {
    // AppHeader,
    // LoginPage,
  },
  methods: {
    closeAddModal() {
      this.isShowAddModal = false;
    },
    showAddModal() {
      this.isShowAddModal = true;
    },
    closeEditModal() {
      this.isShowEditModal = false;
    },
    showEditModal() {
      this.isShowEditModal = true;
    },
    dateTime(value) {
      return moment(value).format("YYYY-MM-DD");
    },
    logout() {
      localStorage.removeItem("hala_token");
      localStorage.removeItem("hala_user");
      this.$router.replace("/login");
    },
    // async checkCookie() {
    //   if (localStorage.getItem("GDSC_token") === null) {
    //     this.responseAlert(" الرجاء تسجيل الدخول ", " عفوا ", "warning");
    //     this.$router.push("/LoginPage");
    //   }
    // },
    // all response alert
    responseAlert(text, title, icon) {
      this.$swal.fire({
        title: `${title}`,
        text: ` ${text} `,
        icon: `${icon}`,
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  },
  provide() {
    return {
      checkCookie: this.checkCookie,
      responseAlert: this.responseAlert,
      dateTime: this.dateTime,
    };
  },
  // async created() {
  //   await this.checkCookie();
  // },
};
</script>

<style>
.app-bg {
  background: #f1f1f1;
}
</style>
