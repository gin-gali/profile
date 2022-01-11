<template>
  <div>
    <h1>{{ message }}</h1>
    <div>
      <form>
        <input type="submit" @click="addTodo">
      </form>
    </div>
  </div>
</template>

<script setup>

const message = "タスクを入力してね"

</script>