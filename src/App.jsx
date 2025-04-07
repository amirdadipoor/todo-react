//import { Button , ThemeConfig   } from "flowbite-react";

/*import TestModal from "./components/test/TestModal.jsx";
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
import ThemeToggle from "./components/themes/theme-toggle.jsx";*/
import { useEffect } from 'react';

import AppNavbar from "./components/app-navbar.jsx";
import TaskList from "./components/task-list.jsx";
//import {useState} from "react";
//import Image from "next/image";


export default function App() {


    /*useEffect(() => {
        document.body.classList.add(...["bg-white","dark:bg-gray-900","antialiased"]) ;
        //document.body.classList.add("dark:bg-slate-900") ;
    })*/

    return (
        <>
            <AppNavbar />

            <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 antialiased">
                <TaskList />
            </div>

        </>
    );
}
