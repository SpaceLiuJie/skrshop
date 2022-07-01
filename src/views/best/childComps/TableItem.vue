<template>
  <div id="tab_item">
    <div class="card-container">
      <div>
        <ul class="tabs">
          <li
            @click="onTabs(item, index)"
            :class="{ tab, istab: istab == index ? true : false }"
            v-for="(item, index) in tab"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="sort">
          <li v-for="(items, indexs) in sort[this.item]" :key="indexs">
            <span
              :class="{
                onspan: active == indexs ? true : false,
              }"
              @click="onChange(indexs)"
              >{{ items }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableItem",
  data() {
    return {
      item: "",
      istab: 0,
      tab: ["All", "鞋类", "服饰", "配件", "儿童专区"],
      sort: {
        All: [],
        鞋类: ["ALL WOMEN", "APPAREL", "BAG", "SHOES", "ACC"],
        服饰: ["ALL MEN", "APPAREL", "BAG", "SHOES", "ACC"],
        配件: [
          "ALL LIFE",
          "LIFEWEAR",
          "HOME",
          "TRAVEL",
          "DIGITAL",
          "PET",
          "GOODS",
        ],
        儿童专区: [
          "ALL BEAUTY",
          "FACIAL BEAUTY",
          "SALON BEAUTY",
          "SCENT BEAUTY",
          "INNER BEAUTY",
          "for MEN",
        ],
      },
      active: 0,
    };
  },
  methods: {
    onChange(indexs) {
      this.active = indexs;
    },
    onTabs(item, index) {
      this.item = item;
      this.active = 0;
      this.istab = index;
      this.$emit("tabItem", this.tab[index]);
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
* {
  list-style: none;
}
#tab_item {
  box-sizing: border-box;
  list-style: none;
  width: 82%;
  margin: 0 auto;
  height: 60px;
  position: relative;
  .tabs {
    display: flex;
    justify-content: space-between;
    padding: 0;
    .tab {
      border: 1px solid #ccc;
      background-color: #fff;
      font-family: ProximaNova-Semibold;
      text-align: center;
      font-weight: 700;
      font-size: 18px;
      width: 20%;
      height: 58px;
      margin: 0;
      padding: 0 16px;
      line-height: 58px;
      border-bottom: 2px solid #000;
      border-radius: 0;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .istab {
      border: 2px solid #000;
      background-color: #fff;
      font-family: ProximaNova-Semibold;
      text-align: center;
      font-weight: 700;
      font-size: 18px;
      width: 20%;
      height: 58px;
      margin: 0;
      padding: 0 16px;
      line-height: 58px;
      border-bottom: none;
      border-radius: 0;
      transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
.sort {
  width: 70%;
  height: 32px;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  text-align: center;
  line-height: 32px;
  position: relative;
  li::before {
    display: block;
    content: "";
    width: 1px;
    height: 10px;
    background: #ccc;
    position: absolute;
    top: 12px;
  }
  li:first-child::before {
    background: #fff;
  }
  li {
    width: 100%;
    font-size: 14px;
    .onspan {
      border-bottom: 2px solid #000;
    }
    span:hover {
      cursor: pointer;
      border-bottom: 2px solid #000;
    }
  }
}
</style>
