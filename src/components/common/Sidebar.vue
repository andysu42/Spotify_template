<template lang="pug">
    .sidebar.h-screen.bg-black.opacity-90(class="w-1/5" style="min-width:200px")
        .flex.flex-col.justify-center.items-center.bg-black.mx-1
            .flex-1.bg-grey.w-full.mx-1.px-3
                .flex.text-white.rounded-md.opacity-75(@click="switchColor()")
                    span.px-3.text-3xl.cursor-pointer ...
            .sp_menu-item.flex-1.bg-grey.w-full.mx-1.px-3.py-2
                .flex.text-white.py-2.rounded-md.opacity-75(:class="{'bg-default-gray': activeFunc == false, 'bg-red-500': activeFunc}" @click="switchColor()")
                    span.px-3 LOGO 
                    span.px-3.text-sm Home
            .sp_menu-item.flex-1.bg-grey.w-full.mx-1.px-3.py-2
                .flex.text-white.py-2.rounded-md.opacity-75(:class="{'bg-default-gray': activeFunc == false, 'bg-red-500': activeFunc}" @click="switchColor()")
                    span.px-3 LOGO 
                    span.px-3 Search
            .sp_menu-item.flex-1.bg-grey.w-full.mx-1.px-3.py-2
                .flex.text-white.py-2.rounded-md.opacity-75(:class="{'bg-default-gray': activeFunc == false, 'bg-red-500': activeFunc}" @click="switchColor()")
                    span.px-3 LOGO 
                    span.px-3 Your library
            .pt-6
            .sp_menu-item.flex-1.bg-grey.w-full.mx-1.px-3.py-2
                .flex.text-white.py-2.rounded-md.opacity-75(:class="{'bg-default-gray': activeFunc == false, 'bg-red-500': activeFunc}" @click="switchColor()")
                    span.px-3 LOGO 
                    span.px-3 Create Playlist
            .sp_menu-item.flex-1.bg-grey.w-full.mx-1.px-3.py-2
                .flex.text-white.py-2.rounded-md.opacity-75(:class="{'bg-default-gray': activeFunc == false, 'bg-red-500': activeFunc}" @click="switchColor()")
                    span.px-3 LOGO 
                    span.px-3 Liked Songs
            .sp_menu-item.flex-1.bg-grey.w-full.mx-1.px-3.py-2
                .flex.text-white.py-2.rounded-md.opacity-75(:class="{'bg-default-gray': activeFunc == false, 'bg-red-500': activeFunc}" @click="switchColor()")
                    span.px-3 LOGO 
                    span.px-3 Your Episodes
            .sp_menu-item.flex-1.bg-grey.w-full.mx-1.px-3.py-2.divide-y.divide-gray-300
              .text-center 
              .text-center 
            .sp_menu-list.flex-1.bg-grey.w-full.mx-1.px-3.py-2
                .flex.text-white.py-2.rounded-md.opacity-75(:class="{'bg-default-gray': activeFunc == false, 'bg-red-500': activeFunc}" @click="switchColor()")
                    span.px-3 LOGO 
                    span.px-3 My Playlist #5
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      activeFunc: false
    }
  },
  methods: {
    switchColor () {
      this.activeFunc = !this.activeFunc
    }
  }
}
</script>
<style lang="scss" scoped>
.sp_menu-item {
  @apply text-sm font-bold cursor-pointer;
}
.sp_menu-list {
  @apply text-sm cursor-pointer;
}
</style>
