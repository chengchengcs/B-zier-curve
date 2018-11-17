<template>
    <div class="wrap h-100 p10">
        <p><router-link target="_blank" :to="{ name: 'test'}">公式贝塞尔曲线</router-link></p>

        <p><router-link target="_blank" :to="{ name: 'test3',}">波浪实例</router-link></p>
       
       <p><router-link target="_blank" :to="{ name: 'test4',}">小球落地</router-link></p>

       <p><router-link target="_blank" :to="{ name: 'test6',}">仿QQ 拟合小红点</router-link></p>
    </div>
</template>
<script>


export default {
    data() {
        return {
            name:'贝赛尔曲线方程'
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
p{
    line-height:1.5;
    font-size: 14px;
}

</style>
