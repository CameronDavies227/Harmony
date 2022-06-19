import { useState, useEffect } from "react"
import EventTableRow from "./EventTableRow";
import Spinner from "./helpercomponents/Spinner";
//import { MailIcon } from '@heroicons/react/solid'
import 'tw-elements';


const buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 dark:text-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
const color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50"
const formClassName = "border-black mx-auto p-4 grid gap-1"
const table = "grid grid-cols-6 m-2 shadow-lg bg-white border-separate"
const inputClassName = "border border-1 border-black rounded-md p-1"
const errorClassName = "md:col-span-2 text-red-500"
const footer = "modal-footer flex flex-shrink-0 flex-wrap items-center justify-end gap-x-4 p-4 border-t border-gray-200 rounded-b-md"


      
export default function Events() {
  //let user = JSON.parse(localStorage.getItem('user'))
  //console.log(user)

  const [events, setEvents] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
      if(events !== []){
          setLoading(false);
      }
  },[events])

  useEffect(() => {
      setLoading(true)
      fetch(`http://localhost:3000/events/1`, {
          method: 'GET',
          headers: {
              //'Authorization': 'Bearer ' + user.token,
              'Accept': 'application/json'
          }
      }).then(response => {
          if(!response.ok){
              throw new Error('The following error has occured: ' + response.statusText)
          } else {
              return response.json()
          }
      }).then(data => {
          setEvents(data);
      }).catch(error => {
          alert(error)
          setLoading(false)
      })
  }, [])  

  function addEvent(e){
      e.preventDefault();
      setLoading(true)
      console.log(e);
            // input validation required


      fetch('https://localhost/events/addevent/1', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
      }).then(response => {
        if(!response.ok){
          throw new Error('An error has occured: ' + response.statusText)
        } else {
          return response.json();
        }
      }).then(data => {
        console.log(data)
        localStorage.setItem('user', JSON.stringify(data))
        setUser(data)
      }).catch(error => {
        setLoading(false)
        alert(error);
      })
  }





        

      if(isLoading){ 
        return <Spinner />
      } else {
      return <>
        <div className={formClassName}>
          <div className="grid grid-cols-2">
            <h1 >Event List</h1>
            <button type="button" className={buttonClassName} data-bs-toggle="modal" data-bs-target="#addEventModal">Add Event+</button>
          </div>
          <div className='card shadow col'>
            <div className= {table}>
              <div className='text-left border	' >
                Name
              </div>
              <div className='text-left border	'>
                Description
              </div>
              <div className='text-left border	'>
                Date
              </div>
              <div className='text-left border	'>
              	Time
              </div>
              <div className='text-left border	'>
                Edit
              </div>
              <div className=' text-left border	'>
              	Delete
              </div>
            </div>
            <div>{events.data.map((events, i) => (
              <EventTableRow key={i} events={events} />
            ))}
            </div>
          </div>
        </div>



        <div className="modal fade fixed top-0 left-0 hidden w-full h-full text-gray-800 dark:text-white outline-none overflow-x-hidden overflow-y-auto"
        id="addEventModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content bg-white dark:bg-gray-600 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal " id="optionsModalLabel">Add Event</h5>
              <button type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="form-check">


                <form className={formClassName + " " + color} >
                  <h1 className="text-xl font-light">New Event</h1>

                  <div className="flex flex-col">
                      <label htmlFor="name">Name</label>
                      <input className="text-gray-700 peer border border-slate-400" type="text" name="name" id="name" required />

                      <p className="invisible peer-invalid:visible text-red-700 font-light">
                          Please enter your Name
                      </p>
                  </div>

                  <div className="flex flex-col">
                      <label htmlFor="description">Description</label>
                      <textarea name="message" id="message" cols="30" rows="3" required
                          className=" text-gray-700 peer border border-slate-400"></textarea>
                      <p className="invisible peer-invalid:visible text-red-700 font-light">
                          This field cannot be empty
                      </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                      <input type="date"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date" data-mdb-toggle="datepicker" />
                      <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="timepicker relative form-floating mb-3 xl:w-96" data-mdb-with-icon="true" id="input-toggle-timepicker">
                      <input type="time"
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
              <button type="button" onClick={addEvent} >Add Event</button>
            </div>
          </div>
          </div>
        </div>
      </>
      }

    }