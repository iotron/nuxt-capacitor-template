<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Nuxt 3 + Capacitor
      </h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-semibold mb-4">Welcome to your mobile app!</h2>
        <p class="text-gray-600 mb-4">
          This template combines the power of Nuxt 3 with Capacitor to create native mobile applications.
        </p>
        
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            to="/demo" 
            class="bg-blue-500 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-600 transition-colors"
          >
            View Demo Features
          </NuxtLink>
          
          <button 
            @click="shareExample" 
            class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            Test Native Share
          </button>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold mb-2">Quick Start</h3>
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li>Run <code class="bg-gray-100 px-2 py-1 rounded">npm install</code> to install dependencies</li>
          <li>Run <code class="bg-gray-100 px-2 py-1 rounded">npx cap sync</code> to sync with native platforms</li>
          <li>Run <code class="bg-gray-100 px-2 py-1 rounded">npx cap open ios</code> or <code class="bg-gray-100 px-2 py-1 rounded">npx cap open android</code></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Share } from '@capacitor/share';

const shareExample = async () => {
  try {
    await Share.share({
      title: 'Nuxt Capacitor App',
      text: 'Check out this awesome Nuxt 3 + Capacitor app!',
      url: 'https://capacitorjs.com/',
      dialogTitle: 'Share with buddies',
    });
  } catch (error) {
    console.log('Error sharing:', error);
    alert('Sharing is only available on mobile devices');
  }
};
</script>