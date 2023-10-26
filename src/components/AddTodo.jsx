// import React from "react";

import { useEffect, useState } from "react";

const AddTodo = ({ sendData, toggle, setDate, date }) => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
    created: date,
  });
  let currentDate = new Date().toLocaleString();
  setDate(currentDate);
  const updateTodo = (e) => {
    const { name, value } = e.target;
    setTodo((pre) => {
      return { ...pre, [name]: value, created: date };
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
    <div className="flex w-full justify-center bg-black bg-opacity-60 absolute top-0 h-screen items-center">
      <div
        className="lg:w-[50%]  bg-yellow-500
      -600 relative shadow-md rounded -top-10"
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
          className="item uppercase absolute right-10 shadow-lg lg:px-3 text-xl cursor-pointer icon-add -bottom-3   bg-yellow-400 text-white rounded-md lg:w-[10%] flex justify-center items-center h-10 border-yellow-300 border-spacing-2 p-1 w-16"
        >
          <ion-icon
            name="add-outline"
            class="icon-add1 text-3xl"
            id="add_btn"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
