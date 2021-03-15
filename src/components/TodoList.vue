<template>
  <div>
    <div v-for="(todo, index) in this.$store.state.storeData" :index="index" :key="index">      
      <Todo :key='index' :title='todo.title' :describe='todo.describe' :index='index'/>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo"
export default {
  name: 'TodoList',
	data: function (){
    return {
      dataTodolist: []
     }
    },
    components: {
      Todo
    },
    mounted: function(){
      this.dataTodolist = this.$store.state.storeData;
    }
}
</script>


<style scoped>

</style>
