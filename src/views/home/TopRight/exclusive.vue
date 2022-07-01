<template>
    <div class="event">
        <div class="title">
            <span id="title">EXCLUSIVE</span>
        </div>
        <exclusive />
        <Wantneed />
        <Edition />
        <Editiontwo />
        <Talking />
        <Wantneedtwo />
    </div>
</template>
<script>
import exclusive from './exclusive/exclusivetop.vue'
import Wantneed from './exclusive/wantneed.vue'
import Edition from './exclusive/edition.vue'
import Talking from './exclusive/talking.vue'
import Wantneedtwo from './exclusive/wantneedtwo.vue'
import Editiontwo from './exclusive/editiontwo.vue'
export default {
    name: 'Exclusive',
    components: {
        exclusive,
        Wantneed,
        Edition,
        Editiontwo,
        Talking,
        Wantneedtwo,
    }
}
</script>

<style scoped>
.title {
    width: 25%;
    margin: 40px auto;
    text-align: center;
}

#title {
    color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 100;
}
</style>