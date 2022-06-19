import React from "react";
import { useEffect } from "react";

const formClassName = "container border-x border-black mx-auto p-4 grid gap-1"
const table = "grid grid-cols-6 m-2 shadow-lg bg-white border-separate"



export default function EventTableRow({events}) {

  const { id, name, description, startTime_Date, endTime_Date } = events;

  const deleteEvent = (events) => {
    console.log(events.target.id);
    var url = `http://localhost:3000/events/delete/${id}`
    fetch(url, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then((res) => {
        if (res.status === 200) {
          alert("event successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
  <>
    <div className= {table}>
      <div>{name}</div>
      <div>{description}</div>
      <div>{startTime_Date}</div>
      <div>{endTime_Date}</div>
      <div>
        <button type="button">
          Edit
        </button>
      </div>
      <div>
        <button type="button" onClick={deleteEvent} size="sm" variant="danger">{id}</button>
      </div>
    </div>
  </>
  );
};