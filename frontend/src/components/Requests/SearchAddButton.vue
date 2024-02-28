<script setup>
// import { defineProps } from "vue";

// const props = defineProps(["showModel"]);
</script>
<template>
  <div class="flex justify-between items-center py-4">
    <div class="relative">
      <input
        type="email"
        class="peer py-3 pl-6 pr-10 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder="بحث"
        v-model="search_term"
        @input="search()"
      />
      <div
        class="absolute right-2 inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"
      >
        <box-icon color="grey" name="search"></box-icon>
      </div>
    </div>
  </div>
</template>
