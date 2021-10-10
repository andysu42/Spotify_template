<template lang="pug">
    .footer.bg-blue-500.bg-default-gray.-my-1.shadow-md
        .flex.space-evenly.text-white.my-1.mx-1
            div.flex-1.flex-grow-1.bg-default-gray.rounded
              .flex.flex-row.m-3
                .flex1.mr-2
                    div.h-12.w-12.bg-purple-800
                .flex1.mr-2 
                    p.text-sm.overflow-ellipsis Raging - Live from Irving Plaza, NYC, 4 Dec 2018
                    p.text-xs.overflow-ellipsis Kodaline
            div.flex-1.flex-grow-1.bg-default-gray.rounded.mb-4.mx-1
              .flex.flex-col.m-3
                .flex1 CONTENT
            div.flex-1.flex-grow-1.bg-default-gray.rounded.mb-4.mx-1
              .flex.flex-col.m-3
                .flex1 CONTENT
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 85px;
}
</style>
