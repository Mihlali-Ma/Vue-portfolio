import { createStore } from 'vuex'

let URL = 'https://mihlali-ma.github.io/data/index.json'
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
    }
  },
  actions: {
    async fetchProjects(context){
      let response = await fetch(URL);
      console.log(response);
      let projects = await response.json();
      context.commit('setProjects', projects);
    }
  },
  modules: {
  }
})
