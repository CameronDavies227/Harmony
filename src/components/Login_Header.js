import 'tw-elements';

const buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 dark:text-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
const submitbuttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 darktext-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
const accordionClassName = "accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
const head = "flex items-center justify-center"
const color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50"
const footer = "modal-footer flex flex-shrink-0 flex-wrap items-center justify-end gap-x-4 p-4 border-t border-gray-200 rounded-b-md"
   

export const Header = () => {
  const themeChange = () => {
    if (document.getElementById("darkmode").checked){
      localStorage.theme = 'dark'
    } else{
      localStorage.theme = 'light'
    }
    if (localStorage.theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const Search = () =>{
    document.getElementById("groupSearchAccordion").className = "accordion visible"
    //console.log(document.getElementsByClassName("accordion invisible"))
    //console.log(document.getElementById("groupSearchAccordion"))
  }

  return<>
    <div className={head + " " + color}>
      <div className={"inline-flex shadow-md hover:shadow-lg focus:shadow-lg" }role="group">
        <button type="button" className={buttonClassName} data-bs-toggle="modal" data-bs-target="#groupsModal">Search Groups</button>
        <button type="button" className={buttonClassName} data-bs-toggle="modal" data-bs-target="#menuModal">Menu</button>
        <button type="button" className={buttonClassName} data-bs-toggle="modal" data-bs-target="#menuModal">Menu</button>
        <button type="button" className={buttonClassName} data-bs-toggle="modal" data-bs-target="#menuModal">Menu</button>
      </div>
    </div>


    <div className="modal fade fixed top-0 left-0 hidden w-full h-full text-gray-800 dark:text-white outline-none overflow-x-hidden overflow-y-auto"
    id="menuModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog relative w-auto pointer-events-none">
      <div className="modal-content bg-white dark:bg-gray-600 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <h5 className="text-xl font-medium leading-normal " id="optionsModalLabel">User Options</h5>
          <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body relative p-4">
          <div className="form-check">
            <input className="form-check-input bg-white appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="darkmode"/>
            <label className="form-check-label inline-block" htmlFor="flexCheckDefault">
              Theme: Darkmode
            </label>
          </div>

        </div>
        <div className={footer}>
          <button type="button" data-bs-dismiss="modal">Close</button>
          <button type="button" onClick={themeChange}>Save changes</button>
        </div>
      </div>
      </div>
    </div>

    <div className="modal fade fixed top-0 left-0 hidden w-full h-full text-gray-800 dark:text-white outline-none overflow-x-hidden overflow-y-auto"
    id="groupsModal" tabIndex="-1" aria-labelledby="groupSearchModalLabel" aria-hidden="true">
      <div className="modal-dialog relative w-auto pointer-events-none">
      <div className="modal-content bg-white dark:bg-gray-600 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
        <div className="modal-header border-gray-200 flex flex-shrink-0 items-center justify-between p-4 border-b rounded-t-md">
          
          <h5 className="text-xl font-medium leading-normal" id="exampleModalLabel">Group Search</h5>
          
          <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        






        <div className="modal-body relative p-4">
          <div className="flex items-center justify-center ">
            <div className="flex border-2 border-gray-200 rounded">
              <input type="text" className="px-4 py-2 w-full" placeholder="Search..."/>
              <button className="px-4 text-white bg-gray-600 border-l" onClick={Search}>
                Search
              </button>
            </div>
          </div>

          <div id="groupSearchAccordion" className="accordion invisible" >
              <div className="accordion-item border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                <button className={accordionClassName}
                  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                    aria-controls="collapseOne">
                    Work Times
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body py-4 px-5">
                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                    until the collapse plugin adds the appropriate classNamees that we use to style each
                    element. These classNamees control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingTwo">
                  <button className={accordionClassName}
                  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">
                    Friend Group
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body py-4 px-5">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                    until the collapse plugin adds the appropriate classNamees that we use to style each
                    element. These classNamees control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingThree">
                <button className={accordionClassName}
                type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    Family Timetable
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body py-4 px-5">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                    until the collapse plugin adds the appropriate classNamees that we use to style each
                    element. These classNamees control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>

        </div>
        
        <div className={footer}>
          <button type="button" data-bs-dismiss="modal">Close</button>
          <button type="button">Save changes</button>
        </div>
        
      </div>
      </div>
    </div>
    </>
  }
