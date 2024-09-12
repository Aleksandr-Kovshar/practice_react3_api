import { Formik, Form, Field } from "formik";

export const MaterialEditorForm = ({onSubmit, isSubmitting}) => {
    const handleSubmit = (values, actions) => {
        onSubmit(values);
        actions.resetForm();
    }


  return (
    <Formik
      initialValues={{ title: "", link: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Описание <Field name="title" type="text" />
        </label>
        <label>
          Ссылка <Field name="link" type="text" />
        </label>
        <button type="submit" disabled={isSubmitting}>Добавить материалы</button>
      </Form>
    </Formik>
  );
};
