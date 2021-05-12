<template>
  <div class="bg-sponge">
    <NavBar />
    <Nuxt />
    <client-only>
      <LazyChat />
    </client-only>
  </div>
</template>
