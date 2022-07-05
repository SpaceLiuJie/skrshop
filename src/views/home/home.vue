<template>
    <div class="home">
        <!-- <Nav></Nav> -->
        <index/>
        <router-view :key="$route.fullpath"/>
    </div>
</template>
<script>
import Nav from '../../components/Nav.vue'
import index from './index.vue'
export default {
    name: "Home",
    components: {
        Nav,
        index 
    }
    ,
    methods: {

    },
    created() {

    },
}
</script>