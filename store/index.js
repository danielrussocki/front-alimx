export const state = () => ({
  primer_nombre: '',
  segundo_nombre: '',
  apellido_paterno: '',
  apellido_materno: '',
  nombre_completo: '',
  correo: '',
  telefono: '',
  fecha_nacimiento: new Date(),
  canSubmitName: false,
  canSubmitDate: false,
  canSubmitContact: false,
  allSubmited: false,
  availableModules: ['LazyChatName', 'LazyChatBirth', 'LazyChatContact'],
  currentModule: 'LazyChatName',
  indexModule: 0
})

export const mutations = {
  setPrimerNombre (state, payload) {
    state.primer_nombre = payload.primer_nombre
  },
  setSegundoNombre (state, payload) {
    state.segundo_nombre = payload.segundo_nombre
  },
  setApellidoPaterno (state, payload) {
    state.apellido_paterno = payload.apellido_paterno
  },
  setApellidoMaterno (state, payload) {
    state.apellido_materno = payload.apellido_materno
  },
  setFullName (state) {
    state.nombre_completo = state.primer_nombre + ' ' + (state.segundo_nombre !== '' ? state.segundo_nombre + ' ' : '') + state.apellido_paterno + ' ' + state.apellido_materno
  },
  setFechaNacimiento (state, payload) {
    state.fecha_nacimiento = payload.fecha_nacimiento
  },
  setCorreo (state, payload) {
    state.correo = payload.correo
  },
  setTelefono (state, payload) {
    state.telefono = payload.telefono
  },
  setSubmitName (state) {
    state.canSubmitName = true
  },
  setSubmitBirth (state) {
    state.canSubmitDate = true
  },
  setSubmitContact (state) {
    state.canSubmitContact = true
  },
  setSubmited (state) {
    state.allSubmited = true
  },
  async submitAllData (state, payload) {
    const myQuery = {
      query:
      `mutation {
        createUser(
          user_data: {
            nom_usr: "${state.primer_nombre}"
            seg_nom_usr: "${state.segundo_nombre}"
            ap_pat_usr: "${state.apellido_paterno}"
            ap_mat_usr: "${state.apellido_materno}"
            fecha_nac_usr: "${state.fecha_nacimiento}"
            correo_usr: "${state.correo}"
            telefono_usr: "${state.telefono}"
          }
        ) {
          id_usr,
          nom_usr,
          seg_nom_usr,
          ap_pat_usr,
          ap_mat_usr,
          fecha_nac_usr,
          correo_usr,
          telefono_usr,
          created_usr
        }
      }`
    }
    const { data: post } = await this.$axios.post(`${payload.url}`, myQuery)

    window.localStorage.setItem('currentUser', JSON.stringify(post.data.createUser))
  },
  updateForm (state) {
    if (state.indexModule !== 2) {
      state.indexModule++
      state.currentModule = state.availableModules[state.indexModule]
    }
  }
}
