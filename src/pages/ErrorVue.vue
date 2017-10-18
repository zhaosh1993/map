<template>
  <div class="listerror">
    <div class="header">
        <span class="close">关闭</span>
        <span ref="sure" class="submit">确定</span>
        <h3>订单异常</h3>
    </div>
    <div class="tips">请选择异常原因</div>
    <div class="reasons">
        <ul>
            <li @click="choose($event)"> <input type="checkbox" ref="input1"/>
                <p style="text-align:left">收货人联系电话打不通（信号不好、 停机、关机等）</p>
            </li>
            <li @click="choose($event)"> <input type="checkbox" ref="input2"/>
                <p style="text-align:left">收货人拒收（不接电话、不回短信等）</p>
            </li>
            <li @click="choose($event)"> <input type="checkbox" ref="input3"/>
                <p style="text-align:left">订单商品破损</p>
            </li>
            <li @click="choose($event)"> <input type="checkbox" ref="input4"/>
                <p style="text-align:left">换个时间配送</p>
            </li>
            <li @click="choose($event)"> <input type="checkbox" ref="input5"/>
                <p style="text-align:left">订单商品错发、漏发</p>
            </li>
            <li @click="chooseother($event)"> <input type="checkbox" ref="input6"/>
                <p style="text-align:left">其它原因</p>
            </li>
        </ul>
        <textarea ref="textarea" class="other" rows="" cols="" placeholder="请输入原因"></textarea>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        
        
      }
    },
    methods:{
      choose(event){
        this.$refs.input1.checked=false;
        this.$refs.input2.checked=false;
        this.$refs.input3.checked=false;
        this.$refs.input4.checked=false;
        this.$refs.input5.checked=false;
        this.$refs.input6.checked=false;
        this.$refs.textarea.style.display="none";
        this.$refs.sure.style.color="red";
        event.currentTarget.children[0].checked=true;
      },
      chooseother(event){
        this.$refs.input1.checked=false;
        this.$refs.input2.checked=false;
        this.$refs.input3.checked=false;
        this.$refs.input4.checked=false;
        this.$refs.input5.checked=false;
        this.$refs.input6.checked=false;
        this.$refs.textarea.style.display="block";
        this.$refs.sure.style.color="red";
        event.currentTarget.children[0].checked=true;
      }
    }

  }
  
</script>
<style scoped>
li{
  list-style:none;
}
.listerror{
  margin-top:-10px;
}
.header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
}
.header h3 {
  width: 100%;
  text-align: center;
  font-size: 20px;
  height:50px;
  line-height:50px;
}
.header span {
  font-size: 22px;
  margin-top: 10px;
}
.header .close {
  float: left;
  color: red;
  margin-left: 10px;
}
.header .submit {
  float: right;
  color: #999;
  margin-right: 10px;
}
.tips {
  color: #999;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  background-color: #eee;
}
.reasons li {
  height: 59px;
  line-height: 59px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.reasons li input {
  float: left;
  margin-top: 25px;
  margin-left: 10px;
  outline-style: none;
}
.reasons li p {
  margin-left: 50px;
}
textarea {
  display: none;
  width: 90%;
  height: 90px;
  margin: 10px auto;
  border: 1px solid #ccc;
}

</style>