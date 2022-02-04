<template>
  <div>
    <button></button>
    <button></button>
  </div>
  <table>
    <tr>
      <th v-for="day in days" :key="day">{{ day }}</th>
    </tr>
    <tr>
      <td></td>
    </tr>
  </table>
</template>

<script setup>
const days = ["日", "月", "火", "水", "木", "金", "土"]

</script>