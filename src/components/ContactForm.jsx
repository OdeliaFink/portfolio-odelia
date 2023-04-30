import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ContactForm = () => {
  const handleSubmit = async (values, actions) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      comments: values.comments,
    };
    console.log(data); // for debugging purposes only

    try {
      const response = await axios.post(
        'https://formspree.io/f/mvonlged',
        data
      );

      if (response.status === 200) {
        alert('Thank you for your submission!');
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again later.');
    }

    actions.setSubmitting(false);
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    comments: Yup.string().required('Comments is required'),
  });

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', comments: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="firstName">First Name:</label>
          <Field type="text" name="firstName" id="firstName" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" name="lastName" id="lastName" />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" />

          <label htmlFor="comments">Comments:</label>
          <Field as="textarea" name="comments" id="comments" />
          <ErrorMessage name="comments" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
