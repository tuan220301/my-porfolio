import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, ModalBodyProps, Text } from "@chakra-ui/react";
import React from "react";
import avatar from '../../images/img/right_ava.jpg';
import { AiOutlineArrowDown } from 'react-icons/ai';
import downloadFile from '../../images/pdf/my_cv.pdf';
type ModalIntroPorps = {
    isOpen: boolean,
    onClose: any;
    btnRef: any;
};
const ModalIntro = (props: ModalIntroPorps) => {
    const { btnRef, isOpen, onClose } = props;
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = downloadFile;
        link.download = "my_cv.pdf"; // Set the desired filename for the downloaded file
        link.click();
    };

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            size={"full"}
        >
            <DrawerOverlay />
            <DrawerContent style={{
                // marginTop: '56px',
                backgroundColor: "rgba(255, 231, 205, 0.8)",
            }}>
                <DrawerCloseButton />
                {/* <DrawerHeader>Create your account</DrawerHeader> */}

                <DrawerBody style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 10
                }}>
                    {/* <Input placeholder='Type here...' /> */}
                    {/* <Box> */}
                    <Avatar name='Tuan Nguyen' width={'250px'} height={'250px'} src={avatar} />
                    <Text fontSize={'3xl'} fontWeight={'bold'} fontFamily={'mono'}>Hello,</Text>
                    <Text fontSize={'3xl'} fontWeight={'bold'} fontFamily={'mono'}>I'm Tuan</Text>
                    <Text fontSize={'3xl'} fontWeight={'bold'} fontFamily={'mono'}>Frontend developer</Text>
                    <Text maxWidth={'500px'} fontSize={'xl'}>
                        As a fresher, I am motivated to develop my skills and grow professionally. I hope that after 3 to 4 years of learning and working, I will have the knowledge, experience, and skills to become a Frontend developer or Fullstack developer.
                    </Text>
                    <Button
                        onClick={handleDownload}
                        rightIcon={<AiOutlineArrowDown />}
                        borderRadius={'full'}
                        colorScheme={'pink'}
                        variant='outline'>
                        DownLoad my CV
                    </Button>
                    {/* </Box> */}
                </DrawerBody>

                {/* <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    );
};
export default ModalIntro;