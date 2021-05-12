<template>
  <div class="chat-container">
    <div class="w-100 vue-bg">
      <div class="w-100">
        <button class="d-block w-100 btn bg-transparent text-left text-white" type="button" @click="toggleChat()">
          Chat
        </button>
      </div>
    </div>
    <div
      v-if="opened"
      class="bg-light border-success border-left border-right chat-messages overflow-auto position-relative"
    >
      <!-- <div v-if="$fetchState.pending" class="w-100 h-100 bg-light d-flex justify-content-center align-items-center">
        <p>Cargando...</p>
      </div> -->
      <div class="container py-3">
        <!-- <component :is="currentModuleComponent()" /> -->
        <LazyChatName keep-alive />
        <LazyChatBirth keep-alive class="mt-2" :class="{ 'd-none': !displayBirth }" />
        <LazyChatContact keep-alive class="mt-2" :class="{ 'd-none': !displayContact }" />
        <div v-if="canSubmitContact" class="row mt-3">
          <div class="col-sm-12">
            <div class="bubble-chat right">
              <p>Si tus datos son correctos por favor continuemos</p>
            </div>
          </div>
          <div class="col-sm-12 mt-3">
            <button type="button" class="button--green d-block w-100" :disabled="allSubmited" @click="submitAll()">
              {{ submitedText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      opened: false,
      displayBirth: false,
      displayContact: false,
      apiUrl: 'https://api-test-alimx.herokuapp.com/api',
      hasSubmited: false,
      submitedText: 'Iniciar'
    }
  },
  computed: {
    showBirth: {
      get () {
        return this.$store.state.canSubmitName
      }
    },
    showContact: {
      get () {
        return this.$store.state.canSubmitDate
      }
    },
    canSubmitContact: {
      get () {
        return this.$store.state.canSubmitContact
      }
    },
    allSubmited: {
      get () {
        return this.$store.state.allSubmited
      }
    }
  },
  watch: {
    showBirth (oldValue, newValue) {
      this.displayBirth = !newValue
    },
    showContact (oldValue, newValue) {
      this.displayContact = !newValue
    },
    canSubmitContact (oldValue, newValue) {
      this.canSubmit = newValue
    },
    allSubmited (oldValue, newValue) {
      this.hasSubmited = newValue
    }
  },
  methods: {
    toggleChat () {
      this.opened = !this.opened
    },
    async submitAll () {
      await this.$store.commit('submitAllData', { url: this.apiUrl })
      await this.$store.commit('setSubmited')
      this.submitedText = 'Información enviada!'
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/animations.scss';

.chat-container {
  max-width: 400px;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 30px;
  z-index: 99;
}
.chat-messages {
  animation: open-chat ease-out .24s;
  height: 350px;
}
</style>
