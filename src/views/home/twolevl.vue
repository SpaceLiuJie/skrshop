<template>
    <div id="twolevlDetail">
        <div class="title">
            <h4>{{ twolevl_content }}</h4>
        </div>
        <div class="nav"><span>Home</span>&nbsp;&nbsp;/&nbsp;&nbsp;<sapn>Twolevl</sapn>
        </div>
        <div class='tuShow'>
            <div class="tuShowContent">
                <h3>{{twolevl_content}}专区</h3>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "twolevlDetail",
    data() {
        return {
            twolevl_content: '',
        }
    },
    methods: {
        // let twolevlDetail = this.$route.params.twolevlDetail,
        twolevlDetail() {
            let Detail = this.$route.params.twolevlDetail;
            this.twolevl_content = Detail
            console.log(this.twolevl_content);

        }
    },
    created() {
        this.twolevlDetail()

    },
    mounted() {

    },
    watch: {
        $route: {
            deep: true, // 深度加你太能干
            handler(to, from) {
                console.log("---------------------watch route----------------");
                console.log(to);
                this.twolevlDetail()
                // this.getTypeOneShop();
            },
        },

    }
}
</script>
<style lang="less" scoped>
#twolevlDetail {
    width: 100%;
    background-color: #fff;

    .title {
        // margin: 30px auto;
        // min-width: 1270px;
        // max-width: 1670px;
        font-size: 30px;

        // border: 1px solid #333;
        h4 {
            width: 200px;
            margin: 30px auto;
            text-align: center;

        }
    }

    .nav {
        width: 200px;
        margin: 0 auto;
        text-align: center;

        span {
            color: #333;
        }
    }
    .tuShow {
        width: 80%;
        background-color: #333;
        height: 251px;
        margin: 20px auto;
    }
}
</style>