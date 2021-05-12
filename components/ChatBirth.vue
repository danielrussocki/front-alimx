<template>
  <div class="fadeIn">
    <div class="row">
      <div class="col-sm-12">
        <div class="bubble-chat left">
          <p class="text-black font-weight-bold">
            ¿Cuál es tu fecha de nacimiento?
          </p>
          <div class="mt-3 mb-2 chat-form">
            <form class="d-flex flex-column mr-4">
              <input v-model="fecha_nacimiento" type="date" placeholder="Fecha de nacimiento*" @change="checkValid()">
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="watched_date !== ''" class="row mt-3">
      <div class="col-sm-12">
        <div class="bubble-chat right">
          <p>{{ watched_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      watched_date: ''
    }
  },
  computed: {
    fecha_nacimiento: {
      get () {
        return this.$store.state.fecha_nacimiento
      },
      async set (value) {
        await this.$store.commit('setFechaNacimiento', { fecha_nacimiento: value })
      }
    }
  },
  watch: {
    fecha_nacimiento () {
      this.watched_date = this.$store.state.fecha_nacimiento
    }
  },
  methods: {
    checkValid () {
      this.$store.commit('setSubmitBirth')
    }
  }
}
</script>
