import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup';
type UserRegistrationData = {
    firstname: string;
    lastname: string;
    age: string;
    email: string;
    password: string;
}
const UserRegistration = () => {

    const initialValues: UserRegistrationData = {
        firstname: '',
        lastname: '',
        age: '',
        email: '',
        password: '',
    }

    return <Formik

        initialValues={initialValues}
        validationSchema={Yup.object({
            firstname: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastname: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            age: Yup.string()
              .min(2, 'Must be 2 characters or more')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min( 5, 'Must be 5 characters or more').required('Required'),
          })}
        // validate={(values)=>{
        //     let errors = initialValues;
        //     if(!values.firstname) {
        //         errors = {...errors, firstname: 'firstname is required' }
        //     }
        //     if(!values.lastname) {
        //         errors = {...errors, lastname: 'lastname is required' }
        //     }
        //     if(!values.age) {
        //         errors = {...errors, age: 'age is required' }
        //     }
        //     if(!values.email) {
        //         errors = {...errors, email: 'email is required' }
        //     }
        //     if(!values.password) {
        //         errors = {...errors, password: 'password is required' }
        //     }

        //     console.log(errors)

        //     return errors
        // }}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                console.log(values)
                setSubmitting(false);
                resetForm();
              }, 4000);
        }}
    >
{/* 
            // ({values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
            //     <form onSubmit={handleSubmit}>
            //         <div>
            //             <input type="text" name="firstname" placeholder="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur} />
            //             <span>{errors.firstname && touched.firstname && errors.firstname}</span>
            //         </div>
            //         <div>
            //             <input type="text" name="lastname" placeholder="lastname" value={values.lastname} onChange={handleChange} onBlur={handleBlur} />
            //             {errors.lastname && touched.lastname && errors.lastname}
            //         </div>
            //         <div>
            //             <input type="text" name="age" placeholder="age" value={values.age} onChange={handleChange} onBlur={handleBlur} />
            //             {errors.age && touched.age && errors.age}
            //         </div>
            //         <div>
            //             <input type="text" name="email" placeholder="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            //             {errors.email && touched.email && errors.email}
            //         </div>
            //         <div>
            //             <input type="password" name="password" placeholder="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
            //             {errors.password && touched.password && errors.password}
            //         </div>
            //         <div>
            //             <button type="submit" disabled={isSubmitting}>submit </button>
            //         </div>
            //     </form>
            // ) */}
                <Form>
                    <div>
                        <Field type="text" name="firstname" placeholder="firstname"   />
                        <ErrorMessage name="firstname" component="div" className="error-field" />
                    </div>
                    <div>
                        <Field type="text" name="lastname" placeholder="lastname" />
                        <ErrorMessage name="lastname" component="div" />
                    </div>
                    <div>
                        <Field type="text" name="age" placeholder="age" />
                        <ErrorMessage name="age" component="div" />
                    </div>
                    <div>
                        <Field type="text" name="email" placeholder="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <Field type="text" name="password" placeholder="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                        <button type="submit" >
                            Submit
                        </button>
                    </div>
                </Form>
    </Formik>
}

export default UserRegistration;