<template>
    <div class="home">
        <!-- <Nav></Nav> -->
        122222
        <router-view :key="$route.fullpath"/>
    </div>
</template>
<script>
import Nav from '../../components/Nav.vue'

export default {
    name: "Home",
    components: {
        Nav,
    }


}
</script>