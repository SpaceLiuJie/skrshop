<template>
    <div class="title">
        <div class="nav">
            <!-- <h3>title </h3> -->
            <div class="nacs">
                <img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABBAKwDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAcICQUGBP/EADgQAAEDAwMDAgIHBgcAAAAAAAEAAgMEBQYHERIIEyEJMRRBFiIjMjNCURcZNXFzsiRDUldhpdT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFyMsy6yYHjtdfsju1HZLLRM7lTX18zYoYm+3lzjt5JAA+ZIA8lddZ8es3iGYZHoRi9wscFVWY3aLq+pvcNKHOEYMXGGeRo/Iw9xpcfAMjf1QTdRepT013C+C0xao0TaoyOi7k9urYqfdu+5774RFx8eHctj42J3CsfbLnR3q301fb6uCvoamNssFVTSNkilYRuHNc0kOBHkELFnD3dBuqGnDMfqaPJNJ82mphTx5Fd5auuZHVEACQiKR0Lo+TvPKOEbNd5j8FaZdD2jsWh2gVux2g1GptT7C+qmrbTeqOnbDAymk4/Ys4zShzRIJXcg785Gw28hPyIiCL5+pnTam1xp9HpMk46jVDDJHZvgak8mindUb97t9ofZNc7y/wCW3v4XY1g1twfQPEzkufZDT47Zu82nbNMx8r5JHezGRxtc952BJDWnYAk7AErMnXnVbHtD/V8bnOU1L6WxWa1umndFGXvcXWOVkcbWj3c972MG+w3cNyBuV4nTG61Pqq9YTf2iX1lhw6y00lbQYlDUObJJStc0GCF2wBe48XSyeHloPEANHbDWnRzW/DdfcVdkuC3OovNiEzqdtdLbaqjZI9v3u3342F4B8FzdwCCN9wQuPrl1PaZ9NkVml1GyX6OsvDpm0J+AqarvGLh3PwI38du4z722+/jfYqQsex62YlYqCy2Wgp7XaaCFtPS0VJGI4oY2jZrGtHgAALMf1yv4To3/AF7t/bRoLP8A70fpi/3N/wCgun/mVg9OtTsU1cxmPIcMv9DklmkkdEKyglEjRI37zHfNrhuDxIB2IPsQsxb070zG2euNK2qfU9h/aFF9Iu/y4nbt937Plv7c/q77b+N10/RHt18jl1Yrom1TcMlfRwwOnP1H1TTKTxHtzEbm89v9TN/lsGpyIiAiIgIiICIiAiIgKnXqFdV+pnSXTYZfsXxmw5Bhlznko7vJdKed8sMw4uZG17JWtZ3I+7sXNd5jO49gbirl5Pi1nzWwVtjyC10d6s1azt1NBXwNmhmbuDs5jgQfIB/mAUGYOsOufQHq7p7X3q4Y22hyuemfOy32OyVFuuQqSH7B0sLG0z3lziS6R7mnxvvxAHufRQiyNmimcPr/AIkYy+9Rm1CYHt93tf4kx7/L8EHbxuD891P0fppdNUV5N0Gl1Iakymbg65VzoOR+XZM/b4+fu8dh+isTjmN2nD7HRWWxWyks1oooxFTUFBA2GGFg/KxjQAB/IIK09aHWpb+lbKdLLVJ2pTf7w193a4cjT2pv1JZQPcO5yMc39e08K0sUrJ4mSRvbJG8BzXtO4cD7EH5hRlqZ0w6V6yZBFfM2we15LdoqdtKyrr2Oe9kTXOcGDz4AL3Hb9XFSJZrRR4/aKG12+BtLQUMDKangaSRHGxoaxo387AADygyQ6kNGrL1AerrSYHkUtRFZLnBTSVfwruMj2QWs1BjDvy8+zxJHkBxI87Lreoz0+VHSfqTgWv2kNBDjtDb5qehq6Shi4wUlREzhA4sH+XNE0xPHgEt87mUrRWfpm02qdcafWGTG+Wo1Owxx3n46pHFpp3U+3Z7naP2TnN8s+e/v5XrtQ9Pcd1Xwu64lllsjvOPXWLs1lFK5zBI0ODh9ZhDmkOa0hzSCCAQQQg8309a32PqK0ix/O7C4NprlD9vSl276Sob4lhd/y1wI3+Y2PsQs/PXK/hOjf9e7f20av9oh046e9ONquds07sUuP2+5TNqammNyqqqN0rW8Q8CeV/AkbAlu2/Fu+/EbfPrl0w6Z9ScVmi1Gxr6RMs7pnUI+PqaXsmXh3PwJGct+2z72+23jbcoKLdcXpZ4bYtLarMtFLJPZ7xYInVVbYvi5qyO4U7fL3M773uErB9biDs5rSOPLbefPTT6o7Br9ou2xw2m0YxlOMcae4Wez0sdJTSRu3LKqGFgDWNeeQc1o2a8HwA5u9wFDGmvRzpBo9qLWZ1hmIDHsmrO+J6ikuVZ2XtldykZ8OZjCGb7ENDOLdm8QNhsEzoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP//Z"
                    alt="">
            </div>
            <div class="ipt">
                <input type="text" placeholder="潮流,从搜索开始">
                <button>搜索</button>
            </div>

            <div class="registerDiv">
                <sapn class="register">注册</sapn>
            </div>
            <div class="loginDiv">
                <sapn class="login">登录</sapn>
            </div>
            <div class="shopCarDiv">
                <sapn class="shopCar">购物车</sapn>
            </div>
        </div>
        <div class="contentNav" :class="{'fix-nav':navBarFixed}">
            <div class="nacs">
                <img src="data:image/png;base64,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"
                    alt="">
            </div>
            <div class="footwear">鞋类</div>
            <div class="costume">服饰</div>
            <div class="parts">配件</div>
            <div class="children"><span>儿童专区</span></div>
            <div class="PopDiv"><span>POP</span></div>
            <div class="exclusiveDiv"><span>EXCLUSIVE</span></div>
            <div class="eeventDiv"><span>EEVENT</span></div>
            <div class="bestDiv"><span>BEST</span></div>
            <div class="contentNav_right">
                <div class="registerDiv">
                    <sapn class="register">注册</sapn>
                </div>
                <div class="loginDiv">
                    <sapn class="login">登录</sapn>
                </div>
                <div class="shopCarDiv">
                    <sapn class="shopCar">购物车</sapn>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'title',
    data() {
        return {
            navBarFixed:false,
        }
    },
    methods: {
        watchScroll() {
            // 滚动的距离
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;

            // 容器的高度
            var offsetTop = document.querySelector(".contentNav").offsetHeight;

            console.log("scrollTop=>", scrollTop, " offsetTop=>", offsetTop);

            //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
            if (scrollTop > offsetTop) {
                this.navBarFixed = true;
            } else {
                this.navBarFixed = false;
            }

        },
        mounted() {
            window.addEventListener('scroll',this.watchScroll)
        },
        destroyed() {
          // 移除事件监听
          window.removeEventListener("scroll", this.watchScroll);
        },

    }
}
</script>
<style  scoped >
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

