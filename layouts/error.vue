<template>
  <div class="vh-100 d-flex">
    <div class="container my-auto">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h1 v-if="statusCode === 404">
            ¿Te has perdido?
          </h1>
          <h1 v-else>
            Ha ocurrido un error inesperado!
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <p>
            {{ message }}
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-sm-12 text-center">
          <NuxtLink to="/" class="button--green">
            Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || '<%= messages.client_error %>'
    }
  }
}
</script>
