import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./styles/global.scss";

export default function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  );
}
