<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="mb-6">
        <NuxtLink to="/" class="text-blue-500 hover:text-blue-600">
          ← Back to Home
        </NuxtLink>
      </div>
      
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
        About This Template
      </h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-semibold mb-4">Built with Modern Technologies</h2>
        
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Nuxt 3</h3>
            <p class="text-gray-600">
              The modern Vue.js framework with powerful features like auto-imports, 
              file-based routing, and server-side rendering capabilities.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Capacitor</h3>
            <p class="text-gray-600">
              Build native iOS and Android apps with web technology. Access native 
              device features through a simple JavaScript API.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Tailwind CSS</h3>
            <p class="text-gray-600">
              A utility-first CSS framework for rapidly building custom user interfaces 
              with consistent design patterns.
            </p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">Features</h2>
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li>Cross-platform mobile development</li>
          <li>Native device API access</li>
          <li>Hot module replacement for development</li>
          <li>TypeScript support</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>File-based routing</li>
        </ul>
      </div>
    </div>
  </div>
</template>