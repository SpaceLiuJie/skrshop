<template>
    <div class="privacy">
        <div class="title">
            <span id="title">隐私政策</span>
        </div>
        <div class="main_text">
            <p>
                Double U Concept Korea
                Co.，Ltd.（以下简称``公司''）重视用户信息并遵守相关法律法规。<br />
                因此，公司已根据《信息和通信网络使用促进和信息保护法》和《个人信息保护法》等相关法律制定了个人信息处理政策，并在公司网站上进行了披露，以便用户可以随时轻松浏览。<br />
                本政策可能会根据公司政策不时更改，如果重要内容发生更改，我们将通过网站通知用户，以便用户可以检查更改。
            </p>
        </div>
        <div class="tbody">
            <div class="tbodyContent">
                <p>第一条总则
                    <br />第二条个人信息的收集和使用
                    <br />第三条向第三方提供个人信息
                    <br />第四条链接网站
                    <br />第5条个人信息的处理委托
                </p>
            </div>
            <div class="tbodyContent">
                <p>第一条总则
                    <br />第二条个人信息的收集和使用
                    <br />第三条向第三方提供个人信息
                    <br />第四条链接网站
                    <br />第5条个人信息的处理委托
                </p>
            </div>
            <div class="contentright">
                <p>第一条总则
                    <br />第二条个人信息的收集和使用
                    <br />第三条向第三方提供个人信息
                    <br />第四条链接网站
                    <br />第5条个人信息的处理委托
                </p>
            </div>
        </div>
        <div class="first_gen">
            <h3>第一条总则</h3>
            <p>
                1.“个人信息”是指有关在世个人的信息，包括可用于通过姓名，移动电话号码等来识别个人的信息（包括即使特定个人无法将其与其他信息轻松组合的信息）仅由信息识别）说。
                <br />
                2.公司遵守相关法律法规，安全处理有价值用户的个人信息。通过个人信息处理政策，公司告知使用用户提供的个人信息的目的和方法，以及正在采取哪些措施来保护个人信息。
                <br />
                3.公司在网站的第一个屏幕上披露隐私政策，以便用户可以随时轻松查看它。
                <br />
                4.为了不断改进个人信息处理策略，建立了修改个人信息处理策略的必要步骤，并且在进行修改时，通过版本管理，用户可以轻松地查看修改后的事项。
            </p>
        </div>
        <div class="first_gen">
            <h3>第二条总则</h3>
            <p>
                1.“个人信息”是指有关在世个人的信息，包括可用于通过姓名，移动电话号码等来识别个人的信息（包括即使特定个人无法将其与其他信息轻松组合的信息）仅由信息识别）说。
            </p>
        </div>
        <el-table :data="tableData" height="250" border style="width: 100%">
            <el-table-column prop="name" label="Name" width="249">
            </el-table-column>
            <el-table-column prop="collect" label="收集目的" width="249">
            </el-table-column>
            <el-table-column prop="allocation" label="分配" width="249">
            </el-table-column>
            <el-table-column prop="collectItem" label="收集物品">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'Privacy',
    data() {
        return {
            tableData: [],
        }
    }
};
</script>

<style lang="less" scoped>
* {
    cursor: pointer;
}

.privacy {
    width: 80%;
    margin: 0 auto;
}

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

.main_text>p {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
}

.tbody {
    width: 1010px;
    height: 145px;
    margin: 0 auto;
    background-color: #f8f8f8;
}

.tbodyContent {
    width: 310px;
    float: left;
    margin: 15px 0px 22.5px 22.5px;
    border-right: 1px solid rgb(226, 218, 218);
}

.contentright {
    width: 310px;
    float: left;
    margin: 15px 0px 22.5px 22.5px;
}

.contentright>p {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
}

.tbodyContent>p {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
}

.first_gen>p {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
}
</style>