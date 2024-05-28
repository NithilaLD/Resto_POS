import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-secondry-bg-color h-full w-fit rounded-lg flex flex-col items-center space-y-4 py-4">
        <i
          className={`fi cursor-pointer text-white text-3xl mx-3 ${
            isOpen ? "fi-rr-bars-staggered w-60" : "fi-rr-menu-burger w-fit"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        ></i>
        <Link to="/dashboard/home">
          <i class="fi fi-rr-house-blank text-white text-2xl mx-3"></i>
        </Link>
        <Link to="/dashboard/pos">
          <i class="fi fi-tr-point-of-sale text-2xl text-white mx-3"></i>
        </Link>
        <Link to="/dashboard/menu">
          <i class="fi fi-rr-restaurant text-white text-2xl mx-3"></i>
        </Link>
      </div>
    </div>
  );
}

export default Nav