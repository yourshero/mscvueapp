<!--  -->
<template>
<!-- 作业首页 -->
<div class='homework-index'>
    <m-homework-menu></m-homework-menu>
        <div class="tit">
            <i></i>
            <span>
                作业试看
            </span>
            <p>查看更多>></p>
        </div>
        <ul>
            <li v-for="(item,index) in homeworkList" :key='index'>
                <strong>{{item.htit}}</strong>
                <div class="info">{{item.name}}<span>|</span>{{item.time}}<span>|</span>{{item.num}}
                </div>
                <p>{{item.artilc}}</p>
            </li>
        </ul>
        <m-load-more :text='text' style='border-top:none'></m-load-more>
    <m-bottom-back></m-bottom-back>
</div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import mHomeworkMmenu from '@/components/m-homework-menu/m-homework-menu'
import mBottomBack from '@/components/m-bottom-back/m-bottom-back'
import mLoadMore from '@/components/m-load-more/m-load-more'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    'm-homework-menu':mHomeworkMmenu,
    'm-bottom-back':mBottomBack,
    'm-load-more':mLoadMore
},
data() {
//这里存放数据
return {
    text:'加载更多',
    homeworkList:[
        {
            htit:'作业名称：实操1：明确服务人群',
            name:'金淘钟均国',
            time:'2019-01-08',
            num:3,
            artilc:'我公司的淘宝店铺（乐购苹果八号店）是属于本地服类目！公司成立于2017年4月主要是做成都本地的iPhone维修服务。店铺目前属于是优质低价，目前就是通过做低价让更多的客户知道我们，给客户高品质的服务让人对我们映像更加深刻。'
        },
        {
            htit:'作业名称：实操1：明确服务人群',
            name:'金淘钟均国',
            time:'2019-01-08',
            num:3,
            artilc:'我公司的淘宝店铺（乐购苹果八号店）是属于本地服类目！公司成立于2017年4月主要是做成都本地的iPhone维修服务。店铺目前属于是优质低价，目前就是通过做低价让更多的客户知道我们，给客户高品质的服务让人对我们映像更加深刻。'
        },
        {
            htit:'作业名称：实操1：明确服务人群',
            name:'金淘钟均国',
            time:'2019-01-08',
            num:3,
            artilc:'我公司的淘宝店铺（乐购苹果八号店）是属于本地服类目！公司成立于2017年4月主要是做成都本地的iPhone维修服务。店铺目前属于是优质低价，目前就是通过做低价让更多的客户知道我们，给客户高品质的服务让人对我们映像更加深刻。'
        },
        {
            htit:'作业名称：实操1：明确服务人群',
            name:'金淘钟均国',
            time:'2019-01-08',
            num:3,
            artilc:'我公司的淘宝店铺（乐购苹果八号店）是属于本地服类目！公司成立于2017年4月主要是做成都本地的iPhone维修服务。店铺目前属于是优质低价，目前就是通过做低价让更多的客户知道我们，给客户高品质的服务让人对我们映像更加深刻。'
        }
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
@import './homework-index.less';

</style>