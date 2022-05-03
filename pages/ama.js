import React, { useState } from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Center,
    Heading,
    Text,
    Badge,
    Flex,
    Textarea,
    Divider,
    Button,
  } from '@chakra-ui/react'


// Send an email once I answer a question using edge functions

export default function Ama() {
    const [question, setQuestion] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <Center>
            <Box w='50vh' m='20'>
                <Heading p='2'>Ask Me Anything</Heading>
                    <FormControl>
                        <FormLabel>Question</FormLabel>
                        <Textarea id='question' placeholder='Feel free to ask your question here' />
                        <FormLabel>Name</FormLabel>
                        <Input id='name' type='email' />
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' />
                        <FormHelperText>I'll never share your email.</FormHelperText>
                        <Flex justify='flex-end'>
                            <Button
                                mt={4}
                                bg='white'
                                variant='outline'
                                // isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Submit
                            </Button>
                        </Flex>
                    </FormControl>
                    <Center height='50px'>
                        <Divider orientation='horizontal' />
                    </Center>
                <Heading p='2'>Questions</Heading>
                <Box p="5"  borderWidth="2px">
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                    >
                        Name
                    </Text>
                    <Flex align="baseline" mt={2}>
                        <Badge colorScheme="pink">Q</Badge>
                        <Text
                            ml={2}
                            // textTransform="uppercase"
                            fontSize="md"
                            // fontWeight="bold"
                            color="pink.800"
                        >
                            What do you call a fish wearing a bow tie?
                        </Text>
                    </Flex>
                    <Flex align="baseline" mt={2}>
                        <Badge colorScheme="green">A</Badge>
                        <Text
                            ml={2}
                            // textTransform="uppercase"
                            fontSize="md"
                            // fontWeight="bold"
                            // color="pink.800"
                        >
                            Sofishticated
                        </Text>
                    </Flex>
                </Box>
            </Box>
        </Center>
    )
}