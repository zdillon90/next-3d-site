import React, { useState } from 'react'
import useSWR from 'swr'
import prisma from '../lib/prisma'
import Question from '../components/Question'
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
// Be able to remove questions from the list

const fetcher = (...args) => fetch(...args).then(res => res.json())

// function useGetQuestions () {
//     const { data, error } = useSWR('/api/getQuestions', fetcher)
    
//     return {
//         questions: data,
//         isLoading: !error && !data,
//         isError: error,
//     }
// }

function useGetUser (id) {
    const { data, error } = useSWR(`/api/user/${id}`, fetcher)

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
    }
}

export async function getServerSideProps() {
    const questions = await prisma.question.findMany()
    return { props: { questions } }
}

export default function Ama({ questions }) {
    const [question, setQuestion] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // console.log(questions)
    // console.log(users)
    // const { questions, isLoading, isError } = useGetQuestions()
    const { user, isLoading, isError } = useGetUser(3)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const body = { question, name, email }
        await fetch(`/api/postQuestion`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            })
        } catch (err) {
            console.error(err)
        }
    }

    if (isLoading) return <div>failed to load</div>
    if (isError) return <div>loading...</div>

    return (
        <Center>
            <Box w='50vh' m='20'>
                <Heading p='2'>Ask Me Anything</Heading>
                    <FormControl>
                        <FormLabel>Question</FormLabel>
                        <Textarea 
                            id='question' 
                            placeholder='Feel free to ask your question here' 
                            onChange={e => setQuestion(e.target.value)}
                        />
                        <FormLabel>Name</FormLabel>
                        <Input 
                            id='name' 
                            type='email'
                            onChange={e => setName(e.target.value)} 
                        />
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input 
                            id='email' 
                            type='email'
                            onChange={e => setEmail(e.target.value)} 
                        />
                        <FormHelperText>I&apos;ll never share your email.</FormHelperText>
                        <Flex justify='flex-end'>
                            <Button
                                disabled={!question || !name || !email}
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
                <Question 
                    question={questions[0].question} 
                    answer={questions[0].answer} 
                />
            </Box>
        </Center>
    )
}