<template>
    <div id="app">
        <Nav></Nav>
        <!-- <div>
            <router-link to="/home">Home1</router-link>
        </div> -->
        <!-- <MyPage /> -->
        <!-- <Coupon /> -->
        <!-- <Event /> -->
        <router-view />
    </div>
</template>
<script>
import Nav from '../src/components/Nav.vue'
// import MyPage from './views/mypage/MyPage.vue'
// import Coupon from './views/mypage/coupon/index.vue'
// import Event from './views/home/TopRight/event.vue'
export default {
    name: 'APP',
    components: {
        Nav,
        // MyPage,
        // Coupon,
        // Event,
    },
    data() {
        return {}
    }
};
</script>


<style lang="scss">
</style>
