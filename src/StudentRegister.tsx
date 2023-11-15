import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const StudentRegister = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        age: undefined,
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "the name should be less than 15 characters")
          .required("the name is required"),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values));
        }, 4000);
      }}
    >
      <Form>
        <div>
          <Field type="name" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default StudentRegister;
