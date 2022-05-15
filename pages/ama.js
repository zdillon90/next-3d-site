import React from 'react'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import Question from '../components/Question'
import QuestionForm from '../components/QuestionForm'
import {
    Box,
    Center,
    Heading,
    Flex,
    Divider,
  } from '@chakra-ui/react'

const prisma = new PrismaClient()

// Send an email once I answer a question using edge functions
// Be able to remove questions from the list


export async function getServerSideProps() {
    const questions = await prisma.question.findMany({
        where: { answered: true },
    })
    return { props: { questions } }
}

function QuestionList ({ questions }) {
    return (
        <Flex flexDirection="column">
            {questions.slice(0).reverse().map(question => (
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

export default function Ama({ questions }) {
    return (
    <>
        <Link href="/" passHref>
          <a style={{ color: '#d3d3d3', position: 'absolute', top: 40, left: 40, fontSize: '20px' }}>ZHD</a>
        </Link>
        <Center>
            <Box 
                w='80vh' 
                p='10' 
                overflowY="auto" 
                maxHeight="100vh"
                sx={{
                    '&::-webkit-scrollbar': {
                      width: '16px',
                      borderRadius: '8px',
                      backgroundColor: `rgba(0, 0, 0, 0.05)`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: `rgba(0, 0, 0, 0.05)`,
                    },
                  }}
            >
                    <Heading p='2'>Ask Me Anything</Heading>
                        <QuestionForm />
                        <Center height='50px'>
                            <Divider orientation='horizontal' />
                        </Center>
                    <Heading p='2'>Questions</Heading>
                <QuestionList questions={questions} />
            </Box>
        </Center>
    </>
    )
}