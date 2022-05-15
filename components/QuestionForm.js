import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

 import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Textarea,
  Button,
} from '@chakra-ui/react'
 
 export default function SignupForm() {
  return (
    <Formik
      initialValues={{ question: '', name: '', email: '' }}
      validationSchema={Yup.object({
        question: Yup.string()
          .min(1, 'Must a min of 1 character')
          .required('Required'),
        name: Yup.string()
          .min(1, 'Must a min of 1 character')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={async (values) => {
        try {
          await fetch(`/api/postQuestion`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          })
        } catch (err) {
          console.error(err)
        }
    }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel>Question</FormLabel>
            <Textarea 
              id='question'
              type='text'
              placeholder='Feel free to ask your question here' 
              {...formik.getFieldProps('question')}
            />
            {formik.touched.question && formik.errors.question ? (
              <div>{formik.errors.question}</div>
            ) : null}

            <FormLabel pt='4'>Name</FormLabel>
            <Input 
              id='name' 
              type='name'
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <FormLabel htmlFor='email' pt='4'>Email Address</FormLabel>
            <Input 
              id='email' 
              type='email'
              {...formik.getFieldProps('email')} 
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <FormHelperText>I&apos;ll never share your email.</FormHelperText>
              <Flex justify='flex-end'>
                <Button
                  mt={4}
                  variant='outline'
                  isLoading={formik.isSubmitting}
                  type='submit'
                >
                  Submit
                </Button>
              </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
 };