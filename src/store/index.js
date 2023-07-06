import { createStore } from 'vuex'

let URL = ('https://mihlali-ma.github.io/data/index.json')
export default createStore({
  state: {
    projects:null,
    Testimonials:null,
    Resume:null,
    Volunteer:null,
    Education:null

  },
  getters: {
  },
  mutations: {
    setProjects(state,projects){
      state.projects = projects
    },
    setTestimonial(state,Testimonials){
      state.Testimonials=Testimonials
    },
    setVolunteer(state,Volunteer){
      state.Volunteer=Volunteer
    },
    setEducation(state,Education){
      state.Education=Education
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
      
    },
    async fetchVolunteer(context){
      let response = await fetch(URL)
      let {Volunteer} = await response.json()
      context.commit('setVolunteer',Volunteer)
      
    },
    async fetchEducation(context){
      let response = await fetch(URL)
      let {Education} = await response.json()
      context.commit('setEducation',Education)
      
    }
  },
  modules: {
  }
})
