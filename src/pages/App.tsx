import React from 'react';
import Layout from '../Components/Base/Layout';
import HomeComponent from '../Components/Home';
import { ColorModeScript, theme, ChakraProvider } from '@chakra-ui/react';
import Scrollbars from 'react-custom-scrollbars-2';
import NavbarComponent from '../Components/Base/Navbar';

const App = () => {
    return (
        <>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider>
                <NavbarComponent />
                <Scrollbars style={{ width: '100%', height: '100vh' }}>
                    <main>
                        <HomeComponent />
                    </main>
                </Scrollbars>
            </ChakraProvider>
        </>
    );
};
export default App;