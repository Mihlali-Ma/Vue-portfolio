import { createStore } from 'vuex'

let URL = ('https://mihlali-ma.github.io/data/index.json')
export default createStore({
  state: {
    projects:null,
    Testimonials:null,
    Resume:null,
    Volunteer:null,
    Education:null,
    Skills:null

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
    },
    setSkills(state,Skills){
      state.Skills=Skills
    }
  },
  actions: {
    async fetchProjects(context){
      try {
      let response = await fetch(URL)
      let {projects} = await response.json()
      context.commit('setProjects', projects)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchSkills(context){
      try {
      let response = await fetch(URL)
      let {Skills} = await response.json()
      context.commit('setSkills', Skills)
      } catch (error) {
        console.error(error)
      }
    },

    async fetchTestimonials(context){
      try {
      let response = await fetch(URL)
      let {Testimonials} = await response.json()
      context.commit('setTestimonial',Testimonials)
      } catch (error) {
        console.error(error)
      } 
    },
    async fetchVolunteer(context){
      try {
      let response = await fetch(URL)
      let {Volunteer} = await response.json()
      context.commit('setVolunteer',Volunteer)
      } catch (error) {
        console.log(error);
      }
      
      
    },
    async fetchEducation(context){
      try {
      let response = await fetch(URL)
      let {Education} = await response.json()
      context.commit('setEducation',Education)
      } catch (error) {
        console.log(error);
      }
      
      
    }
  },
  modules: {
  }
})
