import 'tw-elements';

const buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 darktext-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
const submitbuttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 darktext-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
const accordionClassName = "accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"


export const UserOptions = () => {
    const themeChange = () => {
        if (document.querySelector('#darkmode')){
          localStorage.theme = 'dark'
        } else{
          localStorage.theme = 'light'
        }
      }
    
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="menuModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog relative w-auto pointer-events-none">
      <div class="modal-content bg-white border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <h5 class="text-xl text-gray-800 dark:text-white font-medium leading-normal " id="exampleModalLabel">User Options</h5>
          <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body relative p-4">
          <div class="form-check">
            <input class="form-check-input bg-white appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="darkmode"/>
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
              Theme: Darkmode
            </label>
          </div>
    
        </div>
        <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
          <button type="button" data-bs-dismiss="modal">Close</button>
          <button type="button" onClick={themeChange}>Save changes</button>
        </div>
      </div>
      </div>
    </div>
}