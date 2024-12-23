import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./auth.css"
import * as formik from 'formik';
import * as yup from 'yup';
import  Button  from 'react-bootstrap/Button';

function Login() {
  const {Formik} = formik;
  const schema=yup.object().shape(
      {
          email:yup.string().email("Invalid Email").required("Email is required"),
          password:yup.string().min(6,"At least 6 symbol").required("password is required")
      }
  );
  return (
    <div className="form-auth">
        <Formik
        validationSchema={schema}
        onSubmit={(values)=>{  console.log(values)}}  
        initialValues={
        {
          email:"",
          password:""
        }
        }
        >
          {
            ({handleSubmit,handleChange,errors,values,touched})=>(
             
            <Form 
            className="form-submit"
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}    
            noValidate>
                <h2>Log In</h2>

                <FloatingLabel controlId='floatingEmail' label="Email Adress" className='mb-3'>
                                <Form.Control
                                 type='email'
                                 name="email"
                                 placeholder='name@example.com'
                                 onChange={handleChange}
                                 value={values.email}
                                 isInvalid={!!errors.email && touched.email}
                                />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    {errors.email}
                                </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel controlId='floatingPassword' label="Password" className='mb-3'>
                                <Form.Control
                                placeholder='Paasword'
                                onChange={handleChange}
                                type='password'
                                name="password"
                                value={values.password}
                                isInvalid={!!errors.password && touched.password}
                                />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    {errors.password}
                                </Form.Control.Feedback>
                 </FloatingLabel>
                <Button className='submit-button' type='submit'>Log in</Button>
              </Form>
            )
          }
        </Formik>
    </div>
  );
}
export default Login;