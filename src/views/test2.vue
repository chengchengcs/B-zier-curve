<template>
    <div class="wrap">
        
        <canvas id="myCanvas" width="800" height="400"></canvas>

        <p>{{name}}</p>

    </div>
</template>
<script>

export default {
    data() {
            return {
                name:'2阶',
                num: 6,
            }
        },
        mounted() {
            this.init2();  //2阶方法
            // this.init3();  //3阶方法
        },
        methods: {
            init2(){
                this.name = '2阶';
                let c = document.getElementById("myCanvas"),
                    ctx = c.getContext("2d"),

                    waveWidth = 800,
                    offset = 0, //x
                    waveHeight = 20, // 波浪大小
                    waveCount = 5,
                    startX = 0,//-200,
                    startY = 0,//208,
                    progress = 0,  //高度
                    progressStep = 0.5,
                    d2 = waveWidth / waveCount,
                    d = d2 / 2,
                    hd = d / 2;
                    
                    ctx.fillStyle = "rgba(0,222,255, 0.2)";
                    function tick() {
                        offset -= 0;//4;  // x 移动
                        
                        progress += progressStep;
                        if (progress > 220 || progress < 0) progressStep *= -1;
                     
                        if (-1 * offset === d2) offset = 0;
                        
                        ctx.clearRect(0, 0, c.width, c.height);
                        ctx.beginPath();
                        
                        let offsetY = 100;//startY - progress; //y 坐标高低
                        ctx.moveTo(startX - offset, offsetY);
                     
                        for (var i = 0; i < 1; i++) {
                            var dx = i * d2;
                            var offsetX = dx + startX - offset;
                            // ctx.quadraticCurveTo(offsetX + hd, offsetY + waveHeight, offsetX + d, offsetY);
                            // ctx.quadraticCurveTo(offsetX + hd + d, offsetY - waveHeight, offsetX + d2, offsetY);
                            ctx.quadraticCurveTo(offsetX + hd, offsetY - waveHeight, offsetX + d, offsetY);
                            ctx.quadraticCurveTo(offsetX + hd + d, offsetY +waveHeight, offsetX + d2, offsetY);
                        }
                        // ctx.lineTo(startX + waveWidth, 300);
                        ctx.lineTo(startX + d2, 300);
                        ctx.lineTo(startX, 300);
                        ctx.fill();
                     
                        requestAnimationFrame(tick);
                    }
                     
                    tick();

            },

 
            init3(){
                this.name = '3阶';
                let waveWidth = 800,
                    offset = 0,
                    waveHeight = 20, // 波浪大小
                    waveCount = 5,
                    startX = 0,//-200,
                    startY = 208,
                    progress = 0,  //高度
                    progressStep = 0.5,
                    d2 = waveWidth / waveCount,
                    d = d2 / 2,
                    hd = d / 2,
                    c = document.getElementById("myCanvas"),
                    ctx = c.getContext("2d");

                    ctx.fillStyle = "rgba(0,222,255, 0.2)";
                    function tick() {
                        offset -= 0;//4;  // x 移动
                        progress += progressStep;
                        if (progress > 220 || progress < 0) progressStep *= -1;
                     
                        if (-1 * offset === d2) offset = 0;
                        ctx.clearRect(0, 0, c.width, c.height);
                        ctx.beginPath();
                        var offsetY = 100;//startY - progress; //y 坐标高低

                        ctx.moveTo(startX - offset, offsetY);
                     
                        for (var i = 0; i < 1; i++) {
                            var dx = i * d2;
                            var offsetX = dx + startX - offset;
                            
                            ctx.bezierCurveTo(offsetX + hd, offsetY + waveHeight, 
                                                offsetX + d + hd, offsetY-waveHeight,
                                                offsetX + d2, offsetY);

                            // ctx.quadraticCurveTo(offsetX + hd, offsetY + waveHeight, offsetX + d, offsetY);
                            // ctx.quadraticCurveTo(offsetX + hd + d, offsetY - waveHeight, offsetX + d2, offsetY);
                        }
                        // ctx.lineTo(startX + waveWidth, 300);
                        ctx.lineTo(startX + d2, 300);
                        ctx.lineTo(startX, 300);
                        ctx.fill();
                     
                        requestAnimationFrame(tick);
                    }
                     
                    tick();
            },







        },
}
</script>
<style lang="less" scoped>
.wrap{
    // z-index: 1024;
    // height: 1000px;
    // border:2px solid red;
    background-color: #fff;
    overflow-y: hidden;
    // margin: 10px;

}
</style>
