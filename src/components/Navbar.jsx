import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-200">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

        <div className="logo font-bold">Vaultix</div>
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
