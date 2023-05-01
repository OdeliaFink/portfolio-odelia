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
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    comments: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', comments: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginInline: '10rem',
            border: '1px solid black',
            padding: '2rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '50%', marginRight: '1rem' }}>
              <label htmlFor="firstName">First Name:</label>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                style={{
                  marginBlock: '1rem',
                  border: '2px solid black',
                  borderRadius: '10px',
                  height: '1.5rem',
                  width: '100%',
                }}
              />
              <ErrorMessage name="firstName" />
            </div>

            <div style={{ width: '50%' }}>
              <label htmlFor="lastName">Last Name:</label>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                style={{
                  marginBlock: '1rem',
                  border: '2px solid black',
                  borderRadius: '10px',
                  height: '1.5rem',
                  width: '100%',
                }}
              />
              <ErrorMessage name="lastName" style={{ color: 'red' }} />
            </div>
          </div>

          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            name="email"
            id="email"
            style={{
              border: '2px solid black',
              borderRadius: '10px',
              height: '1.5rem',
            }}
          />
          <ErrorMessage name="email" style={{ color: 'red' }} />

          <label htmlFor="comments">Comments:</label>
          <Field
            as="textarea"
            name="comments"
            id="comments"
            style={{
              border: '2px solid black',
              borderRadius: '10px',
              height: '3rem',
              paddingBlock: '2rem',
              marginBlock: '1rem',
            }}
          />
          <ErrorMessage name="comments" />
          <div style={{ width: '80%', textAlign: 'center' }}>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
