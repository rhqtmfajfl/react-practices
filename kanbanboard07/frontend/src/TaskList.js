import React from "react";
import Task from "./Task";
import styles from "./assets/css/TaskList.css";

import PropTypes from "prop-types";
//add 상태바꾹느것
//create delete update
//read도 있따.
//r c u

export default function TaskList({no, tasks, InsertTask }) {

  const DeleteTask = async function (task) {

    try {
      const response = await fetch('/api/delete', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks([json.data, ...tasks]);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={styles.TaskList}>
      <ul>
        {tasks.map((task) => (
          <Task key={task.no} no={task.no} name={task.name} done={task.done} DeleteTask={DeleteTask}/>
        ))}

        <input
          type="text"
          className={styles.TaskList__add_task}
          placeholder={"테스크 추가"}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log(`call notifyAddTask(${e.target.value})`);
              // console.log("====================================");
              // console.log("여기가 통과 될까?")
              var inserttask = {
                name : e.target.value,
                done : 'N',
                card_no : no
              }
              

               
              InsertTask(inserttask);
              
            }
          }}
        />

      </ul>
    </div>
  );
}
//input box로 내가 쓰고자하는 글을 쓸 수 있다.

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(Task.propType)),
};
