<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="mb-6">
        <NuxtLink to="/" class="text-blue-500 hover:text-blue-600">
          ← Back to Home
        </NuxtLink>
      </div>
      
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
        Demo Features
      </h1>
      
      <div class="grid gap-6 md:grid-cols-2">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-3">Platform Detection</h2>
          <p class="text-gray-600">
            Platform: <span class="font-mono">{{ platformInfo }}</span>
          </p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-3">Counter Example</h2>
          <p class="text-gray-600 mb-4">Count: {{ count }}</p>
          <button 
            @click="count++" 
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Increment
          </button>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-3">Navigation</h2>
          <nav class="space-y-2">
            <NuxtLink to="/" class="block text-blue-500 hover:text-blue-600">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="block text-blue-500 hover:text-blue-600">
              About
            </NuxtLink>
          </nav>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-3">Tailwind CSS</h2>
          <div class="flex space-x-2">
            <div class="w-12 h-12 bg-red-500 rounded"></div>
            <div class="w-12 h-12 bg-green-500 rounded"></div>
            <div class="w-12 h-12 bg-blue-500 rounded"></div>
            <div class="w-12 h-12 bg-yellow-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Capacitor } from '@capacitor/core';

const count = ref(0);
const platformInfo = ref('');

onMounted(() => {
  platformInfo.value = Capacitor.getPlatform();
});
</script>