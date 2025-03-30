//import { Button , ThemeConfig   } from "flowbite-react";
import TestModal from "./components/test/TestModal.jsx";
import App1 from "./components/test/App1";
import reactLogo from './assets/react.svg'
import { Button,Card , TextInput , Checkbox , Label , Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
//import Image from "next/image";


export default function App() {
    return (
        <>
            {/*<ThemeConfig dark={false} />*/}
            {/*<Button>Click me</Button>*/}
            {/*<App1 />*/}
            {/*<TestModal />*/}

            <Navbar fluid rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <img src={reactLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <Button>Get started</Button>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink href="#" active>
                        Home
                    </NavbarLink>
                    <NavbarLink href="#">About</NavbarLink>
                    <NavbarLink href="#">Services</NavbarLink>
                    <NavbarLink href="#">Pricing</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
{/*

            <Card className="bg-gray-100 flex items-center justify-center  min-h-screen">
            </Card>

*/}

            <div className="flex justify-center items-center h-screen bg-gray-100">
                <Card className="min-w-2/4">
                    <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                    <div className="flex mb-4">
                        <TextInput id="todo-input" type="text" placeholder="Add a new task" className=" pr-1 flex-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

                        <Button id="add-btn" className="bg-blue-200 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">Add </Button>
                    </div>

                    {/*<div className="flex max-w-md  gap-4">
                        <div>
                            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                        </div>


                        <Button >Submit</Button>
                    </div>*/}

                </Card>
            </div>
            {/*

            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">

                    <Card className="max-w-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                            <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="shrink-0">

                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="shrink-0">

                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $3467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="shrink-0">

                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="shrink-0">

                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
                                    </div>
                                </li>
                                <li className="pb-0 pt-3 sm:pt-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="shrink-0">

                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $2367
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Card>

                </div>
            </div>
*/}
{/*

            <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <Button>
                    Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Button>
            </Card>

*/}

            {/*<div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">

                </div>
            </div>*/}
        </>
    );
}

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
