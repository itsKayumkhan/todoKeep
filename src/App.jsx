import Nav from "./components/Nav";
import Todo from "./components/Todo";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { useEffect, useState } from "react";
const App = () => {
  const [newTodo, setNewTodo] = useState([]);
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState(true);
  const [inputBox, setInputBox] = useState(false);
  const [date, setDate] = useState();

  const getData = (todo) => {
    setNewTodo((pre) => {
      return [...pre, todo];
    });
  };

  const toggle = () => {
    setVisible(!visible);
    setIcon(!icon);
  };
  // const toggleIcon = () => {
  //   setIcon(!icon);
  // };

  const deleteTodo = (id) => {
    console.log(id);
    setNewTodo((prevTodos) => {
      return prevTodos.filter((_, index) => index !== id);
    });
    // console.log(newTodo)
  };

  const editTodo = () => {
    setInputBox(!inputBox);
  };
  
  return (
    <>
      <Nav toggle={toggle} icon={icon} />
      <div className="container mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {newTodo.map((todo, i) => {
            return (
              <Todo
                key={i}
                id={i}
                todo={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                date={date}
              />
            );
          })}
        </div>

        {visible && (
          <AddTodo
            sendData={getData}
            toggle={toggle}
            setDate={setDate}
            date={date}
          />
        )}
      </div>
    </>
  );
};

export default App;
