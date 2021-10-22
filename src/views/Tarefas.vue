<template>
  <div>
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="inputTarefa"
        label="Nova Tarefa"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>    
    <v-list
        flat
        subheader
      >
        <v-list-item-group
          multiple
          active-class=""
        >
        <div
        v-for="tarefa, index in $store.state.tarefas"
        :key="index"
        >
          <Tarefa
          :tarefa="tarefa"
          />
        </div>
        </v-list-item-group>
      </v-list>
  </div>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
  import Tarefa from '../components/tarefas/Tarefa.vue'
  export default {
    name: 'Home',

    components: {
      Tarefa,
    },
    data(){
      return{
        inputTarefa: null,
      }
    },
    methods:{
      handleAddTarefa(){
        this.$store.commit('addTarefa', this.inputTarefa);
        this.inputTarefa = null;
      }
    }
  }
</script>
