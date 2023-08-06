import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import React from "react";
import downloadFile from '../../images/pdf/my_cv.pdf';
import { Link } from "gatsby";
type ModalNavPorps = {
    isOpen: boolean,
    onClose: any;
    btnRef: any;
};
const ModalNav = (props: ModalNavPorps) => {
    const { btnRef, isOpen, onClose } = props;

    return (
        <Drawer
            isOpen={isOpen}
            placement='left'
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
                    <Box style={{
                        width: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 20,
                        alignItems: 'center',
                        paddingRight: 10,
                        fontSize: 20,
                        fontWeight: 'bold',
                        fontFamily: 'mono'
                    }}>
                        <Link to='/' activeClassName="active">Home</Link>
                        <Link to='/Work' activeClassName="active">Work</Link>
                        <Link to='/Contact' activeClassName="active">Contact</Link>
                    </Box>
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
export default ModalNav;