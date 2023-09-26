<script setup>
import { ref, onUnmounted, computed, watch } from 'vue'

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref('')

const todos_asc = computed(() => todos.value.sort((a, b) => {
  return a.createdAt - b.createdAt
}))

const addTodo = () => {}

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})

onUnmounted(() => {
  name.value = localStorage.getItem('name') || ''
})
</script>

<template>

  <main class="app">

    <section class="greeting">
      <h2 class="title">
        what's up, <input type="text" placeholder="Name here" v-model="name">
      </h2>

    </section>

    <section class="create-todo">
      <h3>CREATE A TODO</h3>

      <form @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <input 
        type="text" 
        placeholder="e.g. make a video" 
        v-model="input_content">

        <h4>Pick a category</h4>

        <div class="options">
          <label>
            <input 
              type="radio" 
              name="category"
              value="business"
              v-model="input_category">
            <span class="bobble business"></span>
            <div>Business</div>
          </label>

          <label>
            <input 
            type="radio" 
            name="category"
            value="personal1"
            v-model="input_category">
            <span class="bobble personal"></span>
            <div>Personal</div>
          </label>
        </div>

      </form>
    </section>

  </main>

</template>

