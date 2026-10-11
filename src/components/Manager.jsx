import React from 'react'

const Manager = () => {
    return (
        <>
            {/* background code copied from bg.ibelick.com */}
            <div class="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className="mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className="text-green-500">&lt;</span>
                    <span>Vault</span>
                    <span className="text-green-500">IX/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>My own Password Manager</p>


                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name='' id='' />
                    <div className="flex w-full justify-between gap-8">
                        <input className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name='' id='' />
                        <input className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name='' id='' />
                    </div>
                    
                    <button className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-4 py-2 w-fit'>
                        <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon>
                        Add Password</button>
                </div>
            </div>

        </>
    )
}

export default Manager
