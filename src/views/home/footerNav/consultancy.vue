<template>
    <div class="advisory">
        <div class="title">
            <span id="title">咨询服务</span>
        </div>
        <div class="fromStep">
            <ul>
                <li class="step_li" v-for="(item, index) in adv_headText" :key="index">
                    <span class="step">{{ item.step }}</span>
                    <strong>
                        <img class="iconimg" src="../../../assets/images/footerNav/记事本.png"><br />
                        <span>{{ item.term }}</span>
                    </strong>
                    <p>{{ item.items }}</p>
                </li>
            </ul>
        </div>
        <div class="note">
            <h3>※申请店铺咨询时的注意事项</h3>
            <p>
                1.如果您申请商店咨询，我们将在内部审查后通知您进入商店的可能性和合同程序。
                <br />
                2.办理入住手续可能需要一段时间，因此请避免注册重复，并避免与MD联络以及通过客户中心查询可用性。
                <br />
                3. W.
                Concept基于真正的处理方式，只有设计和生产自己的品牌公司才可以进入商店。（不允许进入商店买卖品牌或处理假货）
                <br />
                4.必须指定负责人以促进产品管理（MD）和订单管理（交货/
                CS处理），如果不能这样做，则可能会拒绝接纳。
            </p>
        </div>
        <div class="finalform">
            <el-form ref="form" :model="form" label-width="130px">
                <div class="box">
                    <el-form-item label="查询分类：">
                        <el-select style="margin-left:50px;" v-model="form.region" placeholder="请选择查询类型">
                            <el-option label="Zoneone" value="shanghai"></el-option>
                            <el-option label="Zonetwo" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="类别分类：">
                        <el-select style="margin-left:50px;" v-model="form.region" placeholder="请选择查询类型">
                            <el-option label="Zoneone" value="shanghai"></el-option>
                            <el-option label="Zonetwo" value="beijing"></el-option>
                        </el-select>
                        <el-select style="margin-left:50px" v-model="form.region" placeholder="请选择查询类型">
                            <el-option label="Zoneone" value="shanghai"></el-option>
                            <el-option label="Zonetwo" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="公司名称：">
                        <el-input style="margin-left:50px;width: 700px;" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="品牌：">
                        <el-input style="margin-left:50px;width: 700px;" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="负责人：">
                        <el-input style="margin-left:50px;width:400px" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="电话号码：">
                        <el-select style="margin-left:50px" v-model="form.region" placeholder="02">
                            <el-option label="018" value="018"></el-option>
                        </el-select>
                        <el-input style="margin-left:10px;width:200px" v-model="form.name"></el-input>
                        <el-input style="margin-left:10px;width:200px" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="负责人手机号：">
                        <el-select style="margin-left:50px" v-model="form.region" placeholder="02">
                            <el-option label="018" value="018"></el-option>
                        </el-select>
                        <el-input style="margin-left:10px;width:200px" v-model="form.name"></el-input>
                        <el-input style="margin-left:10px;width:200px" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="联系电子邮件：">
                        <el-input style="margin-left:50px;width:200px" v-model="form.name"></el-input>@
                        <el-input style="width:200px" v-model="form.name"></el-input>
                        <el-select style="margin-left:10px" v-model="form.region" placeholder="02">
                            <el-option label="直接输入" value="018"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="网站地址：">
                        <span style="margin-left:50px">http://</span>
                        <el-input v-model="form.name" style="width:400px"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="公司地址：">
                        <el-input v-model="form.name" style="margin-left:50px;width:260px"></el-input>
                        <span class="mail" style="margin-left:50px">查询邮政编码</span><br />
                        <el-input v-model="form.name" style="margin-left:50px;margin-top:10px;width:300px"></el-input>
                        <el-input v-model="form.name" style="margin-left:50px;margin-top:10px;width:300px"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="关于我们：">
                        <el-input v-model="form.name" style="margin-left:50px;width:800px;"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="产品类别：">
                        <el-radio-group v-model="form.resource">
                            <el-radio style="margin-left:50px" label="国内产品经销"></el-radio>
                            <el-radio label="收入"></el-radio>
                            <el-radio label="自我生产"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="销售方式：">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox style="margin-left:50px" label="寄售"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="产品介绍：">
                        <el-input v-model="form.name" style="margin-left:50px;width:800px"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="领带店进入状态：">
                        <el-input style="margin-left:50px;width:600px" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="品牌介绍：">
                        <el-input v-model="form.name" style="margin-left:50px;width:600px"></el-input>
                        <el-upload style="margin-left:50px;width:200px" class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange"
                            :file-list="fileList">
                            <el-button size="small" type="primary">文件选择</el-button>
                        </el-upload>
                    </el-form-item>
                </div>
                <div class="box registered">
                    <h5 style="margin-left:50px">防止自动注册</h5>
                </div>
                <div class="boxdot">
                    <el-form-item>
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="同意收集和使用个人信息(必填)"></el-checkbox>
                            <button class="btn_micro" @click="showMask()">查看内容</button>
                        </el-checkbox-group>
                    </el-form-item>
                </div>
                <div class="application">
                    <button class="btn_cancel">取消</button>
                    <button class="btn_appli" @click="promptInf()">申请</button>
                </div>
            </el-form>
            <div class="mask" v-if="isShowMask">
                <div class="mask_box">
                    <div class="mBar">
                        <h2>收集和使用个人信息(必填)</h2>
                        <span @click="closeMask()">X</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            adv_headText: [
                {
                    step: "步骤01",
                    term: "填写合作伙伴/进入申请",
                    items: "请申请隶属关系/进入",
                },
                {
                    step: "步骤02",
                    term: "查看并与负责人联系",
                    items:
                        "在每个领域的负责人审核之后，如果商店合适，我们将通过电话或电子邮件与您联系",
                },
                {
                    step: "步骤03",
                    term: "条件咨询及合同签订",
                    items: "在讨论合伙的细节和条件后，订立合同",
                },
            ],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            fileList: [

            ],
            isShowMask: false,
        };
    },
    methods: {
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
        },
        // 点击关闭遮罩层
        closeMask() {
            this.isShowMask = false;
        },
        // 点击开启遮罩层
        showMask() {
            this.isShowMask = true;
        },
        promptInf() {
            this.$message.warning('请选择查询类型');
        }
    }
};
</script>

