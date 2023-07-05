import { createStore } from 'vuex'

let URL = ('https://mihlali-ma.github.io/data/index.json')
export default createStore({
  state: {
    projects:null,
    Testimonials:null,
    Resume:null
  },
  getters: {
  },
  mutations: {
    setProjects(state,projects){
      state.projects = projects
    },
    setTestimonial(state,Testimonials){
      state.Testimonials=Testimonials
    }
  },
  actions: {
    async fetchProjects(context){
      let response = await fetch(URL)
      let {projects} = await response.json()
      context.commit('setProjects', projects)
    },

    async fetchTestimonials(context){
      let response = await fetch(URL)
      let {Testimonials} = await response.json()
      context.commit('setTestimonial',Testimonials)
      
    }
  },
  modules: {
  }
})
