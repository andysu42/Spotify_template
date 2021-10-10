<template lang="pug">
    .main.h-screen.bg-gradient-to-b.opacity-90.overflow-y-scroll(class="w-3/5 from-default-dark-red to-gray-900" style="min-width:400px")
      .flex.flex-col.px-8.pt-4
        .flex-1.pb-2 
          .flex.justify-between
            div
              .flex.flex-row
                div.rounded-full.mx-1.h-8.w-8.flex.items-center.justify-center.bg-black.text-white.cursor-pointer <
                div.rounded-full.mx-1.h-8.w-8.flex.items-center.justify-center.bg-black.text-white.cursor-pointer >
            div.rounded-full.py-2.px-3.bg-black.text-white.text-center.text-sm.font-bold IMG 蘇楷倫 LOGO
        .flex-1.bg-gradient-to-r.mb-6.rounded(class="from-black to-default-dark-red")
          .flex.flex-row.mt-6.mx-4.-mb-2(style="height: auto")
            div(class="w-1/3")
              img(style="height: 200px")
            div.flex(class="w-2/3 sm:flex-col md:flex-col xl:flex-col")
              .flex(class="sm:flex-col md:flex-col xl:flex-row")
                div.text-6xl.-my-4.font-bold.text-white 微冰半糖&nbsp;
                div.text-6xl.-my-4.font-bold.text-white Bubble Tea
              .flex.py-4(class="sm:flex-col md:flex-col xl:flex-col")
                p.text-white 微冰半糖小情歌, 給你最簡單的青春愛戀
                  .flex.flex-row(class="xs:flex-col sm:flex-col md:flex-row")
                    div.rounded-full.py-2.px-8.mr-4.my-4.bg-default-green.text-white.text-center.text-sm.font-bold.cursor-pointer.overflow-hidden PLAY
                    div.rounded-full.py-2.px-8.mr-4.my-4.bg-transparent.border-05.border-gray-100.text-white.text-center.text-sm.font-bold.cursor-pointer.overflow-hidden FOLLOW
                    //- div
                    //-   img
        .flex-1
          .text-white.text-3xl.font-bold Good Morning
        .flex-1
          .flex.flex-wrap.space-evenly.text-white.my-4(class="xs:flex-col md:flex-row")
            div.flex-1.bg-default-gray.rounded.mb-4.mx-1.shadow-3xl(style="min-width: 200px; width: 200px; min-height: 70px; height: 70px;" v-for="(item, index) in rotationList") {{ item.name }}
        .flex-1
          .text-white.text-2xl.font-bold Your shows
          .flex.flex-wrap.space-evenly.text-white(class="xs:flex-col lg:flex-row")
            div.flex-1.flex-grow-1.bg-default-gray.rounded.mb-4.mx-1.shadow-3xl(class="xs:w-full" style="min-width: 80px; min-height: 200px; height: 200px;")
              .flex.flex-col.m-3
                .flex1.shadow-xl.bg-purple-700.rounded-xl(style="height: 120px") 
                .flex1(style="height: 80px") Deep Sleep Sounds
            div.flex-1.flex-grow-1.bg-default-gray.rounded.mb-4.mx-1.shadow-3xl(class="xs:w-full" style="min-width: 80px; min-height: 200px; height: 200px;")
              .flex.flex-col.m-3
                .flex1.shadow-xl.bg-yellow-100.rounded-xl(style="height: 120px")
                .flex1(style="height: 80px") Deep Sleep Sounds
            div.flex-1.flex-grow-1.bg-default-gray.rounded.mb-4.mx-1.shadow-3xl(class="xs:w-full" style="min-width: 80px; min-height: 200px; height: 200px;")
              .flex.flex-col.m-3
                .flex1.shadow-xl.bg-yellow-600.rounded-xl(style="height: 120px")
                .flex1(style="height: 80px") Deep Sleep Sounds
          .text-white.text-2xl.font-bold Made for you 
          div.grid.grid-cols-1.gap-2.text-white(class="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
            .bg-default-gray.p-4.rounded
              div(style="height: 120px") IMG
              div(style="height: 80px") Deep Sleep Sounds
            .bg-default-gray.p-4.rounded 
              div(style="height: 120px") IMG
              div(style="height: 80px") Deep Sleep Sounds
            .bg-default-gray.p-4.rounded
              div(style="height: 120px") IMG
              div(style="height: 80px") Deep Sleep Sounds
            .bg-default-gray.p-4.rounded
              div(style="height: 120px") IMG
              div(style="height: 80px") Deep Sleep Sounds
          
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      rotationList: [
        { name: 'My Rotation' },
        { name: 'Justice' },
        { name: 'Justice (The Complete Edition)' },
        { name: 'Release Radar' },
        { name: 'Release Radar' },
        { name: 'Release Radar' }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>
