<template>
    <div class="event">
        <div class="title">
            <span id="title">EVENT</span>
        </div>
        <eventtop />
    </div>
</template>
<script>
import eventtop from './eventcontent/eventtop.vue'
export default {
    name: 'Event',
    components: {
        eventtop,
    }
}
</script>

<style scoped>
.title {
    width: 45px;
    margin: 10px auto;
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