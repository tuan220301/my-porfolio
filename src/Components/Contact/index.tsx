import { Box, Center, Icon, Img, Link, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import avatar from '../../images/img/left_ava.jpg';
import { AiOutlinePhone, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdOutgoingMail } from 'react-icons/md';
const ContactComponent = () => {
    const textLeft = {
        fontFamily: 'monospace',
        fontSize: '20px',
        fontWeight: 'bold',
        marginLeft: 5
    };
    const textRight = {
        fontFamily: 'monospace',
        fontSize: '20px',
        fontWeight: 'bold',
        paddingRight: 10
    };
    const handleCopyEmail = () => {
        const email = "tuannguyen220301@gmail.com"; // Replace this with your actual email
        navigator.clipboard.writeText(email);
    };
    return (
        <Center style={{
            width: "100%",
            height: "100vh",
            // paddingTop: "56px",
            background: 'linear-gradient(180deg, rgba(255, 231, 205, 1) 0%, #121120 100%)',
        }}>
            <Box style={{
                width: 1200,
                height: 'fit-content',
                backgroundColor: "rgba(255, 231, 205, 0.8)",
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box style={{
                    width: '35%',
                    justifyItems: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    // border: '1px solid black',
                    padding: 10,
                    margin: 'auto'
                }}>
                    <Box height={'fit-content'} >
                        <Img src={avatar} borderRadius={'10'} />
                    </Box>
                </Box>
                <Box width={'63%'} height={'fit-content'}>

                    <Box width={'100%'}>
                        <Text marginBottom={10} textAlign={'center'} fontSize={30} fontWeight={'bold'} fontFamily={"mono"}>
                            Information
                        </Text>
                        <Box style={{
                            display: 'flex',
                            flexDirection: 'column',
                            // justifyContent: 'space-between',
                            gap: 30,
                            alignItems: 'center',
                            padding: 10
                        }}>

                            <Box style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Icon as={AiOutlinePhone} w={8} h={8} />
                                    <Text style={textLeft}>Phone Number: </Text>
                                </Box>
                                <Text style={textRight}>0901422185</Text>
                            </Box>
                            <Box style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Icon as={MdOutgoingMail} w={8} h={8} />
                                    <Text style={textLeft}>Email: </Text>
                                </Box>
                                <Tooltip label="Click to copy" hasArrow>
                                    <Text style={textRight} onClick={handleCopyEmail}>
                                        <span style={{ cursor: "pointer" }} >tuannguyen220301@gmail.com</span>
                                    </Text>
                                </Tooltip>
                            </Box>
                            <Box style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Icon as={AiFillGithub} w={8} h={8} />
                                    <Text style={textLeft}>Github: </Text>
                                </Box>
                                <Text style={textRight}>
                                    <Link href="https://github.com/tuan220301" isExternal>tuan220301</Link>
                                </Text>
                            </Box>
                            <Box style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Icon as={AiFillLinkedin} w={8} h={8} />
                                    <Text style={textLeft}>Linkedin: </Text>
                                </Box>
                                <Text style={textRight}>
                                    <Link href="https://www.linkedin.com/in/tu%E1%BA%A5n-nguy%E1%BB%85n-aa064a237/" isExternal>Tuấn Nguyễn</Link>
                                </Text>
                            </Box>
                            <Box width={'100%'} height={'fit-content'} >
                                <Text textAlign={'center'} fontSize={30} fontFamily={"mono"} fontWeight={'bold'}>About Me</Text>
                                <Text fontFamily={'mono'}>
                                    I am a senior at University Of Information Technology school with my major is Japan-oriented
                                    Information Technology. As an enthusiastic and responsible person. I would like to apply for
                                    Frontend internship position at the HCLTech company. I had been working for Logisoft CO and
                                    had gained significant experience there. I am quite confident that I will be able to contribute
                                    greatly to your company.
                                </Text>
                                <br />
                                <Text fontFamily={'mono'}>
                                    I will do my best to grow and commit all requirements and follow the rules of the company.
                                    Hopefully I will have a chance to be part of your excellent team. I am looking forward to meet
                                    and here more details from you</Text>

                            </Box>
                        </Box>

                    </Box>

                </Box>

            </Box>

        </Center >
    );
};
export default ContactComponent;