<template lang="pug">
base-container
    | dashbord
</template>

<script setup>
import UserService from '../services/user.service'
import {onMounted} from 'vue'

onMounted(() => {
  UserService.getPublicContent().then(
      (response) => {
        console.log(response.data)
      },
      (error) => {
        console.log((error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString())
      }
  )
})
</script>

<style scoped></style>