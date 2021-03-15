<template>
  <div class="card" >
    <div class="card-body" >
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text"> {{describe}}</p>
      <button href="#" class="btn btn-danger" v-on:click="deleteTodo">Delete</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/require-prop-type-constructor */
export default {
  name: 'Todo',
	props: {
    title: String,
		describe: String,
    index: Number
  },
	data: function (){
    return {
      dataTodo: [],
      todoIndex: this.index
     }
    },
    mounted: function(){
      this.dataTodo = this.$store.state.storeData;
    },
		methods: {
			deleteTodo(){
        this.dataTodo.splice(this.todoIndex, 1);
				return this.$store.commit('setStoreData', this.dataTodo)	 
			}
		}

}
</script>


<style scoped>

</style>