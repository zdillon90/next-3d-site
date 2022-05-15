import React, { useState } from 'react'
import useSWR from 'swr'
import {
    Box,
    Text,
    Badge,
    Flex,
} from '@chakra-ui/react'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function useGetUser (id) {
    const { data, error } = useSWR(`/api/user/${id}`, fetcher)

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
    }
}
  
export default function Question({question, answer, userId}) {
    const { user, isLoading, isError } = useGetUser(userId)
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Failed to Load</div>
    return (
        <Box p="5"  borderWidth="2px">
            <Text
                fontSize="l"
                // fontWeight="bold"
            >
                Asker: {user.name}
            </Text>
            <Flex align="baseline" mt={2}>
                <Badge colorScheme="pink">Q</Badge>
                <Text
                    ml={2}
                    // textTransform="uppercase"
                    fontSize="md"
                    // fontWeight="bold"
                    color="pink.500"
                >
                    {question}
                </Text>
            </Flex>
            <Flex align="baseline" mt={2}>
                <Badge colorScheme="green">A</Badge>
                <Text
                    ml={2}
                    // textTransform="uppercase"
                    fontSize="md"
                    // fontWeight="bold"
                    color="green.500"
                >
                    {answer}
                </Text>
            </Flex>
        </Box>
    )
}