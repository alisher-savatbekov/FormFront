import  Button  from 'react-bootstrap/Button';
import * as formik from 'formik';
import * as yup from 'yup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Regist(){
    const {Formik}=formik;
    const schema = yup.object().shape({
        username: yup.string().min(2, "At least 2 characters").required("Username is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().min(6, "At least 6 characters").required("Password is required"),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password"), null], "Passwords must match")
          .required("Confirm password is required"),
      });
    return(

        <div>
            <Formik
                    validationSchema={schema}
                    onSubmit={(values)=>{
                        console.log(values)
                    }
                        
                    }
                initialValues={
                 {
                    username:"",
                    password:"",
                    confirmPassword:"",
                    email:"",
                 }
                }
            >
                {
                    ({handleSubmit,handleChange,errors,values,touched})=>
                    (
                        <Form onSubmit={handleSubmit}
                        validateOnChange={true} // Отключает валидацию при каждом изменении
                        validateOnBlur={false}    // Валидация произойдет при потере фокуса
                        noValidate>
                            <FloatingLabel controlId='floatingUsername' label="UserName" className='mb-3' >
                                <Form.Control type="text" name="username" 
                                value={values.username}
                                placeholder='UerName'
                                onChange={handleChange} 
                                isInvalid={
                                    !!errors.username && touched.username
                                }
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.username}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId='floatingEmil' label="Email Adress" className='mb-3'>
                                <Form.Control
                                type='email'
                                 placeholder='name@example.com'
                                 onChange={handleChange}
                                 name="email"
                                 value={values.email}
                                 isInvalid={!!errors.email && touched.username}
                                />
                                <Form.Control.Feedback type='invalid'>
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
                                <Form.Control.Feedback type='invalid'>
                                    {errors.password}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            
                            <FloatingLabel contolId="floatingConfirmPassword" label="ConfirmPassword" className='mb-3'>
                                <Form.Control 
                                placeholder='ConfirmPassword'
                                onChange={handleChange}
                                name="confirmPassword"
                                type='password'
                                value={values.confirmPassword}
                                isInvalid={!!errors.confirmPassword && touched.confirmPassword}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <Button type="submit">Submit</Button>
                        </Form>
                    )
                }       
            </Formik>
        </div>
    )

}
export default Regist;