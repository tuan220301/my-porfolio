import { Box, Grid, GridItem, Icon, Text, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ShippingBusComponent from "../Base/Shipping_bus";
import TruckComponent from "../Base/Truck";
import HanbiroComponent from "../Base/Hanbiro";
import NoteComponent from "../Base/Note";
import ComputerComponent from "../Base/Computer";
import { BiLogoReact, BiLogoGraphql, BiLogoAngular, BiLogoMongodb } from 'react-icons/bi';
import { TbBrandReactNative, TbBrandTypescript, TbBrandXamarin } from 'react-icons/tb';
import { SiReactquery, SiGooglemaps } from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';
import { NearIcon } from "../Base/NearIcon";

const WorkComponent = () => {
    // console.log('workpage');
    const gridColumnTemplate = useBreakpointValue({ base: '1fr', md: '1fr 1fr', xl: '1fr 1fr 1fr' });
    const gridRowTemplate = useBreakpointValue({ base: '1fr', md: '1fr 1fr', xl: '1fr 1fr ' });
    const textStyle = {
        fontSize: 18,
        fontFamily: 'mono',
        fontWeight: 'bold'
    };
    const [is1200pxOrLess] = useMediaQuery('(max-width: 1250px)');
    const [isMobile, setIsMobile] = useState(false);

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
    // console.log('ismobile: ', isMobile);
    const iconList = {
        display: 'flex',
        flexDirection: 'row',
        gap: 3
    };
    return (
        <Box style={{
            display: 'flex',
            // flexDirection: is1200pxOrLess ? 'column' : 'row',
            width: '100%',
            justifyContent: 'center',
            height: isMobile ? 'fit-content' : '100vh',
            paddingTop: '56px',
            background: 'linear-gradient(180deg, rgba(255, 231, 205, 1) 0%, #121120 100%)',
            // border: '1px solid black',
        }}>
            <Box width={'100%'} padding={5} height={'100%'}
            // border={'1px solid black'}
            >
                {/* <Text style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    textAlign: 'center',
                    marginTop: is1200pxOrLess ? 0 : 10,
                    marginBottom: 10
                }}>My Projects</Text> */}
                <Grid
                    templateColumns={gridColumnTemplate}
                    templateRows={gridRowTemplate}
                    gap={6}
                    height={'100%'}
                >
                    {/* Place your grid items here */}
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={isMobile ? '95%' : '500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: isMobile ? '100%' : '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <ShippingBusComponent />
                        </Box>
                        <Text style={textStyle}>Logistic Application</Text>
                        <Box style={iconList as any}>
                            <Icon as={BiLogoReact} w={9} h={9} />
                            <Icon as={TbBrandReactNative} w={8} h={8} />
                            <Icon as={SiReactquery} w={8} h={8} />
                            <Icon as={BiLogoGraphql} w={8} h={8} />
                            <Icon as={TbBrandTypescript} w={8} h={8} />
                            <Icon as={SiGooglemaps} w={8} h={8} />
                        </Box>
                    </GridItem>
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={isMobile ? '95%' : '500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: isMobile ? '100%' : '450px',
                            height: isMobile ? 'fit-content' : '300px',
                            // border: '1px solid black'
                        }}>
                            <TruckComponent />
                        </Box>
                        <Text style={textStyle}>Part time at Logisoft</Text>
                        <Box style={iconList as any}>
                            <Icon as={BiLogoAngular} w={9} h={9} />
                            <Icon as={SiGooglemaps} w={8} h={8} />
                            <Icon as={TbBrandTypescript} w={8} h={8} />
                        </Box>
                    </GridItem>
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={isMobile ? '95%' : '500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: isMobile ? '100%' : '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <HanbiroComponent />
                        </Box>
                        <Text style={textStyle}>Intern at Hanbiro</Text>
                        <Box style={iconList as any}>
                            <Icon as={BiLogoReact} w={9} h={9} />
                            <Icon as={SiReactquery} w={8} h={8} />
                            <Icon as={BiLogoGraphql} w={8} h={8} />
                            <Icon as={TbBrandTypescript} w={8} h={8} />
                        </Box>
                    </GridItem>
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={isMobile ? '95%' : '500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: isMobile ? '100%' : '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <NoteComponent />
                        </Box>
                        <Text style={textStyle}>Todo List with React and Mongoose</Text>
                        <Box style={iconList as any}>
                            <Icon as={BiLogoReact} w={9} h={9} />
                            <Icon as={BiLogoMongodb} w={8} h={8} />
                            <Icon as={SiReactquery} w={8} h={8} />
                        </Box>
                    </GridItem>
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={isMobile ? '95%' : '500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: isMobile ? '100%' : '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <NoteComponent />
                        </Box>
                        <Text style={textStyle}>Todo List with Xamarin and SQLite</Text>
                        <Box style={iconList as any}>
                            <Icon as={TbBrandXamarin} w={9} h={9} />
                            <Icon as={DiSqllite} w={8} h={8} />
                        </Box>
                    </GridItem>
                    <GridItem bg={'rgba(130, 129, 146, 0.2)'}
                        width={isMobile ? '95%' : '500px'}
                        height={'400px'}
                        display={"flex"}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        borderRadius={'lg'}
                        _hover={{
                            background: 'linear-gradient(180deg, #FECDED 20%, #FE9CA1 100%)'
                        }}
                    >
                        <Box style={{
                            width: isMobile ? '100%' : '450px',
                            height: '300px',
                            // border: '1px solid black'
                        }}>
                            <ComputerComponent />
                        </Box>
                        <Text style={textStyle}>WITU social with Near and React</Text>
                        <Box style={iconList as any}>
                            <Icon as={BiLogoReact} w={9} h={9} />
                            <NearIcon w={9} h={9} />
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
};
export default WorkComponent;