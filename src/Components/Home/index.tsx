import { Box, useBreakpointValue, Text, useMediaQuery, Avatar, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import RainingDayComponent from "../Base/Raining_day";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import ModalIntro from "./Modal";
import { useProgress } from "@react-three/drei";
import { DefaultSysterm } from "../Base/Default";
const HomeComponent = () => {
    const isMobile = useBreakpointValue({ base: true, sm: false });
    const [is900pxOrLess] = useMediaQuery('(max-width: 900px)');
    const [is1200pxOrLess] = useMediaQuery('(max-width: 1250px)');
    // const heightBrowser = DefaultSysterm.heightBrowser + 'px';
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const { active, progress } = useProgress();

    return (
        <Box style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            height: '100vh',
            background: 'linear-gradient(180deg, rgba(255, 231, 205, 1) 0%, #121120 100%)',
        }}>
            <Box style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
            }}>
                <RainingDayComponent />
            </Box>
            {!active && <Box style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                justifyContent: 'center',
                top: '50%',
                // width: '100%',
                backdropFilter: 'inherit',
            }}>
                <IconButton
                    colorScheme='pink'
                    variant={"ghost"}
                    aria-label='Search database'
                    borderRadius={'full'}
                    icon={<AiOutlinePlayCircle />}
                    size={'lg'}
                    fontSize={'5xl'}
                    onClick={onOpen}
                />

            </Box>}
            <ModalIntro btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};
export default HomeComponent;