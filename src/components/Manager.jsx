import React from 'react'

const Manager = () => {
  return (
    <>
        {/* background code copied from bg.ibelick.com */}
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

        <div className="bg-slate-50 mycontainer">
            <h1>Vaultix</h1>
            <p>My own Password Manager</p>
            <div className="text-white flex flex-col p-4">
                <input className="rounded-full" type="text" name='' id='' />
                <div className="flex">
                    <input type="text" />
                    <input type="text" />
                </div>

            </div>
        </div>
      
    </>
  )
}

export default Manager
