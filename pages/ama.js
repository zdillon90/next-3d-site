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
  } from '@chakra-ui/react'

export default function Ama() {
    return (
        <Center>
            <Box w='50vh' m='20'>
                <Heading p='2'>Ask Me Anything</Heading>
                    <FormControl>
                        <FormLabel>Question</FormLabel>
                        <Textarea placeholder='Feel free to ask your question here' />
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' />
                        <FormHelperText>I'll never share your email.</FormHelperText>
                    </FormControl>
                    <Center height='50px'>
                        <Divider orientation='horizontal' />
                    </Center>
                <Heading p='2'>Questions</Heading>
                <Box p="5"  borderWidth="2px">
                    <Flex align="baseline" mt={2}>
                        <Badge colorScheme="pink">Q</Badge>
                        <Text
                            ml={2}
                            // textTransform="uppercase"
                            fontSize="md"
                            fontWeight="bold"
                            // color="pink.800"
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