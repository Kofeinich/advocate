import * as React from "react"
import {Box, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {useState} from "react";
import {useEffect} from "react";

export const PlusIcon = ({width, margin}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const itemHoverColor = '#F06449'
    const [itemColor, setItemColor] = useState(color)
    useEffect(() => {
        setItemColor(color)
    },[useColorMode()])
    return <Box
        w={width}
        m={margin}
        _hover={{
            cursor: 'pointer'
        }}
        onMouseOver={(target) => {
            setItemColor(itemHoverColor)
        }}
        onMouseLeave={() => {
            setItemColor(color)
        }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={itemColor}
            width={width}
            height={width}
        >
            <path d="M0 14h30M15 30V0" stroke={itemColor} strokeWidth={2} />
        </svg>
    </Box>
}