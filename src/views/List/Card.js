import React from "react";

function Card(props) {
  const { task, index } = props;
  return (
    <div key={index} className="border-card">
      <p>{task}</p>
      <i>edit</i>
    </div>
  );
}

export default Card;
