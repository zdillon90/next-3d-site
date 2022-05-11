import React, { useState } from 'react'
import useSWR from 'swr'
import { useFormik } from 'formik'
// import prisma from '../lib/prisma'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
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
    useColorMode
  } from '@chakra-ui/react'

const prisma = new PrismaClient()

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

function QuestionList ({ questions }) {
    return (
        <Flex flexDirection="column">
            {questions.map(question => (
                <Question 
                    key={question.id}
                    userId={question.userId}
                    question={question.question} 
                    answer={question.answer} 
                />
            ))}
        </Flex>
    )
}


function QuestionForm () {
    const formik = useFormik({
        initialValues: {
            question: '',
            name: '',
            email: '',
        },
        onSubmit: async (values) => {
            // alert(JSON.stringify(values, null, 2))
            try {
                // const body = { question, name, email }
                await fetch(`/api/postQuestion`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                })
            } catch (err) {
                console.error(err)
            }
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>Question</FormLabel>
                <Textarea 
                    id='question'
                    type='text'
                    placeholder='Feel free to ask your question here' 
                    onChange={formik.handleChange}
                    value={formik.values.question}
                />
                <FormLabel>Name</FormLabel>
                <Input 
                    id='name' 
                    type='name'
                    onChange={formik.handleChange} 
                    value={formik.values.name}
                />
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input 
                    id='email' 
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <FormHelperText>I&apos;ll never share your email.</FormHelperText>
                <Flex justify='flex-end'>
                    <Button
                        // disabled={!question || !name || !email}
                        mt={4}
                        // bg='white'
                        variant='outline'
                        // isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Submit
                    </Button>
                </Flex>
            </FormControl>
        </form>
    )
}

export default function Ama({ questions }) {
    const [question, setQuestion] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // console.log(questions)
    // console.log(users)
    // const { questions, isLoading, isError } = useGetQuestions()
    const { colorMode, toggleColorMode } = useColorMode()

    return (
    <>
        <Link href="/" passHref>
          <a style={{ color: '#d3d3d3', position: 'absolute', top: 40, left: 40, fontSize: '20px' }}>ZHD</a>
        </Link>
        <Center>
            <Box w='80vh' p='10' overflowY="auto" maxHeight="100vh">
                <header>
                    <Button onClick={toggleColorMode}>
                        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                    </Button>
                </header>
                <Heading p='2'>Ask Me Anything</Heading>
                    <QuestionForm />
                    <Center height='50px'>
                        <Divider orientation='horizontal' />
                    </Center>
                <Heading p='2'>Questions</Heading>
                <QuestionList questions={questions} />
                {/* <Question 
                    question={questions[0].question} 
                    answer={questions[0].answer} 
                /> */}
            </Box>
        </Center>
    </>
    )
}