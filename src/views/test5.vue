<template>
    <div class="wrap h-100 p10">
 
        <canvas id="canvas" width="360" height="600"></canvas>


    </div>
</template>
<script>


export default {
    data() {
        return {
            radius : 7,
            x:300,
            y:300,
            anchorX:200,
            anchorY:200,
            startX:100,
            startY:100,
        }
    },
    created() {
 
    },
    mounted() {
        let wrap = document.querySelector(".wrap");
        document.removeEventListener('touchstart', this.wrapTouchStart);
        document.addEventListener("touchstart", this.wrapTouchStart);

        document.removeEventListener('touchmove', this.wrapTouchMove);
        document.addEventListener('touchmove', this.wrapTouchMove);

        document.removeEventListener('touchend', this.wrapTouchEnd);
        document.addEventListener('touchend', this.wrapTouchEnd);

        document.removeEventListener('touchcancel', this.wrapTouchCancel);
        document.addEventListener('touchcancel', this.wrapTouchCancel);
        // this.d2();
    },
    methods: {
        wrapTouchStart(e){
            // console.log(e,'--------touchstart');
        },
        wrapTouchMove(e){
            this.x = e.changedTouches[0].clientX;
            this.y = e.changedTouches[0].clientY;
            this.anchorX =  (e.changedTouches[0].clientX + this.startX)/2;
            this.anchorY =  (e.changedTouches[0].clientY + this.startY)/2;
            console.log(e,'------wrapTouchMove');
            this.d2();
        },
        wrapTouchEnd(){
            // let oCanvas = document.querySelector("#canvas"),
            // ctx = oCanvas.getContext('2d');
            // ctx.clearRect(0, 0, 360, 600);
            this.radius = 20;

            // 手势坐标
            this.x = 300;
            this.y = 300;

            // 控制点坐标
            this.anchorX = 200;
            this.anchorY = 200;

            // 起点坐标
            this.startX = 100;
            this.startY = 100;
        },
        wrapTouchCancel(){
            let oCanvas = document.querySelector("#canvas"),
            ctx = oCanvas.getContext('2d');
            ctx.clearRect(0, 0, 360, 600);
        },
        d2(){

            // this.radius = 20;

            // // 手势坐标
            // this.x = 300;
            // this.y = 300;

            // // 控制点坐标
            // this.anchorX = 200;
            // this.anchorY = 200;

            // // 起点坐标
            // this.startX = 100;
            // this.startY = 100;


            let _this = this;
            let oCanvas = document.querySelector("#canvas"),
            ctx = oCanvas.getContext('2d');
            ctx.strokeStyle ='red';


            var distance = Math.sqrt(Math.pow(this.y-this.startY, 2) + Math.pow(this.x-this.startX, 2));
            this.radius = -distance/15+20;
            // 两条贝塞尔曲线和两条直线
            // 
            //let x1=80,y1=120, x2=280,y2=320, x3=320,y3=280, x4=120,y4=80;
            
            // 当气泡拉到一定程度，断开链条且链条消失
            if(this.radius < 7){
                  ctx.clearRect(0, 0, 360, 600);
                  ctx.beginPath();
                  ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
                  ctx.strokeStyle ='red';
                  ctx.fill();
                  
                  console.log('end');
                  return;
            }


            //链条还没断开时候的状态
            let offsetX = this.radius*Math.sin(Math.atan((this.y - this.startY) / (this.x - this.startX)));
            let offsetY = this.radius*Math.cos(Math.atan((this.y - this.startY) / (this.x - this.startX)));

            let x1 = this.startX - offsetX;
            let y1 = this.startY + offsetY;

            let x2 = this.x - offsetX;
            let y2 = this.y + offsetY;

            let x3 = this.x + offsetX;
            let y3 = this.y - offsetY;

            let x4 = this.startX + offsetX;
            let y4 = this.startY - offsetY;

            ctx.clearRect(0, 0, 360, 600);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo(this.anchorX, this.anchorY, x2, y2);
            ctx.lineTo(x3, y3);
            ctx.quadraticCurveTo(this.anchorX, this.anchorY, x4, y4);
            ctx.lineTo(x1, y1);
            ctx.fillStyle ='red';// 填充
            ctx.stroke();
            ctx.fill();
            
            // 两圆圈
            ctx.beginPath();
            ctx.arc(this.startX, this.startY, this.radius, 0, 2 * Math.PI)
            ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI)
            ctx.strokeStyle ='red';

            ctx.fill();

        },


          onDrow: function(){
                var distance = Math.sqrt(Math.pow(this.y-this.startY, 2) + Math.pow(this.x-this.startX, 2));
                this.radius = -distance/15+20;

                // 当气泡拉到一定程度，断开链条且链条消失
                if(this.radius < 7){
                  
                  // 不是很理解为何写了beginPath就把原来画的给清理了???
                  this.ctx.beginPath();
                  this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
                  this.ctx.setFillStyle('red');
                  this.ctx.fill();

                  this.ctx.beginPath();
                  this.ctx.setFontSize(20)
                  this.ctx.setFillStyle('white');
                  this.ctx.fillText('99+', this.x - 14, this.y + 6);
                  this.ctx.fill();

                }else{

                  // 链条还没断开时候的状态
                  var offsetX = this.radius*Math.sin(Math.atan((this.y - this.startY) / (this.x - this.startX)));
                  var offsetY = this.radius*Math.cos(Math.atan((this.y - this.startY) / (this.x - this.startX)));

                  var x1 = this.startX - offsetX;
                  var y1 = this.startY + offsetY;

                  var x2 = this.x - offsetX;
                  var y2 = this.y + offsetY;

                  var x3 = this.x + offsetX;
                  var y3 = this.y - offsetY;

                  var x4 = this.startX + offsetX;
                  var y4 = this.startY - offsetY;

                  
                  // 画贝塞尔曲线
                  this.ctx.beginPath();
                  this.ctx.moveTo(x1, y1);
                  this.ctx.quadraticCurveTo(this.anchorX, this.anchorY, x2, y2);
                  this.ctx.lineTo(x3, y3);
                  this.ctx.quadraticCurveTo(this.anchorX, this.anchorY, x4, y4);
                  this.ctx.lineTo(x1, y1);
                  this.ctx.setFillStyle('red');
                  this.ctx.fill();
                  
                  // 画圆圈
                  this.ctx.beginPath();
                  this.ctx.arc(this.startX, this.startY, this.radius, 0, 2 * Math.PI)
                  this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI)
                  this.ctx.setFillStyle('red');
                  this.ctx.fill();

                  // 写字    如何让文字居中，暂时还没想到办法？？
                  this.ctx.beginPath();
                  this.ctx.setFontSize(20)
                  this.ctx.setFillStyle('white');
                  this.ctx.fillText('99+', this.x - 14, this.y + 6);
                  this.ctx.fill();
                }

               

                this.ctx.draw();
              },
    }
}
</script>
<style lang="less" scoped>


</style>
