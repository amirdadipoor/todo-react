//import { Button , ThemeConfig   } from "flowbite-react";

import TestModal from "./components/test/TestModal.jsx";
import App1 from "./components/test/App1";
import reactLogo from './assets/react.svg'
import {
    Button,
    Card,
    TextInput,
    Checkbox,
    Label,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    toggleSwitchTheme
} from "flowbite-react";
import { ThemeConfig } from "flowbite-react";
import ThemeToggle from "./components/themes/theme-toggle.jsx";
import { useEffect } from 'react';
import ConfirmModal from "./components/confirm-modal.jsx";
import AppNavbar from "./components/app-navbar.jsx";
//import {useState} from "react";
//import Image from "next/image";


export default function App() {


    useEffect(() => {
        document.body.classList.add(...["bg-white","dark:bg-gray-900","antialiased"]) ;
        //document.body.classList.add("dark:bg-slate-900") ;
    })

    return (
        <>


            <AppNavbar />

            <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 antialiased">
                <Card className="min-w-2/4">
                    <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">Latest
                        Customers</h5>
                    <div className="flex mb-4">
                        <TextInput id="todo-input" type="text" placeholder="Add a new task"
                                   className=" pr-1 flex-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   required/>

                        {/*<Button id="add-btn" className=" text-white px-4 py-2 rounded-r-md hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900">Add </Button>*/}
                        <button type="button"
                                className="justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
>
                            Add Task
                        </button>
                    </div>

                    <ul className="my-4 space-y-3">


                        <li className="">
                            <a href="javascript:;" className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">

                                <svg className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-3 flex-1 whitespace-nowrap text-gray-400 line-through decoration-gray-300">24×7 phone & email support</span>
                                <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">Popular</span>
                            </a>
                        </li>

                        <li >
                            <a href="javascript:;" className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">

                                <svg className="h-5 w-5 shrink-0 text-gray-600 dark:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  >
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  clipRule="evenodd" />
                                </svg>

                                <span className="ml-3 flex-1 whitespace-nowrap text-gray-500 dark:text-white">MetaMask</span>
                                <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">Popular</span>
                            </a>
                        </li>




                    </ul>



                </Card>
            </div>
            <ConfirmModal />
        </>
    );
}
