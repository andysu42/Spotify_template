<template lang="pug">
    .main.h-screen.bg-gradient-to-b.opacity-90.overflow-y-scroll(class="w-3/5 from-default-dark-red to-gray-900" style="min-width:400px")
      .sp__main.flex.flex-col.px-8.pt-4
        .flex-1.pb-4
          Topmenu(bgColor="bg-transparent")
            template(#center)
              //- slot-start
              .flex.h-8
                div.flex.items-center
                  div(class="focus-within:text-gray-400")
                    span.flex.inset-y-0.left-0.items-center.pl-2
                      input.rounded-full.py-2.text-sm.font-xl.bg-gray-300.pl-10.placeholder-gray-600(class="focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Artists, songs, or podcasts" style="width: 360px")
              //- slot-end
        .flex-1.bg-gradient-to-r.mb-6.rounded(class="from-black to-default-dark-red")
          .flex.flex-row.mt-6.mx-4.-mb-2(style="height: auto")
            div(class="w-1/3")
              img(style="height: 200px")
            div.flex(class="w-2/3 sm:flex-col md:flex-col xl:flex-col")
              .flex(class="sm:flex-col md:flex-col xl:flex-row")
                div.text-6xl.-my-4.font-bold.text-white 微冰半糖&nbsp;
                div.text-6xl.-my-4.font-bold.text-white Bubble Tea
              .flex.py-4(class="sm:flex-col md:flex-col xl:flex-col")
                p.text-white 微冰半糖小情歌
                  .flex.flex-row(class="xs:flex-col sm:flex-col md:flex-row")
                    btn.rounded-full.py-2.px-8.mr-4.my-4(bgColor="bg-default-green" textColor="text-white") PLAY
                    btn.rounded-full.py-2.px-8.mr-4.my-4.border-05.border-gray-100(bgColor="bg-transparent" textColor="text-white" :disabled="isDisabled") FOLLOW
                    //- div
                    //-   img
        .flex-1
          .text-white.text-3xl.font-bold Good Morning
        .flex-1
          .flex.flex-wrap.space-evenly.text-white.my-4(class="xs:flex-col md:flex-row")
            div.flex-1.bg-default-gray.rounded.mb-4.mx-1.shadow-3xl(style="min-width: 200px; width: 200px; min-height: 70px; height: 70px;" v-for="(item, index) in rotationList") {{ item.name }}
        .flex-1
          .text-white.text-2xl.font-bold.mb-4 Your shows
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
          .text-white.text-2xl.font-bold.mb-4 Made for you 
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
import btn from '../components/common/Buttons.vue'
import Topmenu from '../components/common/Topmenu.vue'
export default {
  name: 'Home',
  components: {
    btn,
    Topmenu
  },
  data () {
    return {
      isDisabled: false,
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
  mounted () {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
