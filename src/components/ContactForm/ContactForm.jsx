import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(7)
    .max(18)
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Phone number is not valid! Example: 111-11-11"
    )
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.fieldContainer}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="div"
          />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.formInput}
            type="tel"
            placeholder="111-11-11"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="div"
          />
        </div>

        <button className={css.btnSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
