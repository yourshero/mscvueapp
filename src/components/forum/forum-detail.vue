<!--  -->
<template>
<div class='forum-detail'>
    <m-back class="line"></m-back>
    <div class="detail-box">
        <div class="tit">
            {{detailBox.tit}}
        </div>
        <div class="people">
            <img :src="detailBox.hpic" alt="">
            <div class="info">
                <span class="name">
                    {{detailBox.name}}
                </span>
                <p>
                    发布于{{detailBox.time}}&nbsp;{{detailBox.reply}}回复&nbsp;{{detailBox.read}}次浏览
                </p>
            </div>
        </div>
        <img src="../../assets/images/forum/detail_bg.png" alt="" class="detail-bg">
        <div class="detail-btn">
            <div class="zan">
                18
            </div>
            <div class="share">
                22
            </div>
        </div>
    </div>
    <div class="reply-box">

    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
 import Mback from '@/components/m-back/m-back';
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    'm-back':Mback
},
data() {
//这里存放数据
return {
    detailBox:{
        tit:'【第二篇：盈利产品打造】第13天考试+作业+实操',
        hpic:require('@/assets/images/forum/teacher_icon.png'),
        name:'幕思城_卓玛',
        time:'2019/01/08 11:11:24',
        reply:30,
        read:123,
    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
@import './forum-detail.less';

</style>