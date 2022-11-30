import * as React from 'react'
import {Box, Flex, Text, useColorModeValue} from "@chakra-ui/react";

export const AdvertingCard = ({icon, text, number}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    return (
        <Flex
            justify={ 'left'}
            alignItems={'center'}
            w={'280px'}
            h={'120px'}
            p={'16px'}
            border={`1px solid ${color}`}
            m={'15px'}
        >
            {icon}
            <Box
                ml={'15px'}
                w={'100%'}
            >
                <Text
                    textAlign={'center'}
                    color={'#F06449'}
                    fontSize={'40px'}
                    lineHeight={'60px'}
                    fontFamily={`'Prata', serif`}
                >
                    {number}
                </Text>
                <Text
                    textAlign={'center'}
                    color={color}
                    fontSize={'16px'}
                    lineHeight={'30px'}
                    fontFamily={`'Jost', sans-serif`}
                >
                    {text}
                </Text>
            </Box>

        </Flex>
    )
}