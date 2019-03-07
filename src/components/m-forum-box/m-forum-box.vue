<template>
  <div class="m-forum-box">
      <div class="tit">
          <span>
            {{title}}
          </span>
          <img src="@/assets/images/forum/arrow_r.png" alt="">
      </div>
      <ul>
          <li v-for="(item,index) in forumData" :key='index'>
              <router-link to='#'>
                  <img :src="item.iconUrl" alt="">
                  <span>{{item.info}}</span>
              </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    props:{
        item:Object
    },
    data() {
      return {
        msg: '论坛模块',
        forumData:'',
        title:'',
        des:''
      }
    },
    created(){
        this.forumData = this._props.item.content;
        this.title = this._props.item.title;
        this.des = this._props.item.des;
    },
    mounted(){
        
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .m-forum-box{
        background: #fff;
        .tit{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 98px;
                padding-right: 45px;
                height: 144px;
                span{
                    font-size:44px;
                    font-weight:bold;
                    color:rgba(17,17,17,1);
                }
                img{
                    display: block;
                    width: 66px;
                    height: 66px;
                }
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width:50%;
                height: 130px;
                border-top:1px solid #D4D4D4;
                a{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    img{
                    display: block;
                    width: 48px;
                    height: 48px;
                    }
                    span{
                    font-size:38px;
                    font-weight:400;
                    color:rgba(162,162,162,1);
                    }
                }
            }
        }
    }
</style>