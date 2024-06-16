import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PosLogout from './PosLogout';


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false)

 

  const handleOpenLogoutPopup = () => {
    setIsLogoutPopupOpen(true)
  }
  const handleCloseLogoutPopup = () => {
    setIsLogoutPopupOpen(false);
  };

  return (
    <div>
      <div className="bg-secondry-bg-color h-full w-fit rounded-lg flex flex-col justify-between items-start space-y-4 py-4">
        <div className="flex flex-col">
          <i
            className={`fi cursor-pointer text-white text-2xl mx-3 ${
              isOpen ? "fi-rr-bars-staggered w-60" : "fi-rr-menu-burger w-fit"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          ></i>
          <Link to="/dashboard/pos">
            <i className="fi fi-tr-point-of-sale text-2xl text-white mx-3 "></i>
          </Link>
        </div>
        <div>
          <i className="fi fi-tr-sign-out-alt text-2xl text-white mx-3 " onClick={handleOpenLogoutPopup}></i>
          {isLogoutPopupOpen && (<PosLogout onClose={handleCloseLogoutPopup}/>)}
        </div>
      </div>
    </div>
  );
}

export default Nav