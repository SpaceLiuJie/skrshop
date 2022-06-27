<template>
    <div id="app">
        <Nav></Nav>
        <!-- <div>
            <router-link to="/home">Home1</router-link>
        </div> -->
<<<<<<< HEAD
        <!-- <MyPage /> -->
        <!-- <Coupon /> -->
        <!-- <Event /> -->
=======
        <MyPage />
        <!-- <Coupon /> -->
>>>>>>> 43cf76b1918c1b29de4be482ce67f858847357c4
        <router-view />
    </div>
</template>
<script>
import Nav from '../src/components/Nav.vue'
<<<<<<< HEAD
// import MyPage from './views/mypage/MyPage.vue'
// import Coupon from './views/mypage/coupon/index.vue'
// import Event from './views/home/TopRight/event.vue'
=======
import MyPage from './views/mypage/MyPage.vue'
// import Coupon from './views/mypage/coupon/index.vue'
>>>>>>> 43cf76b1918c1b29de4be482ce67f858847357c4
export default {
    name: 'APP',
    components: {
        Nav,
<<<<<<< HEAD
        // MyPage,
        // Coupon,
        // Event,
=======
        MyPage,
        // Coupon,
>>>>>>> 43cf76b1918c1b29de4be482ce67f858847357c4
    },
    data() {
        return {}
    }
};
</script>


<style lang="scss">
</style>
