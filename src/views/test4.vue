<template>
    <div class="wrap h-100 p10">
 
        <div class="out">
            <div class="haorooms-dot">
                <div class="item"></div>
            </div>
        </div>

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
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>

.out{
    width: 120px;
    height: 218px;
    border:1px solid #000;
}
.haorooms-dot {
    // animation-fill-mode:forwards; 
    animation: yAxis 1.5s infinite ;
    //cubic-bezier(.55, 0, .85, .36);//cubic-bezier(0.5, -0.5, 1, 1);//cubic-bezier(.11,-.33,.55,.11); //infinite
    position:relative;
    .item{
        width:20px;
        height:20px;
        background-color: green;
        border-radius: 50%;
        animation: xAxis 1.5s infinite linear;
    }
}
@keyframes yAxis {
    0%{
        transform: translateY(0px);
    }
  
    35%,50%,67%,81%,95%{
        animation-timing-function:cubic-bezier(.35,1.07,1,1); //抛物线
        transform: translateY(200px);
    }
    42%{
        animation-timing-function:cubic-bezier(0,.7,.53,1); //先快后慢
        transform: translateY(140px);
    }
    60%{
        animation-timing-function:cubic-bezier(0,.7,.53,1); //先快后慢
        transform: translateY(150px);
    }
    74%{
        animation-timing-function:cubic-bezier(0,.7,.53,1); //先快后慢
        transform: translateY(170px);
    }
    88%{
        animation-timing-function:cubic-bezier(0,.7,.53,1); //先快后慢
        transform: translateY(190px);
    }
    100% {
        transform: translateY(200px);

    }
}
@keyframes xAxis {
    0%{
        transform: translateX(0px);
    }
    100%{
        transform: translateX(100px);
    }

}

</style>
