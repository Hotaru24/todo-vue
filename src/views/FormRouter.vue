<template>
  <div class="home">
    <h1>This the Form page</h1> 
    <Form msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
  name: 'FormRouter',
  components: {
    Form
  }
}
</script>
