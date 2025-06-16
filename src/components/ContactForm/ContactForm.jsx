import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact({ ...values, id: nanoid() }));
        actions.resetForm();
      }}
    >
      <Form className={s.form}>
        <label>
          Name:
          <Field name="name" />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>
        <label>
          Number:
          <Field name="number" />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>
        <button type="submit">Add Contacts</button>
      </Form>
    </Formik>
  );
}
