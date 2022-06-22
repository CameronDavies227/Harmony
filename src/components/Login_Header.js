import 'tw-elements';

const buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 dark:text-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
const submitbuttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 darktext-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
const accordionClassName = "accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
const head = "flex items-center justify-center"
const color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50"
const footer = "modal-footer flex flex-shrink-0 flex-wrap items-center justify-end gap-x-4 p-4 border-t border-gray-200 rounded-b-md"
   

    export const Login_Header = () => {
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
  
    
      return<>
        <div className={head + " " + color}>
          <div className={"inline-flex shadow-md hover:shadow-lg focus:shadow-lg" }role="group">
            {/* <button type="button" className={buttonClassName} data-bs-toggle="modal" data-bs-target="#groupsModal">Search Groups</button>*/}
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
    </>
  }
