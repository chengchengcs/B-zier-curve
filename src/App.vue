<template>
    <div>
      
        <router-view></router-view>
        
    </div>

</template>

<script>


  export default {

    components: {
      
    },

    data() {
      return {
        maskFlagCode:false,
        marryData:[],
        selectValue:0,
      }
    },
    created(){
      for(let i=0;i<12;i++){
        this.marryData.push({
          value:22,
          isOpen:false
        })
      }
    },
    mounted(){
      //this.setHeight();
    },
    methods: {

      setHeight(){
        document.querySelector('.bg').style.height = screen.availHeight +'px';

      },
      //打开红包
      openHb(index){
        if(this.marryData[index].isOpen){
          return;
        }
        this.selectValue = this.marryData[index].value;
        this.marryData[index].isOpen = true;
        this.maskFlagCode = true;
        
      },
    }
  }
</script>

<style lang="less" scoped>
.propDialog {
    position: fixed;
    font-family: Arial, Helvetica, sans-serif;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
    z-index: 2000;
   // display: none;
    transition: opacity 250ms ease-in;
}
.propcont{
    //display: none;
    position: fixed;
    padding: 0;
    z-index: 2000;
    width: 100%;
    height:100%;
    top: 20%;
    left: 0;
    /* background-color: #ffffff; */
    .info-bd{
      text-align: center;
      // padding-top: 20%;
      position:relative;
      img{
        width: 30%;
      }
      p{
        position: absolute;
        width: 100%;
        text-align: center;
        top: 28%;
        left: 0;
        font-size: 68px;
        color: red;
        span{
          margin-left: 8px;
          font-size: 37px;
        }
      }
    }
}
.bg{
  width: 100%;
  height: 100%;
  position: relative;
  background: url('./assets/images/bg.jpg') no-repeat center center/cover;
  .logo{
    position: absolute;
    top: 20%;
    right: 10%;
    img{
      width: 160px;
    }
  }
  .cont{
    display: flex;
    flex-wrap: wrap;
    width: 48%;
    margin: 0 auto;
    padding-top: 16%;
    .list{
      width: 25%;
      .item{
        width: 100px;

        margin: 5px auto;
        position:relative;
        img{
          width: 100%;
          height: 150px;
        }
        p{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
          margin: 0;
          color: #bfbf1a;
        }
      }
      .item:hover{
        transform: scale(1.15);
      }
    }
  }

}

</style>
