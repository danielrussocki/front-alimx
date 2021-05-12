<template>
  <div class="NuxtLogo image--container">
    <img src="~/assets/apple.gif" alt="my apple">
  </div>
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

.image--container {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 6px solid #42b883;
}

.image--container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
