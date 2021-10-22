import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      {id:1, titulo:'Ir ao mercado',concluido:true},
      {id:2, titulo:'Documentar Senha Sise ',concluido:false},
    ]    
  },
  mutations: {
    addTarefa(state,titulo){
      // console.log('oi');
      if(titulo){
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido:false
        })
      }
    },
    removeTarefa(state,id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    }    
  },
  actions: {
  },
  modules: {
  }
})
