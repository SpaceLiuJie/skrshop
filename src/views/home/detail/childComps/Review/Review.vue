<template>
  <div id="review">
    <h4>产品满意度</h4>
    <div class="satisfaction">
      <div class="content">
        <p>这是购买者对产品的评价。</p>
        <el-rate v-model="value" disabled    allow-half text-color="#ff9900" >/5</el-rate>
        <span class="same">4.2</span>
        <span class="same totalRate">/ 5</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   data() {
      return {
        value: 4.2
      }
    }
};
</script>
  <style>
#review {
  margin-top: 55px;
  width: 1240px;
}
#review > h4 {
  font-size: 18px;
  margin: 0 0 8px;
}

.satisfaction {
  height: 365px;
}

.content > p {
  font-size: 14px;
  margin: 0 0 34px;
}
.same {
  margin-left: 10px;
  font-size: 32px;
}
.totalRate {
  color: #dfdfdf;
}
</style>