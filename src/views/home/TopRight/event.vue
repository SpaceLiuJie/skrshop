<template>
    <div class="event">
        <div class="title">
            <span id="title">EVENT</span>
        </div>
        <eventtop />
        <benefit />
        <hotkey />
        <allshop />
        <xuanran />
    </div>
</template>
<script>
import eventtop from './eventcontent/eventtop.vue'
import benefit from './eventcontent/benefit.vue'
import hotkey from './eventcontent/hotkey.vue'
import allshop from './eventcontent/allshop.vue'
import Xuanran from './eventcontent/xuanran.vue'
export default {
    name: 'Event',
    components: {
        eventtop,
        benefit,
        hotkey,
        allshop,
        Xuanran,
    }
}
</script>

<style lang="less" scoped>
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