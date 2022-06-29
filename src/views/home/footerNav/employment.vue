<template>
    <div class="employment">
        <div class="title">
            <span id="title">招聘信息</span>
        </div>
        <div class="img">
            <img src="../../../assets/images/footerNav/img-recruit.jpg">
        </div>
        <div class="off_text">
            <span>招聘程序</span>
            <p>每次筛选的成功申请者公告均单独进行。<br />
                如果申请表中有任何虚假信息，入场可能会被取消。</p>
        </div>
        <el-steps :active="1" style="width:1010px;margin: 0 auto;">
            <el-step title="收到文件"></el-step>
            <el-step title="面试"></el-step>
            <el-step title="第二次面试"></el-step>
            <el-step title="加入"></el-step>
        </el-steps>
        <div class="interview">
            <div class="contentone">
                <p>薪资条件<br />
                    根据公司章程-最终面试后的决定</p>
            </div>
            <div class="contentone">
                <p>工作地点<br />
                    首尔特别市江南区德黑兰路14街16号5楼（线馆驿三洞）</p>
            </div>
        </div>
        <div class="off_text">
            <span>应用</span>
        </div>
        <div class="finalform">
            <el-form ref="form" :model="form" label-width="130px">
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="支援区域：">
                        <el-radio-group v-model="form.resourceone">
                            <el-radio style="margin-left:50px" label="产品计划(w概念频道MD)"></el-radio>
                            <el-radio label="营养"></el-radio>
                            <el-radio label="手术"></el-radio>
                            <el-radio label="设计"></el-radio>
                            <el-radio label="产品开发(前排)"></el-radio>
                            <el-radio label="其它"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="申请人姓名：">
                        <el-input style="margin-left:50px;width: 700px;" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="出生日期：">
                        <el-input style="margin-left:50px;width: 700px;" placeholder="2022/6/29" v-model="form.name">
                        </el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="性别：">
                        <el-radio-group v-model="form.resourcetwo">
                            <el-radio style="margin-left:50px" label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="电子邮件：">
                        <el-input style="margin-left:50px;width:200px" v-model="form.name"></el-input>@
                        <el-input style="width:200px" v-model="form.name"></el-input>
                        <el-select style="margin-left:10px" v-model="form.region" placeholder="02">
                            <el-option label="直接输入" value="018"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="手机号码：">
                        <el-select style="margin-left:50px" v-model="form.region" placeholder="021">
                            <el-option label="018" value="018"></el-option>
                        </el-select>
                        <el-input style="margin-left:10px;width:200px" v-model="form.name"></el-input>
                        <el-input style="margin-left:10px;width:200px" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="电话号码：">
                        <el-select style="margin-left:50px" v-model="form.region" placeholder="021">
                            <el-option label="018" value="018"></el-option>
                        </el-select>
                        <el-input style="margin-left:10px;width:200px" v-model="form.name"></el-input>
                        <el-input style="margin-left:10px;width:200px" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="期末教育：">
                        <el-select style="margin-left:50px;" v-model="form.region" placeholder="选择学术背景">
                            <el-option label="选择学术背景" value="shanghai"></el-option>
                        </el-select>
                        <el-radio-group v-model="form.resourcethree">
                            <el-radio style="margin-left:50px" label="已毕业"></el-radio>
                            <el-radio label="参加"></el-radio>
                            <el-radio label="休假"></el-radio>
                            <el-radio label="辍学"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="学校名：">
                        <el-input style="margin-left:50px;width: 700px;" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="主要的：">
                        <el-input style="margin-left:50px;width: 700px;" v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="box">
                    <el-form-item style="padding-top:20px;" label="附上简历：">
                        <el-input v-model="form.name" style="margin-left:50px;width:600px"></el-input>
                        <el-upload style="margin-left:50px;width:200px" class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange"
                            :file-list="fileList">
                            <el-button size="small" type="primary">文件选择</el-button>
                        </el-upload>
                    </el-form-item>
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
    name: 'Employment',
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resourceone: '',
                resourcetwo: '',
                resourcethree: '',
                desc: ''
            },
            fileList: [

            ],
            isShowMask: false,
        }
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

<style lang="less" scoped>
.title {
    width: 25%;
    padding-top: 20px;
    margin: 20px auto;
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

.interview {
    width: 1010px;
    height: 60px;
    margin: 10px auto;
}

.contentone {
    width: 400px;
    height: 60px;
    margin-left: 60px;
    padding-left: 25px;
    text-align: center;
    border-left: 1px solid black;
    float: left;
}

.img {
    width: 80%;
    margin: 40px auto;
    text-align: center;
}

img {
    width: 1010px;
    margin: 0 auto;
}

.off_text {
    width: 1010px;
    margin: 30px auto;
    border: 1px solid transparent;
    font-size: 16px;
    text-align: left;

    span {
        font-weight: 700;
        font-size: 24px;
    }
}

.boxdot {
    height: 50px;
    background-color: #f2f2f2;
}

.box {
    border-bottom: 1px solid #ded8d8;
}

.finalform {
    width: 85%;
    height: 1266px;
    margin: 0px auto;
    padding-top: 30px;
    border-top: 2px solid black;
    margin-top: 20px;
}

.btn_micro {
    float: right;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 14px;
    margin-right: 20px;
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
</style>
