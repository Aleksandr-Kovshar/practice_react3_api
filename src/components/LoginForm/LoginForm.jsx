import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import styled from 'styled-components';
import { object, string, number, date, InferType } from "yup";

const schema = object({
  login: string().required(),
  password: string().required().min(6).max(16),
});
const initialValues = {
  login: '',
  password:''
}

const Input = styled(Field)`
  color: red;
`




const LoginForm = () => {

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">Login</label>
        <Input type="text" name="login" />
        <ErrorMessage component="div" name="login" />
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" />
        <ErrorMessage component="div" name="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

// const LoginForm = () => {

//  const handleSubmit = (e) => {
//    e.preventDefault();
//    const {login, password} = e.target.elements
//    console.log(login.value , password.value);
//  };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="login">Login</label>
//       <input type="text" name="login" />
//       <label htmlFor="password">Password</label>
//       <input type="password" name="password" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

export default LoginForm;
