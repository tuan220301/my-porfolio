import { Box, IconButton, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { DefaultSysterm } from '../Default';
import { BiMenuAltRight } from 'react-icons/bi';
import ModalNav from './ModalNav';

const NavbarComponent = () => {
    // const isMobile = useBreakpointValue({ base: true, sm: false });
    const [isMobile, setIsMobile] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    useEffect(() => {
        const checkIsMobile = () => {
            const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            setIsMobile(isMobileDevice);
        };

        checkIsMobile(); // Check on initial render

        // Make sure this code only runs in the client-side environment
        if (typeof window !== "undefined") {
            // Listen for resize events to update the isMobile state
            window.addEventListener("resize", checkIsMobile);

            // Clean up the event listener on component unmount
            return () => {
                window.removeEventListener("resize", checkIsMobile);
            };
        }
    }, []);
    return (
        <nav
            style={{
                width: '100%',
                height: '56px',
                backgroundColor: DefaultSysterm.bgColorFill,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                zIndex: 99
            }}>
            <Box style={{
                width: '200px',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: '20px' }}>Nguyen Minh Tuan</Text>
            </Box>
            {
                isMobile ? <IconButton
                    // colorScheme='pink'
                    variant={"ghost"}
                    aria-label='Search database'
                    borderRadius={'full'}
                    icon={<BiMenuAltRight />}
                    size={'lg'}
                    fontSize={'3xl'}
                    onClick={onOpen}
                />
                    : <Box style={{
                        width: 'fit-content',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 20,
                        alignItems: 'center',
                        paddingRight: 10
                    }}>
                        <Link to='/' activeClassName="active">Home</Link>
                        <Link to='/Work' activeClassName="active">Work</Link>
                        <Link to='/Contact' activeClassName="active">Contact</Link>
                    </Box>
            }
            <ModalNav btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
        </nav>
    );
};
export default NavbarComponent; 