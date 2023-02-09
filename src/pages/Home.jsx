import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
export default function Home() {
  //const [isLoading, setLoading] = useState(true);
  const [dn, setdn] = useState(0);
  const [n, setn] = useState(0);
  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(0);
  var abcd = `本项目总价（大写）：${dn}（￥${n}元）人民币（含税价）。双方约定甲方金额为${n1}元，乙方分成金额为${n2}元，税率6%。本合同金额包含所有税费(包括本项目服务所需的所有一切税金和费用)。`
  // var addres =
  //   `甲方信息如下：^p 开户行：中国工商银行宁海县支行^p银行地址：宁海县桃源南路142号
  //   户名：中国电信股份有限公司宁海分公司
  //   账号：3901330009000151508
  //   统一社会信用代码：9133022674499735X4
  //   地址：宁海县跃龙街道中山中路103号
  //   电话：65578035
  //   开户行：农业银行桥头胡支行 
  //   户名：宁海县人民政府桥头胡街道办事处 
  //   账号：39754001040007706
  //   统一社会信用代码：
  //   地址：11330226756263142L 
  //   乙方信息如下：
  //   乙方：天翼云科技有限公司浙江分公司
  //   开户银行：[ 交通银行北京市分行营业部 ]
  //   银行地址：[ 北京市西城区金融大街33号 ]
  //   户名：[ 天翼云科技有限公司浙江分公司  ]
  //   账号：[990204011701015101]
  //   统一社会信用代码：[ 91330109MA7D450L9Y ]
  //   地址：[ 浙江省杭州市萧山区经济技术开发区义桥区块（河口）8号1号楼101-15室 ]
  // `
  //var a = useRef()
  useEffect(() => {

    //r = produceNum();
    //setLoading(false)

    document.getElementById("write").value = abcd
    //console.log(abcd)
  }, [abcd])

  // function produceNum() {
  //   let arr = [];
  //   for (let i = 0; i < data.length; i++) {
  //     let num = Math.floor((Math.random() * (data.length - 0)) + 0);
  //     if (arr.indexOf(num) == -1) { //不存在推入
  //       arr.push(num);
  //     } else {
  //       i--; //存在了使i-1增加一次循环次数
  //     }
  //   }
  //   return arr;

  // }

  // const handleChange = () => {
  //   // r = produceNum();

  //   window.location.reload();
  // }
  const handleReset = () => {
    document.getElementById("inputnum").value = ''
  }

  function cp(a) {
    //复制清楚样式
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', a)
    input.select();
    if (document.execCommand('copy')) {
      console.log(document.execCommand('copy'));
    }
    document.body.removeChild(input);
  }

  const handleCopy = () => {
    var str = document.getElementById("write").value
    //copy(str);
    cp(str)
    var a = window.open('page.html', 'name=sfsff', 'height=100, width=400, top=500, left=500, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
    a.document.write("<h3>复制成功</h3>");
    setTimeout(() => { a.close() }, 1000)
  }
  // const handleCopy2 = () => {
  //   var str = document.getElementById("write2").value
  //   //copy(str);
  //   copy(str)
  //   var a = window.open('page.html', 'name=sfsff', 'height=100, width=400, top=500, left=500, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
  //   a.document.write("<h3>复制成功</h3>");
  //   setTimeout(() => { a.close() }, 1000)
  // }

  const handleInput = () => {
    var num = document.getElementById("inputnum").value
    var number = parseFloat(num)
    setn(number.toFixed(2))
    setn1((number * 0.06).toFixed(2))
    setn2((number * 0.94).toFixed(2))
    setdn(toChies(Number(number.toFixed(2))))
    //setabc(abcd)
    //a.current = abcd

    //console.log(a.current)
  }
  // 数字转大写
  function toChies(amount) {
    //形参
    // 汉字的数字
    const cnNums = [
      "零",
      "壹",
      "贰",
      "叁",
      "肆",
      "伍",
      "陆",
      "柒",
      "捌",
      "玖",
    ];
    // 基本单位
    const cnIntRadice = ["", "拾", "佰", "仟"];
    // 对应整数部分扩展单位
    const cnIntUnits = ["", "万", "亿", "兆"];
    // 对应小数部分单位
    const cnDecUnits = ["角", "分"];
    // 整数金额时后面跟的字符
    const cnInteger = "整";
    // 整型完以后的单位
    const cnIntLast = "元";
    // 最大处理的数字
    const maxNum = 9999999999999999.99;
    // 金额整数部分
    let integerNum;
    // 金额小数部分
    let decimalNum;
    // 输出的中文金额字符串
    let chineseStr = "";
    // 分离金额后用的数组，预定义
    let parts;
    if (amount === "") {
      return "";
    }
    amount = parseFloat(amount);
    if (amount >= maxNum) {
      // 超出最大处理数字
      return "";
    }
    if (amount === 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    // 转换为字符串
    amount = amount.toString();
    if (amount.indexOf(".") === -1) {
      integerNum = amount;

      decimalNum = "";
    } else {
      parts = amount.split(".");
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    // 获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
      let zeroCount = 0;
      const IntLen = integerNum.length;
      for (let i = 0; i < IntLen; i++) {
        const n = integerNum.substr(i, 1);
        const p = IntLen - i - 1;
        const q = p / 4;
        const m = p % 4;
        if (n === "0") {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          // 归零
          zeroCount = 0;
          //alert(cnNums[parseInt(n)])
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m === 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    // 小数部分
    if (decimalNum !== "") {
      const decLen = decimalNum.length;
      for (let i = 0; i < decLen; i++) {
        const n = decimalNum.substr(i, 1);
        if (n !== "0") {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (chineseStr === "") {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum === "") {
      chineseStr += cnInteger;
    }
    return chineseStr;//转好的大写文字


  }



  //   return (
  //     <HomeStyled><div></div>
  //     </HomeStyled>
  //   )

  // }

  return (
    <HomeStyled>
      <div className='header'>
        <input id='inputnum' autocomplete='off' type="number" />
        <div className='change' onClick={() => handleInput()}><h2>确认</h2></div>
        <div className='change' onClick={() => handleReset()}><h2>复位</h2></div>
      </div>
      {/* <div><h1>结果</h1></div> */}
      <div className='wrap'>

        <textarea
          id='write' className='inputs' type="text" rows="4" cols="10">

        </textarea>
      </div>
      <div className='footer'>
        {/* <div className='change' onClick={() => handleChange()}><h1>换一个</h1></div> */}
        <div className='copy' onClick={() => handleCopy()}><h1>复制</h1></div>
      </div>
      {/* <div className='wrap2'>

        <textarea defaultValue={addres}
          id='write2' className='inputs' type="text" rows="4" cols="10">

        </textarea>

      </div>
      <div className='footer'>
        <div className='copy' onClick={() => handleCopy2()}><h1>复制</h1></div>
      </div> */}
    </HomeStyled>
  )
}
const HomeStyled = styled.div`
 position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    /* background-color:red; */
    padding-top:12vh;
    height:100vh;
    .header{
      width:88%;
      display:flex;
      align-items:center;
      justify-content: space-start;
      margin-bottom:1.5rem;
    }
    #inputnum{
      height:1.5rem;
      font-size:1rem;
    }
    .wrap{
      display:flex;
      align-items:center;
      justify-content: space-start;
      margin:1vh 0 1vh;
      .inputs{
        font-size:1.2rem;
          width:100%;
          height:50vh;
      }
    }
    .wrap2{
      display:flex;
      align-items:center;
      justify-content: space-start;
      margin:3vh 0 1vh;
      .inputs{
        font-size:1rem;
          width:100%;
          height:50vh;
      }
    }
    .footer{
      display:flex;
      align-items:center;
      justify-content: space-start;
      .copy{
      width:20%;
      line-height:2rem;
      font-size:1.3rem;
      border:1px solid red;
      &:hover{
        cursor:pointer;
        background-color:#ccc;
      }
    }
    }
    .change{
        color:blue;
        height:1.2rem;
        line-height:1.2rem;
      font-size:1.2rem; 
      padding:0.1rem;
      margin-left:0.5rem;
      border:1px solid #333;
      &:hover{
        cursor:pointer;
        background-color:#ccc;
      }
      }
      #write{
        height:10rem;
        width:50%;
      }
      #write2{
        height:20rem;
        width:50%;
      }
      input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }
`