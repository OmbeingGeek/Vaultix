import React from 'react'
import { useRef, useState, useEffect } from 'react';

import { ToastContainer, toast, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        console.log(text);

        toast('🚀 Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });


    }

    const showPassword = () => {
        alert("show the password");
        if (ref.current.src.includes("eyecross.png")) {
            ref.current.src = "../icons/eye.png";
            passwordRef.current.type = "text"
        }
        else {
            ref.current.src = "../icons/eyecross.png";
            passwordRef.current.type = "password"
        }
    }

    const savePassword = () => {
        if (!form.site || !form.password || !form.username) {
            alert("Don't Leave any entry empty!!");
            return;
        }
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form]);

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />



            {/* background code copied from bg.ibelick.com */}
            <div className="absolute top-0 z-[-2] h-screen w-max bg-green-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className="mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className="text-green-500">&lt;</span>
                    <span>Vault</span>
                    <span className="text-green-500">IX/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>My own Password Manager</p>


                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name='site' id='' />

                    <div className="flex w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name='username' id='' />

                        <div className="relative">

                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className="rounded-full border border-green-500 w-full p-4 py-1" type="password" name='password' id='' />
                            <span className="absolute right-[3px] top-[4px] cursor-pointer" onClick={showPassword}>
                                <img ref={ref} width={26} src="../icons/eye.png" alt="eye" className="p-1" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th>Site</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => {

                                    return <tr key={index}>
                                        <td className="text-center border border-white py-2 justify-center">
                                            <div className='flex items-center justify-center'>
                                                <a href={item.site} target='_blank'>

                                                    <span>{item.site}</span>
                                                </a>
                                                <div className="lordiconcopy size-7 cursor-pointer">

                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" onClick={() => { copyText(item.site) }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center border border-white py-2 justify-center">
                                            <div className='flex items-center justify-center'>

                                                <span>{item.username}</span>
                                                <div className="lordiconcopy size-7 cursor-pointer">

                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" onClick={() => { copyText(item.username) }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center border border-white py-2 justify-center">
                                            <div className='flex items-center justify-center'>
                                                <span>{item.password}</span>
                                                <div className="lordiconcopy size-7 cursor-pointer">

                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" onClick={() => { copyText(item.password) }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>

        </>
    )
}

export default Manager
