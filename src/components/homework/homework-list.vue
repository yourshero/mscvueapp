<!--  -->
<template>
<div class='homework-list btm'>
    <m-homework-menu></m-homework-menu>
    <div class="tit">
        <i></i>
        <span>
            作业列表
        </span>
    </div>
    <div class="pd48">
        <div v-for="(item,index) in listData" :key='index'>
            <m-homework-list-box :listData='item'></m-homework-list-box>
        </div>
     </div>
    <m-bottom-back></m-bottom-back>
</div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import mHomeworkListBox from '@/components/m-homework-list-box/m-homework-list-box'
import mHomeworkMmenu from '@/components/m-homework-menu/m-homework-menu'
import mBottomBack from '@/components/m-bottom-back/m-bottom-back'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    'm-homework-menu':mHomeworkMmenu,
    'm-homework-list-box':mHomeworkListBox,
    'm-bottom-back':mBottomBack
},
data() {
//这里存放数据
return {
    endImg:require('@/assets/images/homework/right_icon.png'),
        listData:[
        {
                des:'第1关:想清楚【店铺定位】',
                content:[
                {
                    title:'实操1：明确服务人群',
                    btn_name:'查询作业',
                    status:1
                },
                {
                    title:'实操1：明确服务人群',
                    btn_name:'等待批改',
                    status:0
                },
                {
                    title:'实操1：明确服务人群',
                    btn_name:'去做作业',
                    status:0
                },
                ]
        },
        {
                des:'第1关:想清楚【店铺定位】',
                content:[
                {
                    title:'实操1：明确服务人群',
                    btn_name:'查询作业',
                    status:0
                },
                {
                    title:'实操1：明确服务人群',
                    btn_name:'查询作业',
                    status:1
                },
                {
                    title:'实操1：明确服务人群',
                    btn_name:'查询作业',
                    status:1
                },
                ]
        },
        {
                des:'第3关:搞流量【推广引流】',
                content:[
                {
                    title:'实操1：明确服务人群',
                    btn_name:'查询作业',
                    status:1
                },
                {
                    title:'实操1：明确服务人群',
                    btn_name:'查询作业',
                    status:0
                },
                {
                    title:'实操1：明确服务人群',
                    btn_name:'查询作业',
                    status:0
                },
                ]
        },
    ]
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
@import './homework-list.less';
</style>