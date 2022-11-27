import * as React from 'react'
import {Box, Flex, Text} from "@chakra-ui/react";
import {Title} from "./title/Title";
import Arrow from "../../../svg/arrow.svg" ;
import {HeadingStyled} from "../styled/HeadingStyled";

export const Titles = () => {

    const topTitles = [
        {
            desc: 'Арбитражное дело о взыскании задолженности по договору поставки',
            text: 'Также как дальнейшее развитие различных форм деятельности однозначно фиксирует необходимость переосмысления внешнеэкономических политик. Вот вам яркий пример современных тенденций — постоянный количественный рост и сфера нашей активности выявляет срочную потребность новых принципов формирования материально-технической и кадровой базы. ',
        },
        {
            desc: 'Арбитражное дело о взыскании задолженности по договору поставки',
            text: 'Также как дальнейшее развитие различных форм деятельности однозначно фиксирует необходимость переосмысления внешнеэкономических политик. Вот вам яркий пример современных тенденций — постоянный количественный рост и сфера нашей активности выявляет срочную потребность новых принципов формирования материально-технической и кадровой базы. ',
        },
        {
            desc: 'Арбитражное дело о взыскании задолженности по договору поставки',
            text: 'Также как дальнейшее развитие различных форм деятельности однозначно фиксирует необходимость переосмысления внешнеэкономических политик. Вот вам яркий пример современных тенденций — постоянный количественный рост и сфера нашей активности выявляет срочную потребность новых принципов формирования материально-технической и кадровой базы. ',
        }
    ]


    return <Flex
        as={'section'}
        flexDirection={'column'}
        w={'100%'}
        maxW={'1120px'}
        position={'relative'}
        mt={'50px'}
    >
        <HeadingStyled text={'Моя Практика'}/>
        {topTitles.map((item, index) =>
            <Title key={index} text={item.text} desc={item.desc}/>
        )}
        <Flex
            position={'relative'}
            mt={'60px'}
            w={'100%'}
            justify={'right'}
            pr={'50px'}
        >
            <Text>
                Читать все кейсы
            </Text>
            <Box
                ml={'20px'}
            >
                <Arrow/>
            </Box>
        </Flex>
    </Flex>
}