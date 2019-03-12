<template>
  <div class="m-forum-box">
      <div class="tit" @click='tab_btn'>
          <p>
            {{title}}
            <span v-if="des">
                ({{(des)}})
            </span>
          </p>
          <img :src="status?arrowUrlR:arrowUrlL" alt="">
      </div>
      <ul :class="status?'':'off'">
          <li v-for="(item,index) in forumData" :key='index'>
              <router-link to='#'>
                  <img :src="item.iconUrl" alt="">
                  <span :class="item.active?'active':''">{{item.info}}</span>
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
        des:'',
        status:true,
        arrowUrlR:require('@/assets/images/forum/arrow_r.png'),
        arrowUrlL:require('@/assets/images/forum/arrow_b.png'),
      }
    },
    created(){
        this.forumData = this._props.item.content;
        this.title = this._props.item.title;
        this.des = this._props.item.des;
    },
    mounted(){
        //let list_length = this.$refs.list.children.length
        // if(list_length%2 !=0){
        // }
    },
    methods:{
        tab_btn:function(){
            if(this.status){
                this.status = false;
            }else{
                this.status = true;
            }
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .m-forum-box{
        margin-bottom:42px;
        background: #fff;
        .tit{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 98px;
                padding-right: 45px;
                height: 144px;
                p{
                    font-size:44px;
                    font-weight:bold;
                    color:rgba(17,17,17,1);
                    span{
                        font-size:35px;
                        font-weight:bold;
                        color:#707070;
                    }
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
            border-top:1px solid #D4D4D4;
            li{
                box-sizing: border-box;
                width:50%;
                height: 130px;
                border-bottom:1px solid #D4D4D4;
                border-right: 1px solid #D4D4D4;
                a{
                    display: flex;
                    align-items: center;
                    justify-content:flex-start;
                    width: 100%;
                    height: 100%;
                    padding-left: 91px;
                    box-sizing: border-box;
                    img{
                    display: block;
                    width: 48px;
                    height: 48px;
                    margin-right: 30px;
                    }
                    span{
                    font-size:38px;
                    font-weight:400;
                    color:rgba(162,162,162,1);
                    }
                    .active{
                        color:#AB7EF4;
                    }
                }
            }
            li:nth-of-type(even){
                border-right: none;
            }
        }
        .on{
            display: block;
        }
        .off{
            display: none;
        }
    }
</style>