<template>
  <div class="m-learn-course">
      
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
      }
    },
    mounted(){
        console.log(this._props.item.majorName)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>