<style scoped>
* {
    cursor: pointer;
}

.title {
    width: 25%;
    padding-top: 20px;
    margin: 40px auto;
    text-align: center;
}

#title {
    color: rgba(0, 0, 0, 0.65);
    font-family: "ProximaNova-Thin";
    font-size: 44px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    margin: 60px 0 20px 0;
}

.boxdot {
    height: 50px;
    background-color: #f2f2f2;
}

.btn_micro {
    float: right;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 14px;
    margin-right: 20px;
}

.application {
    width: 500px;
    margin: 10px auto;
}

.btn_cancel {
    width: 200px;
    height: 50px;
    margin-left: 30px;
    background-color: #fff;
    border: 1px solid rgb(135, 133, 133);
}

.btn_appli {
    width: 200px;
    height: 50px;
    margin-left: 30px;
    color: #fff;
    background-color: rgb(0, 0, 0);
    border: 1px solid rgb(135, 133, 133);
}

.box {
    border-bottom: 1px solid #ded8d8;
}

.iconimg {
    width: 28px;
    height: 36px;
}

.fromStep {
    width: 80%;
    height: 184px;
    text-align: center;
    margin: 0px auto 20px;
}

.mail {
    display: inline-block;
    width: 200px;
    height: 37px;
    background-color: #7d7d7d;
    color: #fff;
    margin-left: 5px;
    text-align: center;
    border: 1px solid rgb(231, 226, 226);
    border-radius: 5px;
}

ul {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
}

.step_li {
    position: relative;
    height: 100%;
    top: -16px;
    left: -42px;
    flex: 1;
    outline: 1px solid #d9d9d9;
    padding: 0 9px;
}

.step {
    position: absolute;
    top: 5%;
    left: 5%;
    color: #a5a5a5;
    font-size: 14px;
}

strong {
    display: inline-block;
    margin: 40px 0 6px;
    font-size: 16px;
}

p {
    font-size: 14px;
    color: #666;
}

ul::after,
ul::before {
    position: absolute;
    top: 42%;
    display: inline-block;
    content: ">";
    width: 30px;
    height: 30px;
    line-height: 1;
    text-align: center;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    border-radius: 50%;
    font-size: 24px;
    color: #d9d9d9;
    z-index: 2;
}

ul::before {
    left: 30%;
    background-color: #fff;
}

ul::after {
    left: 62%;
}

.note {
    width: 80%;
    padding: 30px 42px;
    margin: 0 auto 50px;
    background-color: #eee;
    font-size: 14px;
    line-height: 24px;
}

h3 {
    padding-bottom: 15px;
}

.finalform {
    width: 85%;
    height: 1266px;
    margin: 0 auto;
    padding-top: 30px;
    border-top: 2px solid black;
    margin-bottom: 400px;
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
}

.mask_box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 50%;
    background-color: #fff;
    overflow: hidden;
    min-width: 480px;
    padding: 40px;
    border: 1px solid #000;
}

.mBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #000;
    padding-bottom: 27px;
}

h2 {
    font-size: 24px;
}
</style>