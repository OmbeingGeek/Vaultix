import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500">&lt;</span>
          <span>Vault</span>
          <span className="text-green-500">IX/&gt;</span>

        </div>
        <ul>
            <li className="flex gap-4">
                <a className='hover:font-bold' href="/">HOME</a>
                <a className='hover:font-bold' href="#">ABOUT</a>
                <a className='hover:font-bold' href="#">CONTACT</a>
            </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
