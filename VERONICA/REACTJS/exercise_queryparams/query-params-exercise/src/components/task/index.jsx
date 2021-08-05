import React from "react";
import {
  Delete,
  CheckCircleOutline,
  RadioButtonChecked,
} from "@material-ui/icons";
import "./style.css";

function Task(props) {
  return (
    <div className="container-task">
        <div className="container_icon-status">
      {props.status === "done" ? (
        <CheckCircleOutline className='icon-red'>{props.status}</CheckCircleOutline>
      ) : (
        <RadioButtonChecked className='icon-green'>{props.status}</RadioButtonChecked>
      )}
      {/* <CheckCircleOutline>{props.status}</CheckCircleOutline> */}
      </div>
      <div className="text-task">
        <h3 className="title-color">{props.title}</h3>
        <p>
          #{props.id} created on {props.date}
        </p>
      </div>
      <div className="container_icon-trashcan">
      <Delete>{props.status}</Delete>
      </div>
    </div>
  );
}

export default Task;
