<template>
  <div class="AnCard">
    <div
      hoverable
      class="card"
      v-for="(item,index) in AnCard_list.slice(0,4)"
      :key="index"
      @click="cardclick(item.id)"
    >
      <img class="imgs" alt="example" :src="item.img" />
      <span>
        <p class="qiuxie">{{item.title}}</p>
        <p class="description">www.stride.fun</p>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  mane: "AnCard",
  props: {
    AnCard_list: Array
  },
  methods: {
    cardclick(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>
<style lang="less" scoped>
.AnCard {
  width: 100%;
  padding: 0 10px;
  display: flex;
  text-align: center;
  .card {
    width: calc((100% / 4) - 20px);
    margin: 4px;
    border: 1px solid #e8e8e8;
    .img {
      width: 100%;
    }
  }
  .imgs {
    width: 295px;
    height: 295px;
  }
}
.description {
  color: #666;
  font-family: "yg740";
  font-size: 12px;
  line-height: 1.5;
  word-break: keep-all;
}
.qiuxie {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333;
  font-family: "ProximaNova-Bold";
  font-size: 20px;
}
/deep/ .ant-card-meta-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333;
  font-family: "ProximaNova-Bold";
  font-size: 20px;
}
</style>