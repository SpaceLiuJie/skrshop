<template>
    <div id="app">
        <Nav></Nav>
        <!-- <div>
            <router-link to="/home">Home1</router-link>
        </div> -->
        <router-view />
    </div>
</template>
<script>
import Nav from '../src/components/Nav.vue'
export default {
    name: 'APP',
    components:{
        Nav,
    },
    data(){
        return{}
    }
};
</script>


<style lang="scss">
</style>
