import React, { useState, useEffect } from "react";
import styles from "./assets/css/Card.css";
import TaskList from "./TaskList";
import PropTypes from "prop-types";

export default function Card({ no, title, description }) {
  const [tasks, setTasks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  // console.log("여기 tasks");
  // console.log(setTasks);

  useEffect(async () => {
    try {
      const response = await fetch(`/api/task?no=${no}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: null,
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }
      setTasks(json.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log("==================");
  console.log(setTasks);
  console.log("==================");

  const InsertTask = async function (task) {

    try {
      const response = await fetch("/api/task", {
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
    <div className={styles.Card}>
      <div
        className={
          showDetails
            ? [styles.Card__Title, styles.Card__Title__open].join(" ")
            : styles.Card__Title
        }
        onClick={() => {
          console.log(`fecth task(/api/task?cardNo=${no}...`);
          setShowDetails(!showDetails);
        }}
      >
        {title}
      </div>

      {showDetails ? (
        <div className={styles.Card__Details}>
          {description}
          <TaskList tasks={tasks} InsertTask={InsertTask} no={no}/>
        </div>
      ) : null}
    </div>
  );
}

Card.propType = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
