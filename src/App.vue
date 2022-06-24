<template>
    <div id="app">
        <Nav></Nav>
        <!-- <div>
            <router-link to="/home">Home1</router-link>
        </div> -->
        <MyPage />
        <router-view />
    </div>
</template>
<script>
import Nav from '../src/components/Nav.vue'
import MyPage from './views/mypage/MyPage.vue'
export default {
    name: 'APP',
    components: {
        Nav,
        MyPage,
    },
    data() {
        return {}
    }
};
</script>


<style lang="scss">
</style>
