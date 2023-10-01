import { useState } from "react";
import * as React from "react";
import { Reset } from "styled-reset";

function App() {
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    // todos.push => state를 직접정으로 수정x, set함수 이용
    // 입력받은 todo와 기존의 todos element를 더해 새로운 배열 생성
    setToDos((currentArray) => [...currentArray, todo]);
    setToDo("");
  };

  const deleteToDo = (index) => {
    setToDos((currentArray) =>
      currentArray.filter((_, currentIdx) => currentIdx !== index)
    );
  };

  console.log(todos);

  return (
    <React.Fragment>
      <Reset />
      <div>
        <h1>My To Do ({todos.length})</h1>
        <form onSubmit={onSubmit}>
          <input
            placeholder="write your to do"
            value={todo}
            onChange={onChange}
            type="text"
          ></input>
          <button>Add To Do</button>
        </form>
        <hr />
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              {item}
              <button id={item} onClick={() => deleteToDo(index)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
