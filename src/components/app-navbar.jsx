import {Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";
import reactLogo from "../assets/react.svg";
import ThemeToggle from "./themes/theme-toggle.jsx";


export default function AppNavbar() {
    return (

        <Navbar fluid rounded>
            <NavbarBrand href="https://flowbite-react.com">
                <img src={reactLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                {/*<Button onClick={toggleSwitchTheme} >Get started</Button>*/}
                <ThemeToggle/>
                <NavbarToggle/>

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
    )
}