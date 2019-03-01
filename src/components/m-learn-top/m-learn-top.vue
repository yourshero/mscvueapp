<template>
  <div class="m-learn-top">
     <img :src="bgUrl" alt="">
     <ul>
         <li v-for="(item,index) in navData" :key='index'>
             <img :src="item.listUrl" alt="">
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
                listUrl:require('@/assets/images/learn/section1_icon01.png')
            },
            {
                listUrl:require('@/assets/images/learn/section1_icon02.png')
            },
            {
                listUrl:require('@/assets/images/learn/section1_icon03.png')
            },
            {
                listUrl:require('@/assets/images/learn/section1_icon04.png')
            },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .m-learn-top{
        img{
        height:349px;
        display: block;
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