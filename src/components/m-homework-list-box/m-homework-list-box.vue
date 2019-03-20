<!--  -->
<template>
<div class='m-homework-list-box'>
        <ul class="list-box">
        <li>
            <div class="tab-btn" @click='doTab'>{{des}}<img :src="flag?bIcon:rIcon" alt="">
            </div>
            <div class="list-inner-box" v-show='flag'>
                <ul>
                    <li v-for="(item,index) in content" :key='index'>
                        <span>{{item.title}}</span>
                        <img :src="item.status?endImg:''" alt="">
                        <div style="flex:1;text-align:right;">
                            <router-link to='#' :style="item.btn_name=='查询作业'?'background:#6FD71':item.btn_name=='等待批改'?'background:#328CF7':'background:#FC6464'">
                                {{item.btn_name}}
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
//import引入的组件需要注入到对象中才能使用
props:{
    listData:Object
},
data() {
//这里存放数据
return {
    endImg:require('@/assets/images/homework/right_icon.png'),
    des:'',
    content:'',
    flag:true,
    bIcon:require('@/assets/images/homework/arrow_b.png'),
    rIcon:require('@/assets/images/homework/arrow_r.png')
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    doTab:function(){
        if(this.flag){
            this.flag = false;
        }
        else{
            this.flag = true;
        }
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
 this.des = this._props.listData.des;
 this.content = this._props.listData.content;
 console.log(this._props.listData)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import './m-homework-list-box.less';
</style>