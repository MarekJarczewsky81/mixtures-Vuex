const modalMixin = {
  data: () => ({
    modalVisible: false
  }),
  methods: {
    showModal () {
      this.modalVisible = true
    },


    hideModal () {
      this.modalVisible = false
    }
  }
}

export default modalMixin
