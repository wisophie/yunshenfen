import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import data from '../datayj';
import copy from 'copy-to-clipboard';
export default function Yanji() {
  const [isLoading, setLoading] = useState(true);
  const [p1, setp1] = useState("");
  const [p2, setp2] = useState("");
  const [w1, setw1] = useState("");
  const [w2, setw2] = useState("");
  const [f, setf] = useState(0);
  var r = [];

  useEffect(() => {
    r = produceNum();
    setLoading(false)
    setp1(data[r[0]].cause1)
    setp2(data[r[1]].cause2)
    setw1(data[r[2]].way1)
    setw2(data[r[3]].way2)
    setf(data[r[0]].footer)
  }, [])

  function produceNum() {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      let num = Math.floor((Math.random() * (data.length - 0)) + 0);
      if (arr.indexOf(num) == -1) { //不存在推入
        arr.push(num);
      } else {
        i--; //存在了使i-1增加一次循环次数
      }
    }
    return arr;

  }

  const handleChange = () => {
    // r = produceNum();
    // setp1(data[r[0]].cause1)
    // setp2(data[r[1]].cause2)
    // console.log(p1)
    window.location.reload();
  }
  const handleCopy = () => {
    var str = document.getElementById("write")
    copy(str.defaultValue);
    alert("复制成功")
  }



  if (isLoading) {

    return (
      <YanjieStyled><div></div>
      </YanjieStyled>
    )

  }

  return (
    <YanjieStyled>
      <div><h1>沿街复盘</h1></div>
      <div className='wrap'>
        {/* <label for="story">大佳何复盘:</label> */}
        <textarea defaultValue={`大佳何沿街复盘：存在问题：1、${p1}2、${p2}
提升举措：1、${w1}2、${w2}${f}`}
          id='write' className='inputs' type="text" rows="5" cols="33">

        </textarea>
      </div>
      <div className='footer'>
        <div className='change' onClick={() => handleChange()}><h1>换一个</h1></div>
        <div className='copy' onClick={() => handleCopy()}><h1>复制</h1></div>
      </div></YanjieStyled>
  )
}
const YanjieStyled = styled.div`
 position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    /* background-color:red; */
    padding-top:12vh;
    height:100vh;
    .wrap{
      margin:1vh 0 1vh;
      .inputs{
        font-size:1.2rem;
          width:100%;
          height:50vh;
      }
    }
    .footer{
      display:flex;
      align-items:center;
      justify-content: space-around;
      .change{
        color:blue;
        height:1.2rem;
        line-height:1.2rem;
      font-size:1.2rem; 
      padding:0.1rem;
      border:1px solid #ccc;
      &:hover{
        cursor:pointer;
      }
      }
      .copy{
      width:20%;
      line-height:2rem;
      font-size:1.3rem;
      border:1px solid red;
      &:hover{
        cursor:pointer;
      }
    }
    }
`