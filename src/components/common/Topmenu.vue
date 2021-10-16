<template lang="pug">
div.py-2.relative(:class="bgColor")
  .flex.flex-row.justify-between
    div.pr-1
      .flex.flex-row
        .flex-1
          .flex.items-center.justify-center.rounded-full.mx-1.py-2.h-8.w-8.bg-black.text-white.cursor-pointer ＜
        .flex-1
          .flex.items-center.justify-center.rounded-full.mx-1.py-2.h-8.w-8.bg-black.text-white.cursor-pointer ＞
        .flex-1
          slot(name="center")
            div.flex.h-8 default
    div.pr-1
      .flex.h-8
        div.flex.items-center
          div(class="sm:hidden md:hidden lg:flex" style="width:150px").flex.items-center.justify-center.rounded-full.py-2.px-3.bg-black.text-white.text-center.text-sm.font-bold IMG 蘇楷倫 LOGO
</template>
<script>
export default {
  name: 'Topmenu',
  props: {
    bgColor: {
      type: String,
      default: 'bg-transparent'
    }
  }
}
</script>
<style lang="scss" scoped></style>
