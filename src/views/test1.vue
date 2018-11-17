<template>
    <div class="wrap h-100">
       <p>3阶</p>
        <canvas id="canvas"></canvas>
    </div>
</template>
<script>

export default {
    data() {
        return {
            res: ""
        }
    },
    created() {
    },
    mounted() {
       this.init();
    },
    methods: {
        init(){
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            canvas.width = 375;//canvas.parentNode.offsetWidth;
            canvas.height = 500;//canvas.parentNode.offsetHeight;
            //填充颜色
            ctx.fillStyle = "rgba(0,222,255, 0.2)";
            let step =0;
            function loop(){
            
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.fillStyle = "rgba(0,222,255, 0.2)";
                //角度增加一度
                step++;
                //角度转换成弧度
                var angle = step*Math.PI/180;
                //矩形高度的变化量
                var deltaHeight   = Math.sin(angle) * 50;
                //矩形高度的变化量(右上顶点)
                var deltaHeightRight   = Math.cos(angle) * 50;
                ctx.beginPath();
                ctx.moveTo(0, canvas.height/2+deltaHeight);
                //右上顶点
                //ctx.lineTo(canvas.width, canvas.height/2+deltaHeightRight);
                ctx.bezierCurveTo(canvas.width /2, canvas.height/2+deltaHeight-50, canvas.width / 2, canvas.height/2+deltaHeightRight-50, canvas.width, canvas.height/2+deltaHeightRight);
                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.lineTo(0, canvas.height/2+deltaHeight);
                ctx.closePath();
                ctx.fill();


                requestAnimationFrame(loop);
            }
            loop();
        },

    }
}
</script>
<style lang="less" scoped>


</style>
