import React, { ReactNode } from "react";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import NavbarComponent from "../Navbar";
import { Scrollbars } from 'react-custom-scrollbars-2';


interface LayoutProps {
    children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider>
                <NavbarComponent />
                <Scrollbars style={{ width: '100%', height: '100vh' }}>
                    {children}
                </Scrollbars>
            </ChakraProvider>
        </>
    );
};

export default Layout;
