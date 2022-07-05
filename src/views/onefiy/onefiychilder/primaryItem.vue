<template>
    <div class="Primary">
        <primaryitem-left :onefiyClass="onefiyClass" :oneSortDivShowHot="oneSortDivShowHot"></primaryitem-left>
        <primaryitem-right :oneSortDivShow="oneSortDivShow"></primaryitem-right>

    </div>
</template>
<script>
import PrimaryitemLeft from "./hotitem/primaryitemLeft.vue"
import PrimaryitemRight from "./hotitem/primaryitemRight.vue"

export default {
    name: "Primary",
    components:{
        PrimaryitemLeft,
        PrimaryitemRight,
    },
    data() {
        return {

        }
    },
    props:{
        onefiyClass:{
            type:String,
            default:"",
        },
        oneSortDivShowHot:{
            type:Array,
            default:'',
        },
        oneSortDivShow:{
            type:Array,
            default:'',
        }
    }
}
</script>
<style scoped lang="less">
.Primary {
    padding: 0 38px;
    display: flex;
    justify-content: space-between;
}
</style>