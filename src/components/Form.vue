<template>
  <div class="form" >
    <div class="card-body" >
      <form>
        <h2>Nouvelle quête</h2>
        <div class="form-group">
          <label htmlFor="exampleInputText">Title</label>
          <input v-model="form.title" />
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputText">Description</label>
          <textarea v-model="form.describe"></textarea>
        </div>
      </form>  
      <button href="#" class="btn btn-primary" v-on:click="addTodo">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
	data: function (){
    return {
      dataForm: [],
      form: {
        title: '',
        describe: ''
      }
     }
    },
    mounted: function(){
      this.dataForm = this.$store.state.storeData;
    },
    methods: {
      addTodo(){
        if(this.form.title.length > 0 && this.form.describe.length > 0){
          this.dataForm.push(this.form);
          this.$store.commit('setStoreData', this.dataForm);  
        }    
      }
    }
}
</script>


<style scoped>

</style>
