import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { object, string, number, date, InferType, boolean } from "yup";

const products = ["Sweater", "Keybord", "Sofa", "Freezer"];

const validationSchema = object({
  product: string().required("Please, select a product").oneOf(products),
  name: string().required(),
  email: string().email().required(),
  title: string().required(),
  review: string().required(),
  rating: number().min(1).max(10).required(),
  date: date().default(() => new Date()),
  wouldRecommend: boolean().default(false),
});

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = {
  product: "",
  name: "",
  email: "",
  title: "",
  review: "",
  rating: "",
  date: new Date(),
  wouldRecommend: false,
};

export class ProductReviewForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor="name">Full name</label>
            <div>
              <Field name="name" type="text" placeholder="Full name" />
              <FormError name="name" />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <div>
              <Field name="email" type="email" placeholder="Email address" />
              <FormError name="email" />
            </div>
          </div>
          <div>
            <label htmlFor="product">Product</label>
            <div>
              <Field name="product" as="select">
                <option value="">Select a product</option>
                {products.map((product, idx) => (
                  <option value={product} key={idx}>
                    {product}
                  </option>
                ))}
              </Field>
              <FormError name="product" />
            </div>
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <div>
              <Field name="title" type="text" placeholder="Title" />
              <FormError name="title" />
            </div>
          </div>
          <div>
            <label htmlFor="review">Review</label>
            <div>
              <Field name="review" as="textarea" placeholder="Review" />
              <FormError name="review" />
            </div>
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <div>
              <Field name="rating" type="number" placeholder="Rating" />
              <FormError name="rating" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="wouldRecommend">
                <Field
                  name="wouldRecommend"
                  type="checkbox"
                  placeholder="Full name"
                />
                WouldRecommend
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
}

export default ProductReviewForm;
