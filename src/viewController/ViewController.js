import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions";
import Todo from "../components/view/View";

function ViewController() {
  const myList = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  const dispatchActions = {
    addTodo: () => dispatch(addTodo()),
    deleteTodo: () => dispatch(deleteTodo()),
    removeTodo: () => dispatch(removeTodo()),
  };
  return (
    <div>
      <Todo state={myList} actions={dispatchActions} />
    </div>
  );
}

export default ViewController;
