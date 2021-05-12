<template>
  <div class="fadeIn">
    <div class="row">
      <div class="col-sm-12">
        <div class="bubble-chat left">
          <p class="text-black font-weight-bold">
            Datos de contacto
          </p>
          <div class="mt-3 mb-2 chat-form">
            <form class="d-flex flex-column mr-4">
              <input v-model="correo" type="text" placeholder="Correo electrónico*" @change="checkValid()">
              <input v-model="telefono" type="text" placeholder="Teléfono celular*" @change="checkValid()">
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="correoString !== '' && telefonoString !== ''" class="row mt-3">
      <div class="col-sm-12">
        <div class="bubble-chat right">
          <p>Correo electrónico: {{ correoString }}</p>
          <p>Teléfono celular: {{ telefonoString }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      correoString: '',
      telefonoString: ''
    }
  },
  computed: {
    correo: {
      get () {
        return this.$store.state.correo
      },
      async set (value) {
        await this.$store.commit('setCorreo', { correo: value })
      }
    },
    telefono: {
      get () {
        return this.$store.state.telefono
      },
      async set (value) {
        await this.$store.commit('setTelefono', { telefono: value })
      }
    }
  },
  watch: {
    correo (oldValue, newValue) {
      this.correoString = this.$store.state.correo
    },
    telefono (oldValue, newValue) {
      this.telefonoString = this.$store.state.telefono
    }
  },
  methods: {
    checkValid () {
      const regExMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const validEmail = regExMail.test(this.$store.state.correo)

      const regExPhone = /^\d{10}$/
      const validPhone = regExPhone.test(this.$store.state.telefono)

      if (validEmail && validPhone) {
        this.$store.commit('setSubmitContact')
      }
    }
  }
}
</script>
