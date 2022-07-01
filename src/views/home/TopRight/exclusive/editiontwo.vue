<template>
    <div class="editiontwo">
        <div class="contentNeed">
            <div hoverable class="needContent" v-for="(item, index) in wantneedList" :key="index" @click="detail(item)">
                <img class="contentImg" alt="example" :src="item.img" />
            </div>
        </div>
    </div>
</template>

<script>
import { getTypeOneList } from '../../../../api/exclusive.js'
export default {
    name: 'Editiontwo',
    data() {
        return {
            wantneedList: [],
        }
    },
    methods: {
        async getTypeOneList() {
            const { res } = await getTypeOneList("服饰");
            this.want = res.slice(272, 273);
            this.wantn = this.want.concat(res.slice(247, 248))
            this.wantneed = this.wantn.concat(res.slice(264, 265))
            this.wantneedList = this.wantneed.concat(res.slice(270, 271))
        },
        detail(item) {
            this.$router.push(`/detail/${item.id}`);
        },
    },
    created() {
        this.getTypeOneList();
    }
};
</script>

<style lang="less" scoped>
.editiontwo {
    width: 1200px;
    height: 270px;
    margin: 0 auto;
}

.contentImg {
    width: 22%;
    height: 100%;
    float: left;
    margin-left: 30px;
}
</style>
