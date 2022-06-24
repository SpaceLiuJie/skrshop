<template>
    <div class="mypage">
        <PageTitle />
        <PageSnb />
        <PageMain />
    </div>
</template>

<script>
import PageTitle from './MypageChild/PageTitle.vue'
import PageSnb from './MypageChild/PageSnb.vue'
import PageMain from './MypageChild/PageMain.vue';
// import { getSpu } from '../../api/mypage.js'
export default {
    name: 'Mypage',
    components: {
        PageTitle,
        PageSnb,
        PageMain,
    },
    methods: {
        // getSpu_init() {
        //     getSpu("鞋类").then((res) => {
        //         console.log(res);
        //     });
        // },
    },
    created() {
        // this.getSpu_init();
    },
};
</script>

<style scoped>
</style>