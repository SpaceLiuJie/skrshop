<template>
    <div id="app">
        <Nav v-show="Navshow"></Nav>
        <!-- <div>
            <router-link to="/home">Home1</router-link>
        </div> -->
        <!-- <MyPage /> -->
        <!-- <Coupon /> -->
        <!-- <Login key="show"></Login> -->
        <router-view :key="$route.fullpath" />
    </div>
</template>
<script>
import Nav from '../src/components/Nav.vue'
import MyPage from './views/mypage/MyPage.vue'
import Login from '@/views/login/index.vue'
// import Coupon from './views/mypage/coupon/index.vue'
export default {
    name: 'APP',
    components: {
        Nav,
        MyPage,
        // Coupon,
        Login,
        
    },
    data() {
        return {
            show:true,
            Navshow:false,
        }
    },
    methods:{
        gainToken(){
            let gainToken = this.$store.state.user.token
            console.log('gainToken',gainToken);
            if(!gainToken){
                this.show = true;
                this.Navshow=false;
            }else{
                this.show = false
                this.Navshow=true;
            }
        }
    },
    created(){
        this.gainToken()
    },
    mounted(){
        this.gainToken()

    },
   
};
</script>


<style lang="scss">
</style>
