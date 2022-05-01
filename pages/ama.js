import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box
  } from '@chakra-ui/react'

export default function Ama() {
    return (
        <Box w='50%'>
            <FormControl>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input id='email' type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
        </Box>
    )
}