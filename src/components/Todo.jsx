// import React from 'react'

import { useState } from "react";

const Todo = ({ todo, id, key, deleteTodo, editTodo, inputBox, sendData }) => {
  // console.log(ids);
  const [todoBox, setTodoBox] = useState({
    title: "",
    content: "",
  });

  const [save, setSave] = useState(true);

  const updateTodo = (e) => {
    const { name, value } = e.target;
    setTodoBox((pre) => {
      return { ...pre, [name]: value };
    });
    // console.log(todoBox);
  };
  // let flag = true;
  const toggleEditBtn = () => {
    setSave(!save);
  };

  return (
    <>
      <div className="flex justify-center  " id={id} key={key}>
        <div className="container m-2 flex flex-col bg-white shadow-md p-2 rounded ">
          {save ? (
            <>
              <div className="hading h2 bold flex pb-2 justify-between uppercase text-2xl border-b-2">
                <h1 className="truncate w-1/2">{todoBox.title}</h1>
                <div className="btn-box w-1/2 flex items-center justify-end">
                  <div className="px-2 ">
                    <button className="icon-edit" onClick={toggleEditBtn}>
                      <ion-icon
                        className=""
                        name="create-outline"
                        id="edit_btn"
                      ></ion-icon>
                    </button>
                  </div>
                  <div className="">
                    <button
                      className=" icon-del"
                      onClick={() => deleteTodo(id)}
                    >
                      <ion-icon
                        className=""
                        name="trash-outline"
                        id="del_btn"
                      ></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text  border-t-slate-800 ">{todoBox.content}</div>
            </>
          ) : (
            <>
              <div className="hading h2 bold flex pb-2 justify-between uppercase text-2xl border-b-2">
                <input
                  type="text"
                  name="title"
                  className="outline-none w-1/2"
                  value={todoBox.title}
                  onChange={
                    (e) => updateTodo(e)
                  }
                />
                <div className="btn-box w-1/2 flex items-center justify-end">
                  <div className="px-2 " onClick={() => editTodo(id, todoBox)}>
                    <button className="icon-save" onClick={toggleEditBtn}>
                      <ion-icon
                        name="save-outline"
                        className=""
                        id="save_btn"
                      ></ion-icon>
                    </button>
                  </div>
                  <div className="">
                    <button
                      className=" icon-del"
                      onClick={() => deleteTodo(id)}
                    >
                      <ion-icon
                        className=""
                        name="trash-outline"
                        id="del_btn"
                      ></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
              <textarea
                className="text resize-none outline-none border-t-slate-800 "
                value={todoBox.content}
                name="content"
                onChange={(e) => updateTodo(e)
                }
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
