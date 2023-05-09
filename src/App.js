import './App.css';
import { useState } from 'react';

function Modal(){
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )  
}

function App() {
  {/*let post = 'title2' // 대충 서버에서 가져온 실제 데이터*/}
  let [글제목, 글제목변경] = useState(['3월','4월','5월']);
  {/*let [글제목, a] = useState('3월');*/}
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">

      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      {/*<h5 style = { {color:'#01d1d2', fontSize : '20px'} }>{post}</h5>*/}
      
      <button onClick={()=>{

      }}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>3월 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>4월 발행</p> 
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>5월 발행</p> 
      </div>

      <Modal></Modal>

    </div>
  );
}

export default App;