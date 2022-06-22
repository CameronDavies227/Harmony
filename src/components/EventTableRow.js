import React from "react";
const color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50"
import { useEffect } from "react";

const formClassName = "container border-x border-black mx-auto p-4 grid gap-1"
const table = "grid grid-cols-6 m-2 shadow-lg bg-white border-separate"
const buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 dark:text-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
const footer = "modal-footer flex flex-shrink-0 flex-wrap items-center justify-end gap-x-4 p-4 border-t border-gray-200 rounded-b-md"


export default function EventTableRow({events}) {

  const { id, name, description, date, time} = events;

  const deleteEvent = (events) => {
    console.log(events.target.id);
    var url = `http://localhost:5000/events/${id}`
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
      <div>{date}</div>
      <div>{time}</div>
      <div>
        <button className={buttonClassName} type="button" data-bs-toggle="modal" data-bs-target="#editEventModal" size="sm" variant="danger"> Edit </button>
      </div>
      <div>
        <button className={buttonClassName} type="button" onClick={deleteEvent} size="sm" variant="danger"> Delete </button>
      </div>
    </div>

    <div className="modal fade fixed top-0 left-0 hidden w-full h-full text-gray-800 dark:text-white outline-none overflow-x-hidden overflow-y-auto"
        id="editEventModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content bg-white dark:bg-gray-600 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal " id="modalLabel">Edit Event</h5>
              <button type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="form-check">


                <form className={formClassName + " " + color} >
                  <h1 className="text-xl font-light">Event</h1>

                  <div className="flex flex-col">
                      <label htmlFor="name">Name</label>
                      <input className="text-gray-700 peer border border-slate-400" type="text" name="name" id="name" defaultValue={name} required />

                      <p className="invisible peer-invalid:visible text-red-700 font-light">
                          Please enter your Name
                      </p>
                  </div>

                  <div className="flex flex-col">
                      <label htmlFor="description">Description</label>
                      <textarea name="description" id="description" cols="30" rows="3" defaultValue={description} required
                          className=" text-gray-700 peer border border-slate-400"></textarea>
                      <p className="invisible peer-invalid:visible text-red-700 font-light">
                          This field cannot be empty
                      </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                      <input type="date" defaultValue={date}
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date" data-mdb-toggle="datepicker" />
                      <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="timepicker relative form-floating mb-3 xl:w-96" data-mdb-with-icon="true" id="input-toggle-timepicker">
                      <input type="time" defaultValue={time}
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a time" data-mdb-toggle="input-toggle-timepicker" />
                      <label htmlFor="floatingInput" className="text-gray-700">Select a time</label>
                    </div>
                  </div>
                </form>
              </div>
    
            </div>
            <div className={footer}>
              <button type="button" data-bs-dismiss="modal">Close</button>
              <button type="button" >Edit Event</button>
            </div>
          </div>
          </div>
        </div>
  </>
  );
};