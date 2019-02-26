<template>
  <div class="m-menu">
    <ul>
      <!-- <li class="selected">
        <router-link to="/">
          <img src="@/assets/images/footer_btn_selected01.png" alt="">
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/learn">
          <img src="@/assets/images/footer_btn02.png" alt="">
          <span>学习</span>
        </router-link>
      </li>
      <li>
        <router-link to="/tool">
          <img src="@/assets/images/footer_btn03.png" alt="">
          <span>工具</span>
        </router-link>
      </li>
      <li>
        <router-link to="/learner">
          <img src="@/assets/images/footer_btn04.png" alt="">
          <span>我的</span>
        </router-link>
      </li> -->
      <li v-for="(obj,index) in menuDate" :key='index' :class="{cur:curIndex==index}">
        <router-link :to="obj.route">
          <img :src="curIndex==index?obj.cur_img:obj.img" alt="">
          <span>
            {{obj.text}}
          </span>
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
        msg: '',
        menuDate: [{
            img: require('@/assets/images/footer_btn01.png'),
            text: '首页',
            route: '/',
            cur_img: require('@/assets/images/footer_btn_selected01.png'),
          },
          {
            img: require('@/assets/images/footer_btn02.png'),
            text: '学习',
            route: '/learn',
            cur_img: require('@/assets/images/footer_btn_selected02.png'),
          },
          {
            img: require('@/assets/images/footer_btn03.png'),
            text: '工具',
            route: '/tool',
            cur_img: require('@/assets/images/footer_btn_selected03.png'),
          },
          {
            img: require('@/assets/images/footer_btn04.png'),
            text: '我的',
            route: '/learner',
            cur_img: require('@/assets/images/footer_btn_selected04.png'),
          }
        ],
        curIndex: 0
      }
    },
    mounted() {
      // console.log(this.menuDate);
      this.curIndex = this.$route.meta.curIndex;
    },
    // 监听路由
    watch: {
      $route(val) {
        console.log(this.curIndex)
        this.curIndex = val.meta.curIndex;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .m-menu {
    height: 163px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #FBFBFB; 
    z-index: 999; 
    ul {
      display: flex;
      height: 100%;

      li {
        width: 25%;

        a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;

          img {
            width: 67px;
            height: 67px;
            display: block;
          }

          span {
            font-size: 32px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            line-height: 69px;
            color: #8B91A1;
          }
        }

      }

      .cur {
        a {
          span {
            color: #F40E1F;
          }
        }

      }

      .selected {
        a {
          span {
            color: #F40E1F;
          }
        }
      }
    }
  }
</style>