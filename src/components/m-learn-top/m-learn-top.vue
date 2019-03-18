<template>
  <div class="m-learn-top">
     <img :src="bgUrl" alt="" class="bg">
     <ul>
         <li v-for="(item,index) in navData" :key='index'>
             <router-link :to="item.url">
             <img :src="item.listUrl" alt="">
             </router-link>
         </li>
     </ul>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '学习',
        bgUrl:require('@/assets/images/learn/section1_bg.png'),
        navData:[
            {
                listUrl:require('@/assets/images/learn/section1_icon01.png'),
                url:'/forum/forum-index'
            },
            {
                listUrl:require('@/assets/images/learn/section1_icon02.png'),
                url:'/homework/homework-index'
            },
            {
                listUrl:require('@/assets/images/learn/section1_icon03.png'),
                 url:'javascript:void(0);'
            },
            {
                listUrl:require('@/assets/images/learn/section1_icon04.png'),
                 url:'javascript:void(0);'
            },
        ]
      }
    },
      methods: {
      
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .m-learn-top{
        .bg{
        height:349px;
        display: block;
        width: 100%;
        }
        ul{
            background: #fff;
            padding: 0 82px;
            padding-top: 43px;
            padding-bottom: 78px;
            display: flex;
            justify-content: space-between;
            li{
                img{
                    height: 205px;
                    display: block;
                }
            }
        }
    }
</style>