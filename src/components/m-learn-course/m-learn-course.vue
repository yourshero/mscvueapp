<template>
  <div class="m-learn-course">
      <div class="title" :style="courseData.bgCur==1?'':'background:#fff;color:rgba(155, 155, 155, 1);border:1px solid rgba(155, 155, 155, 1);'">
        {{courseData.majorName}}
      </div>
      <ul>
        <li v-for="(item,index) in this.courseData.course" :key='index'>
          <img :src="item.marjorCover" alt="">
          <div class='course-box' ref='course_box'>
            <div class="tit">
                  <p ref='wp'>
                    {{item.title}}
                </p>
                <span>
                  已学习课程{{item.num}}节
                </span>
            </div>
            <div class="price">
              <span>
                ￥{{item.price}}元/年
              </span>
              <router-link to='#' v-if="item.status==1" style='background:rgba(239, 87, 48, 1)'>
                  立刻学习
              </router-link>
              <router-link to='#' v-else style="background:rgba(159, 122, 254, 1)">
                  立刻报名
              </router-link>
            </div>
          </div>
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
        courseData:{}
      }
    },
    created(){
      this.courseData = this._props.item;
      //this.courseData = Object.keys(this.courseData).map(key=> this.courseData[key])
    },
    mounted(){
        //console.log(typeof(this.courseData))
        //console.log(this.courseData);
        let array_course = this.$refs.course_box;
        // console.log(array_course[1].offsetWidth);
        // array_course.forEach((item,index) => {
        //     console.log(item,index);
        // });
        // for (const iterator of array_course) {
        //   console.log(iterator.offsetWidth);
        //   iterator.children[0].style.width=iterator.offsetWidth+'px';
        // }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import './m-learn-course.less';
</style>