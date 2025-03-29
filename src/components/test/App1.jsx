import { Button, createTheme, ThemeProvider } from "flowbite-react";

const mainTheme = createTheme({
    button: {
        color: {
            primary: "bg-blue-500 hover:bg-blue-600",
        },
        size: {
            lg: "px-6 py-3",
        },
    },
});

const sectionTheme = createTheme({
    button: {
        color: {
            primary: "bg-green-500 hover:bg-green-600",
            // size.lg from mainTheme is preserved
        },
    },
});

export default function App1() {
    return (
        <ThemeProvider theme={mainTheme}>
            <Button size="lg">Blue Large Button</Button>
            <ThemeProvider theme={sectionTheme}>
                {/* Inherits size.lg from mainTheme */}
                <Button size="lg">Green Large Button</Button>
            </ThemeProvider>
        </ThemeProvider>
    );
}