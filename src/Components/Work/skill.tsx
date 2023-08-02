import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandXamarin, TbBrandCss3, TbBrandJavascript, TbBrandCSharp, TbBrandPython, TbBrandReactNative } from 'react-icons/tb';
import { FaRust } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { BiLogoCPlusPlus, BiLogoReact, BiLogoAngular } from 'react-icons/bi';
const SkillComponent = () => {
    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
        }}>
            <Box>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    textAlign: 'center',
                    marginBottom: 10
                }}>Languages and technologies</Text>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <HStack style={{
                        padding: 5,
                        gap: 20
                    }}>
                        <Icon as={AiOutlineHtml5} w={14} h={14} />
                        <Icon as={TbBrandCss3} w={14} h={14} />
                        <Icon as={TbBrandJavascript} w={14} h={14} />
                        <Icon as={FaRust} w={14} h={14} />
                        <Icon as={TbBrandCSharp} w={14} h={14} />
                        <Icon as={BiLogoCPlusPlus} w={14} h={14} />
                        <Icon as={TbBrandPython} w={14} h={14} />
                    </HStack>
                    <HStack style={{
                        padding: 5,
                        gap: 20
                    }}>
                        <Icon as={BiLogoReact} w={14} h={14} />
                        <Icon as={TbBrandReactNative} w={14} h={14} />
                        <Icon as={SiMongodb} w={14} h={14} />
                        <Icon as={TbBrandXamarin} w={14} h={14} />
                        <Icon as={BiLogoAngular} w={14} h={14} />
                        {/* <Icon as={BiLogoCPlusPlus} w={14} h={14} />
                        <Icon as={TbBrandPython} w={14} h={14} /> */}
                    </HStack>
                </Box>
            </Box>

        </Box>
    );
};
export default SkillComponent;