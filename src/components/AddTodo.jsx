// import React from "react";

import { useState } from "react";

const AddTodo = ({ sendData, toggle }) => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const updateTodo = (e) => {
    const { name, value } = e.target;
    setTodo((pre) => {
      return { ...pre, [name]: value };
    });
    // console.log(todo);
  };

  const addTodo = () => {
    if (todo.title.trim() === "") {
      alert("Please fill out the 'HADING' field.");
    } else {
      toggle();
      sendData(todo);
    }
  };

  const deleteTodo = () => {
    toggle();
  };

  return (
    <div className="flex w-full justify-center ">
      <div
        className="w-[50%]  bg-yellow-500
      -600 relative shadow-md rounded "
      >
        <div className="title flex items-center justify-between ">
          <h1 className="text-2xl font-bold mx-2">Add Todo</h1>
          <div className="btn-del text-2xl flex justify-center cursor-pointer w-12 rounded-s-lg right-2 top-1 relative ">
            <button className="icon-add1" onClick={() => deleteTodo()}>
              <ion-icon
                className=""
                name="trash-outline"
                id="del_btn"
              ></ion-icon>
            </button>
          </div>
        </div>
        <div className="hading mt-2">
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={updateTodo}
            placeholder="HADING"
            autoComplete="off"
            required
            className="outline-none text-2xl w-full p-2 font-medium"
          />
          <div></div>
        </div>
        <div className="text-box border-t-4">
          <textarea
            className="w-[100%] h-36 outline-none p-2 resize-none"
            name="content"
            value={todo.content}
            onChange={updateTodo}
            placeholder="New Todo ..."
          ></textarea>
        </div>
        <div
          onClick={addTodo}
          className="item uppercase absolute right-10 shadow-lg px-3 text-xl cursor-pointer icon-add -bottom-3   bg-yellow-400 text-white rounded-md w-[10%] flex justify-center items-center h-10 border-yellow-300 border-spacing-2 "
        >
          <ion-icon
            name="add-outline"
            class="icon-add1 text-2xl"
            id="add_btn"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
