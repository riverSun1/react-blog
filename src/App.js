import './App.css';
import { useState } from 'react';

function App() {
  {/*let post = 'title2' // 대충 서버에서 가져온 실제 데이터*/}
  let [글제목, 글제목변경] = useState(['3월','4월','5월']);
  {/*let [글제목, a] = useState('3월');*/}
  
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  [1, 2, 3].map(function(a){
      return '1234567'
  })

  return (
    <div className="App">


      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      {/*<h5 style = { {color:'#01d1d2', fontSize : '20px'} }>{post}</h5>*/}
     
      {/*
      <button onClick={ ()=>{
        let copy = [...글제목];
        copy[0] = '글바뀜';
        글제목변경(copy);
      }}> 글수정 </button>
      */}

      {/*
      <div className="list">
        <h4>{글제목[0]} <span onClick={ ()=>{ 좋아요변경(좋아요+1) } }>👍</span> {좋아요} </h4>
        <p>3월 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>4월 발행</p>
      </div>

      <div className="list">
        <h4 onClick={ () => {setModal(!modal)} }>{글제목[2]}</h4>
        <p>5월 발행</p>
        {
          modal == true ? <Modal/> : null
        }
      </div>
      */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={ () => {setModal(!modal)}}>{ 글제목[i] }
              {/*<span onClick = { () => { 좋아요변경(좋아요+1)} }></span>*/}
              <span onClick = { () => { 
                let copy = [...좋아요];
                copy[i] = copy[i] + 1;
                좋아요변경(copy)} }>👍
              </span>{좋아요[i]}</h4>
              <p>발행</p>
          </div>
          )
        })
      }

      {
        modal == true ? <Modal color={'#01d1d2'} 글제목변경={글제목변경} 작명={글제목}/> : null
      } 

    </div>
  );
}


function Modal(props){
  return (
    <>
      <div className="modal" style={{background : props.color}}>
        <h4>{props.작명[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={ () => { props.글제목변경(['6월', '7월', '8월']) } }>글수정</button>
      </div>
    </>
  )  
}

export default App;