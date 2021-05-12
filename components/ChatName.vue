<template>
  <div class="fadeIn">
    <div class="row">
      <div class="col-sm-12">
        <div class="bubble-chat left">
          <p class="text-black font-weight-bold">
            ¿Cuál es tu nombre?
          </p>
          <div class="mt-3 mb-2 chat-form">
            <form class="d-flex flex-column mr-4">
              <input v-model="primer_nombre" type="text" placeholder="Nombre*" @change="checkValid()">
              <input v-model="segundo_nombre" type="text" placeholder="Segundo Nombre" @change="checkValid()">
              <input v-model="apellido_paterno" type="text" placeholder="Apellido Paterno*" @change="checkValid()">
              <input v-model="apellido_materno" type="text" placeholder="Apellido Materno*" @change="checkValid()">
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="nombre_completo !== ''" class="row mt-3">
      <div class="col-sm-12">
        <div class="bubble-chat right">
          <p>{{ nombre_completo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nombre_completo: ''
    }
  },
  computed: {
    primer_nombre: {
      get () {
        return this.$store.state.primer_nombre
      },
      set (value) {
        this.$store.commit('setPrimerNombre', { primer_nombre: value })
      }
    },
    segundo_nombre: {
      get () {
        return this.$store.state.segundo_nombre
      },
      set (value) {
        this.$store.commit('setSegundoNombre', { segundo_nombre: value })
      }
    },
    apellido_paterno: {
      get () {
        return this.$store.state.apellido_paterno
      },
      set (value) {
        this.$store.commit('setApellidoPaterno', { apellido_paterno: value })
      }
    },
    apellido_materno: {
      get () {
        return this.$store.state.apellido_materno
      },
      set (value) {
        this.$store.commit('setApellidoMaterno', { apellido_materno: value })
      }
    }
  },
  watch: {
    primer_nombre () {
      this.nombre_completo = this.primer_nombre + ' ' + (this.segundo_nombre !== '' ? this.segundo_nombre + ' ' : '') + this.apellido_paterno + ' ' + this.apellido_materno
    },
    segundo_nombre () {
      this.nombre_completo = this.primer_nombre + ' ' + (this.segundo_nombre !== '' ? this.segundo_nombre + ' ' : '') + this.apellido_paterno + ' ' + this.apellido_materno
    },
    apellido_paterno () {
      this.nombre_completo = this.primer_nombre + ' ' + (this.segundo_nombre !== '' ? this.segundo_nombre + ' ' : '') + this.apellido_paterno + ' ' + this.apellido_materno
    },
    apellido_materno () {
      this.nombre_completo = this.primer_nombre + ' ' + (this.segundo_nombre !== '' ? this.segundo_nombre + ' ' : '') + this.apellido_paterno + ' ' + this.apellido_materno
    }
  },
  methods: {
    checkValid () {
      this.primer_nombre = this.primer_nombre.trim()
      this.segundo_nombre = this.segundo_nombre.trim()
      this.apellido_paterno = this.apellido_paterno.trim()
      this.apellido_materno = this.apellido_materno.trim()

      if (
        this.primer_nombre !== '' &&
        this.apellido_paterno !== '' &&
        this.apellido_materno !== ''
      ) {
        this.$store.commit('setSubmitName')
      }
    }
  }
}
</script>
