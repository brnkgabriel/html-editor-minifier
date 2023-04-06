import { Controller } from "./core/controller"

// @ts-ignore
const editor = new Quill('#editor', {
  modules: { toolbar: '#toolbar' },
  theme: 'snow'
})

const controller = new Controller()

controller.begin()