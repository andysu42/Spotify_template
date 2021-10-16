<template lang="pug">
  .sp__btn(:class="[bgColor, textColor, disabledColor]" :disabled="disableButton")
    slot {{ text }}
</template>
<script>
export default {
  name: 'btn',
  props: {
    bgColor: {
      type: String,
      default: 'bg-default-green'
    },
    textColor: {
      type: String,
      default: 'text-black-100'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      disableButton: this.disabled,
      text: 'default text'
    }
  },
  computed: {
    disabledColor () {
      return this.disabled ? 'opacity-50' : ''
    }
  }
}
</script>
<style lang="scss" scoped>
.sp__btn {
  @apply text-center text-sm font-bold cursor-pointer overflow-hidden;
}
</style>
