<template>
  <div class="m-home-title">
      <strong>{{name}}</strong>
      <span>{{des}}</span>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    props:{
        titleDate:{
            type:Array,
            require:true
        },
        cur:{
            type:String,
            require:true
        }
    },
    data() {
      return {
        msg: '板块标题',
        arr:this._props.titleDate,
        curtext:this._props.cur,
        name:'',
        des:''
      }
    },
    mounted(){
        //过滤筛选
        this.date = this.arr.filter( v => v.name === this.curtext)[0];
        //console.log(this.date);
        this.name = this.date.name;
        this.des = this.date.des;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .m-home-title {
      height: 139px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 33px;
      strong{
          color:#343434;
          font-size: 48px;
      }
      span{
          font-size: 30px;
          color:#606060;
      }
  }
</style>