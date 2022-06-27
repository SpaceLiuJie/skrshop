<template>
  <div id="QA">
    <div class="consultation">
      <button class="shop-consultation">商品咨询</button>
    </div>
    <div class="content">
      <ul>
        <li style= "list-style-type: none;" v-for="(item,index) in 5" :key="index">
          <span class="answer">完整回答</span>
          <span class="question">{{index}}</span>
          <span class="username" >chu****</span>
          <span class="time">2020.06.01</span>
        </li>
      </ul>
    </div>
    <div class="page">
      <el-pagination  layout="prev, pager, next" :total="50"></el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style>

*{
 
  box-sizing: border-box;
}

#QA{
  
  width: 1240px;
  margin-top: 60px;
  margin-bottom :90px;
}
.consultation{
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
}
.shop-consultation{
  float: right;
  width: 180px;
  height: 50px;
  background-color: #000;
  color: #fff;
}

#QA>.content{
  width: 1240px;
  height: 410px;
  border-bottom: 2px solid #000;
  border-top: 2px solid #000;
}
.content>ul{
  margin: 0;
  padding: 0;
}
.content>ul>li{

  width: 100%;
   height: 68px;
   line-height: 68px;
     border-bottom: 1px solid #D9D9D9;

}
 .content>span{
  display: inline-block;
  height: 25px;
  line-height: 25px;  

}
.answer{
  float: left;
  margin-top: 25px;
        margin-left: 20px;
          width: 55px;
        line-height:   25px;
          color: #fff;
          background-color: #000;
          font-size: 12px;
          text-align: center ;
}
 .question{
  float: left;
    width: 800px;
          padding-left: 20px;
          text-align: start ;
}  .username{
  float: left;
     width: 155px;
          text-align: start;   
    }
     
    .time{
      float: left;
width: 155px;
          text-align: end ; 
       }
            .page{
    width: 100%;
    height: 50px;
    margin-top: 50px;
    position: relative;
            }

</style>