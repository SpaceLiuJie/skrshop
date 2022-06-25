<template>
  <div class="titleWarp">
    <h2 class="sub_title">
      <font style="vertical-align: inherit">
        <font style="vertical-align: inherit">
            <slot></slot>
        </font>
      </font>
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.titleWarp {
    padding-top: 5.3vw;
    position: relative;
    height: 13vw;
    min-width: 1240px;
}
.sub_title{
    font-family: "ProximaNova-Thin", "yg740";
    font-size: 2.9vw;
    color: #000;
    text-align: center;
    line-height: 100%;
    text-transform: uppercase;
    font-weight: 500;
    user-select: none;
}
</style>