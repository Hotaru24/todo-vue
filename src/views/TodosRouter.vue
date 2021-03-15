<template>
  <div class="todo">
    <h1>This is Todos page</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'TodoRouter',
  components: {
    TodoList
  }
}
</script>
