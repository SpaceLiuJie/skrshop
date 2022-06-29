<template>
  <!-- 底部 -->
  <div class="footer">
    <!-- 底部导航栏 -->
    <div class="footerNav">
      <div class="footer-top">

        <span v-for="(item, index) in footer_list" :key="index">
          <p class=" footer_bar" type="flex" justify="space-around" align="middle" @click="footerNavList(index)">

            <a href="javascript:;">{{ item }}</a>
          </p>
        </span>

      </div>
    </div>
    <!--底部信息 -->
    <div class="footerMassage-Nav">
      <div class="footerMassage clearfix">
        <div class="footerMassage-left">
          <p>网站名称</p>
          <p>
            © 2009-2021
            Stride.fun 版权所有 ICP主体备案号： 苏ICP备2021007111号
          </p>
          <a href="javascript:;">
            <span>网站备案信息</span>
          </a>
          <p>
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010859"
              style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
              <img src="../../assets/images//beian.png" style="float:left;" />
              <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">苏公网安备
                32011402010859号</p>
            </a>
          </p>
        </div>
        <div class="footerMassage-right">
          <p>消费者损害赔偿保险</p>
          <p>
            客户在以现金支付安全交易时可以使用Wconcept订阅的
            <span>消费者损害赔偿保险服务。</span>
          </p>
          <p>赔偿对象：不送/退货，拒绝退款/商场破产</p>
          <a href="javascript:;">
            <span>检查服务订阅事实</span>
          </a>
        </div>
      </div>


    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      footer_list: [
        "关于我们",
        "咨询服务",
        "合租伙伴查询",
        "服务条款",
        "隐私政策",
        "服务中心",
        "招聘信息",
        "全球的"
      ],
      followRoutes: [
        // 改动 正确的
        "/about",
        "/advisory",
        "/partner",
        "/terms",
        "/privacy",
        "/serviceCenter",
        "/offers",
        "/global"
      ]
    }
  }, methods: {
    footerNavList(val) {
      this.$router.push(this.followRoutes[val]);
    }
  }
}



</script>
<style>
.footer {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 20px;
}

.footerNav {
  width: 100%;
  height: 60px;
  background-color: #848484;
}

.footer_bar {
  min-width: 110px;
  height: 60px;
  line-height: 60px;
  display: inline-block;

  position: relative;
}

.footer_bar:hover {
  background-color: #636262;
  cursor: pointer;
}

.footer-top {
  width: 80%;
  height: 60px;
  margin: 0 auto;
  min-width: 650px;
  align-items: center;
  font-size: 14px;
  color: #fff;
  display: flex;

}

.footer span {
  width: 80%;
  left: 50px
}

.footer_bar>a {
  color: #fff;
  text-decoration: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
}

.footerMassage-Nav {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding-top: 40px;
  margin-bottom: 20px;
}

.footerMassage {
  width: 80%;
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
  position: relative;
  height: auto;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  font-feature-settings: 'tnum';
  display: flex;

}

.footerMassage-left {
  position: relative;
  padding: 0 30px;
  display: block;
  box-sizing: border-box;
  width: 50%;
  float: left;
  min-height: 1px;
  margin: 0;
  min-width: 500px;
  position: relative;

}

.footerMassage-right {
  padding-left: 30px;
  display: block;
  box-sizing: border-box;
  width: 50%;
  float: left;
  position: relative;
  padding-right: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  font-feature-settings: 'tnum';
  min-width: 500px;
  min-height: 1px;
}

.clearfix::after {
  clear: both;
  content: '';
  display: block;
}
</style>