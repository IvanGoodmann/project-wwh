<template lang="pug">
auth-grid
  template(v-slot:title)
    | Sign in to Whale
  form(
    @submit="onSubmit"
  )
    .mb-4
      field-component(
        v-model="email"
        placeholder="Email address"
        name="email"
      )
    .mb-3
      field-component(
        v-model="password"
        placeholder="Password"
        type="password"
        name="password"
      )
    .auth-restore.text-center
      span(@click="toRestore") Forgot password?

    button.auth-button.mb-5(
      :disabled="!isValid"
    )
      | Войти

  .auth-caption.text-center
    | Don’t have an account?
    span()  Sign up for free

</template>

<script setup>
import router from '@/router'
import store from '@/store'
import {computed, defineProps} from 'vue'
import {useForm, useIsFormValid} from 'vee-validate'
import * as Yup from 'yup'

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  email: String,
  // eslint-disable-next-line vue/require-default-prop
  password: String
})

const schema = computed(() => {
  return Yup.object().shape({
    email: Yup.string()
        .typeError('введите ваш email')
        .email('Email не верный')
        .required(), //'поле обязательно для заполнения'
    password: Yup.string()
        .typeError('введите пароль')
        .min(6, 'Пароль должен состоять минимум из 6 цифр')
        .required(),
  })
})

const {handleSubmit} = useForm({
  validationSchema: schema,
})

const isValid = useIsFormValid()

const loggedIn = computed(() => {
  return store.state.auth.status.loggedIn
})

const currentUser = computed(() => {
  return store.state.auth.user
})

if (loggedIn.value) {
  router.push({
    name: 'Dashboard',
  })
}

const onSubmit = handleSubmit((user) => {
  store.dispatch('auth/login', user).then(() => {
        router.push('/dashboard')
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

const toRestore = () => {
  router.push({
    name: 'passwordRestore'
  })
}
</script>

<style scoped></style>
