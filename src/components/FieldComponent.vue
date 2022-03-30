<template lang="pug">
label.app__field
  input.app__field__input(
    :class="{app__field__input__error : errorMessage}"
    :name="name"
    :id="name"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    autocomplete="off"
    @input="handleChange"
    @blur="handleBlur"
  )
  .app__field__hint.d-flex.align-items-center(v-if="loading")
    spinner
    span Загрузка
  .app__field__hint.d-flex.align-items-start(
    :class="{show : errorMessage || meta.valid}"
    )
    span {{ errorMessage || successMessage }}
</template>

<script>
import { useField } from 'vee-validate'
export default {
  props: {
    type: {
      type: [Number, String],
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: Boolean,
      default: false
    },
    successMessage: {
      type: String,
      default: '',
    },
  },
  setup (props) {
    const {
      value: modelValue,
      errorMessage,
      successMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    })

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      successMessage,
      // eslint-disable-next-line vue/no-dupe-keys
      errorMessage,
      // eslint-disable-next-line vue/no-dupe-keys
      modelValue,
      handleBlur,
      handleChange,
      meta,
    }
  }
}

</script>

<style scoped>

</style>