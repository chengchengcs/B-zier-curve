<template>
    <div class="wrap h-100 p10">
        <canvas id="canvas" width="360" height="600"></canvas>
    </div>
</template>
<script>

export default {
    data() {
        return {
            radius: 7,
            x: 300,
            y: 300,
            anchorX: 200,
            anchorY: 200,
            startX: 100,
            startY: 100,
        }
    },
    created() {

    },
    mounted() {
        document.removeEventListener('touchstart', this.wrapTouchStart);
        document.addEventListener("touchstart", this.wrapTouchStart);

        document.removeEventListener('touchmove', this.wrapTouchMove);
        document.addEventListener('touchmove', this.wrapTouchMove);

        document.removeEventListener('touchend', this.wrapTouchEnd);
        document.addEventListener('touchend', this.wrapTouchEnd);

        document.removeEventListener('touchcancel', this.wrapTouchCancel);
        document.addEventListener('touchcancel', this.wrapTouchCancel);
    },
    methods: {
        wrapTouchStart(e) {
            // console.log(e,'--------touchstart');
        },
        wrapTouchMove(e) {
            this.x = e.changedTouches[0].clientX;
            this.y = e.changedTouches[0].clientY;
            this.anchorX = (e.changedTouches[0].clientX + this.startX) / 2;
            this.anchorY = (e.changedTouches[0].clientY + this.startY) / 2;
            // console.log(this.radius, '------wrapTouchMove');
            this.d2();
            // this.test2();
        },
        wrapTouchEnd() {
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
        wrapTouchCancel() {
            let oCanvas = document.querySelector("#canvas"),
                ctx = oCanvas.getContext('2d');
            ctx.clearRect(0, 0, 360, 600);
            // console.log('------wrapTouchMove');
        },
        d2() {

            let _this = this;
            let oCanvas = document.querySelector("#canvas"),
                ctx = oCanvas.getContext('2d');
            ctx.strokeStyle = 'red';


            var distance = Math.sqrt(Math.pow(this.y - this.startY, 2) + Math.pow(this.x - this.startX, 2));
            this.radius = -distance / 15 + 20;
            // 两条贝塞尔曲线和两条直线
            // 
      
            // 当气泡拉到一定程度，断开链条且链条消失
            //if (this.radius < 7) {
            if(distance > 220){
                ctx.clearRect(0, 0, 360, 600);
                ctx.beginPath();
                ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
                ctx.strokeStyle = 'red';
                ctx.fill();

                console.log('end');
                return;
            }

            let sin = (this.x - this.startX) / distance;
            let cos = (this.y - this.startY) / distance;


            var x1 = this.startX - this.radius * cos;
            var y1 = this.startY + this.radius * sin;

            var x2 = this.x - 20 * cos;
            var y2 = this.y + 20 * sin;

            var x3 = this.x + 20 * cos;
            var y3 = this.y - 20 * sin;

            var x4 = this.startX + this.radius * cos;
            var y4 = this.startY - this.radius * sin;

            ctx.clearRect(0, 0, 360, 600);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo(this.anchorX, this.anchorY, x2, y2);
            ctx.lineTo(x3, y3);
            ctx.quadraticCurveTo(this.anchorX, this.anchorY, x4, y4);
            ctx.lineTo(x1, y1);
            ctx.fillStyle = 'red'; // 填充
            ctx.stroke();
            ctx.fill();

            // 两圆圈
            ctx.beginPath();
            ctx.arc(this.startX, this.startY, this.radius, 0, 2 * Math.PI)
            ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI)
            ctx.strokeStyle = 'red';

            ctx.fill();

        },
    }
}

</script>
<style lang="less" scoped>
</style>