.title {
    width: 100%;
}

.nav {
    width: 1670px;
    /* min-width: 800px; */
    margin: 0 auto;
    border: 1px solid #333;
}

.nacs {
    width: 172px;
    height: 65px;
    float: left;
    clear: both;
}

.nav .nacs>img {
    width: 172px;
    height: 60px;
}

.ipt {
    border-bottom: 2px solid #333;
    width: 387px;
    top: 10px;
    float: left;
    margin-left: 325px;
    margin-top: 12px;

}

.ipt input {
    border: none;
    width: 313px;
    height: 32px;
    margin: auto 10px;

}

.ipt input:active {
    border: 0px solid #fff;
}

.ipt button {
    height: 33px;
    width: 50px;
}

.registerDiv {
    float: left;
    margin-left: 350px;
    cursor: pointer;
    line-height: 40px;
    margin-top: 10px;
}

.loginDiv {
    float: left;
    margin-left: 15px;
    line-height: 40px;
    cursor: pointer;
    margin-top: 10px;
}

.shopCar {
    line-height: 60px;
    margin-left: 15px;
    cursor: pointer;
}

.contentNav {
    width: 100%;
    background-color: #333;
    height: 60px;
    color: #fff;
}

.contentNav .nacs>img {
    width: 172px;
    height: 55px;
}

.contentNav .footwear {
    float: left;
    line-height: 55px;
    margin-left: 250px;
    font-weight: 900;

}

.contentNav .costume {
    float: left;
    line-height: 55px;
    margin-left: 30px;
    font-weight: 900;

}

.contentNav .parts {
    float: left;
    line-height: 55px;
    margin-left: 30px;
    font-weight: 900;

}

.contentNav .children {
    float: left;
    line-height: 55px;
    margin-left: 30px;
    font-weight: 900;

}

.contentNav .PopDiv {
    float: left;
    line-height: 55px;
    margin-left: 50px;
    font-weight: 900;
}

.contentNav .exclusiveDiv {
    float: left;
    line-height: 55px;
    margin-left: 30px;
    font-weight: 900;

}

.contentNav .eeventDiv {
    float: left;
    line-height: 55px;
    margin-left: 30px;
    font-weight: 900;

}

.contentNav .bestDiv {
    float: left;
    line-height: 55px;
    margin-left: 30px;
    font-weight: 900;
}

.contentNav_right .registerDiv {
    float: left;
    margin-left: 250px;
    cursor: pointer;
    line-height: 40px;
    margin-top: 10px;
}

.contentNav_right .loginDiv {
    float: left;
    margin-left: 15px;
    line-height: 40px;
    cursor: pointer;
    margin-top: 10px;
}

.contentNav_right .shopCar {
    line-height: 67px;
    margin-left: 15px;
    cursor: pointer;
}
.fix-nav {
        position: fixed;
        top: 0;
        z-index: 999;
      }

/* .contentNav_right .shopCarDiv {

} */
</style>>