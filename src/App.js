import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['3월','4월','5월']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  [1, 2, 3].map(function(a){
      return '1234567'
  })

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={ () => {setModal(!modal); setTitle(i) }}>{ 글제목[i] }
              <span onClick = { (e) => {
                e.stopPropagation();
                let copy = [...좋아요];
                copy[i] = copy[i] + 1;
                좋아요변경(copy)} }>👍
              </span>{좋아요[i]}</h4>
              <p>발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(0, 1);
                글제목변경(copy);
              }}>삭제</button>
          </div>
          )
        })
      }

      <input onChange={ (e)=>{ 입력값변경(e.target.value) } }></input>
      
      <button onClick={ ()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
        }}>글발행</button>

      {
        modal == true ? <Modal color={'#01d1d2'} title={title} 글제목변경={글제목변경} 작명={글제목}/> : null
      } 

    </div>
  );
}

function Modal(props){
  return (
    <>
      <div className="modal" style={{background : props.color}}>
        <h4>{ props.작명[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={ () => { props.글제목변경(['6월', '7월', '8월']) } }>글수정</button>
      </div>
    </>
  )  
}

export default App;