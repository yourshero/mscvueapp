<template>
  <div class="m-home-menu">
    <div class="off" v-if='!menuStatus' @click='doFn(true)'>
      快捷导航
    </div>
    <div v-else class="course-container">
      <div class="course">
        <div class="course-nav">
          <ul>
            <li v-for="(item,index) in navDate" :key='index' :class="activeIndex==index?'active':''" @click='exchange(index)'>
              {{item.title}}
            </li>
          </ul>
        </div>
        <div class="course-list" v-for="(itemCourse,index) in navDate" :key='index' v-show="activeIndex==index">
          <div class="major" v-for="(listItem,index) in itemCourse.major" :key='index'>
            <p>
              {{listItem.name}}
            </p>
            <ul>
              <li v-for="(el,index) in listItem.courseList" :key='index'>
                {{el.des}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="on" @click='doFn(false)'>
        <span>
          折叠导航
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '',
        menuStatus: false,
        activeIndex:2,
        navDate: [{
            title: '小班教学',
            major: [{
              name: '主修课程1',
              courseList: [{
                  des: '经理班1'
                },
                {
                  des: '总裁圈1'
                }
              ]
            }, {
              name: '辅修课程1',
              courseList: [{
                  des: '美工课1'
                },
                {
                  des: '视频课1'
                },
                {
                  des: '直播回放1'
                },
                {
                  des: '体验课1'
                },
                {
                  des: '前期精选1'
                }
              ]
            }],
          },
          {
            title: '个性教学',
            major: [{
              name: '主修课程2',
              courseList: [{
                  des: '经理班2'
                },
                {
                  des: '总裁圈2'
                }
              ]
            }, {
              name: '辅修课程2',
              courseList: [{
                  des: '美工课2'
                },
                {
                  des: '视频课2'
                },
                {
                  des: '直播回放2'
                },
                {
                  des: '体验课2'
                },
                {
                  des: '前期精选2'
                }
              ]
            }],
          },
          {
            title: '在线课程',
            major: [{
              name: '主修课程',
              courseList: [{
                  des: '经理班'
                },
                {
                  des: '总裁圈'
                }
              ]
            }, {
              name: '辅修课程',
              courseList: [{
                  des: '美工课'
                },
                {
                  des: '视频课'
                },
                {
                  des: '直播回放'
                },
                {
                  des: '体验课'
                },
                {
                  des: '前期精选'
                }
              ]
            }],
          }
        ]
      }
    },
    mounted() {},
    methods: {
      doFn: function (el) {
        this.menuStatus = el;
      },
      exchange:function(index){
          this.activeIndex = index;
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .m-home-menu {
    .off {
      width: 292px;
      height: 123px;
      border: 1px solid #bbbbbb;
      border-left: none;
      line-height: 123px;
      text-align: center;
    }

    .course-container {
      .course {
        display: flex;
        justify-content: space-between;

        .course-nav {
          ul {
            width: 240px;
            background: rgba(239, 239, 243, 1);
            padding: 138px 0;

            li {
              height: 138px;
              color: #707070;
              font-size: 40px;
              line-height: 138px;
              text-align: center;
            }
            .active{
                background: #fff;
            }
          }
        }

        .course-list {
            flex: 1;
            padding-left: 30px;
          .major {
            p {
              color: #000000;
              font-size: 40px;
              margin-top: 30px;
            }

            ul {
                display: flex;
                flex-wrap: wrap;
              li {
                  margin-top: 35px;
                  margin-right: 20px;
                width: 30%;
                height: 133px;
                background: rgba(225, 225, 225, 1);
                border-radius: 6px;
                font-size: 39px;
                color: #292929;
                line-height: 133px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }

</style>
