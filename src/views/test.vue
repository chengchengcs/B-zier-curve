<template>
    <div class="wrap h-100 p10">
        <span>{{name}}</span>
        <canvas id="canvas" width="800" height="800"></canvas>
    </div>
</template>
<script>


export default {
    data() {
        return {
            name:'二次贝赛尔曲线方程'
        }
    },
    created() {

    },
    mounted() {
        this.d2();  //2阶方法
        // this.d3();   //3阶方法
    },
    methods: {
        // 二阶
        d2(){
            this.name = '二次贝赛尔曲线方程';
            let _this = this;
            let oCanvas = document.querySelector("#canvas"),
            oGc = oCanvas.getContext('2d');
            let percent = 0;
            function animate() {
                oGc.clearRect(0, 0, 800, 800);
                oGc.beginPath();
                oGc.strokeStyle = 'red';
                
                oGc.moveTo( 40, 80 );
                //http://www.w3school.com.cn/tags/canvas_quadraticcurveto.asp
                //oGc.quadraticCurveTo( 137, 80, 140, 280 );
                
                _this.d2_(oGc,[40, 80],[137, 80],[140, 280],percent);
                
                oGc.stroke();
                percent = (percent + 1) % 100;
                // http://web.jobbole.com/91578/
                requestAnimationFrame(animate);
            }
            animate()

        },
        d2_(oGc,start,cp,end, percent){

            for (var t = 0; t <=  percent / 100; t += 0.01) { 
                var x = this.quadraticBezier(start[0], cp[0], end[0], t); 
                var y = this.quadraticBezier(start[1], cp[1], end[1], t);
                oGc.lineTo(x, y);
            } 
        },
        quadraticBezier(p0, p1, p2, t) {
            var k = 1 - t;
            return k * k * p0 + 2 * (1 - t) * t * p1 + t * t * p2; // 这个方程就是二次贝赛尔曲线方程 
        },
        // 三阶
        d3(){
            this.name = '三次贝赛尔曲线方程';
            let _this = this;
            let oCanvas = document.querySelector("#canvas"),
            oGc = oCanvas.getContext('2d');
            let percent = 0;
            function animate() {
                oGc.clearRect(0, 0, 800, 800);
                oGc.beginPath();
                oGc.strokeStyle = 'red';
                
                
                oGc.moveTo( 45, 238 );
                // http://www.w3school.com.cn/tags/canvas_beziercurveto.asp
                // oGc.bezierCurveTo( 125, 45, 215, 418, 305, 190 );
                _this.d3_(oGc,[45, 238],[125, 45],[215, 418],[305, 190],percent);

                oGc.stroke();
                percent = (percent + 1) % 100;
                requestAnimationFrame(animate);
            }
            animate()

        },
        d3_(oGc,start,cp1,cp2,end, percent){
            
            for (var t = 0; t <=  percent / 100; t += 0.05) { 
                var x = this.bezierCurveTo3(start[0], cp1[0], cp2[0],end[0], t); 
                var y = this.bezierCurveTo3(start[1], cp1[1], cp2[1],end[1], t);
                oGc.lineTo(x, y); 
            } 
        },
        bezierCurveTo3(p0, p1, p2, p3, t){
            let k = 1 - t;
            return k * k * k * p0 + 3 * p1 * t * k * k + 3 * p2 * t * t * k + p3 * t * t * t; // 这个方程就是三次贝赛尔曲线方程
        },

    }
}
</script>
<style lang="less" scoped>


</style>
