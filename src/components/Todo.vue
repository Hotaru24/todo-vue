<template>
  <div class="card" >
    <div class="card-body" >
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text"> {{describe}}</p>
      <button href="#" class="btn btn-danger" onClick={deleteTodo}>Delete</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/require-prop-type-constructor */
export default {
  name: 'Todo',
	props: {
    title: String,
		describe: String
  },
	data: function (){
    return {
      data: []
     }
    },
    mounted: function(){
      localStorage.clear();
      this.data = this.$store.state.todoData;
    },
		methods: {
			deleteTodo(){
				return this.$store.commit('todos', this.data)	 
			}
		}

}
</script>


<style scoped>

</style>