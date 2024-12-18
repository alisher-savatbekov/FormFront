import { Button,FloatingLabel,Form } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';



function Regist(){
    const {Formik}=formik;
    const schema=yup.object().shape({

            username:yup.string().min(2).required(),
            
            email:yup.string().required(),
            
            password:yup.string().min(6,"at least minmum 6 symbol").required(),
            
            confirmPassword:yup.string.oneOf([yup.ref("password",null)]).required(),

            terms:yup.bool().required.onOf([true],'Term must be accepted')
    });

    


    return(

        <div>
            <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                initialValues={
                 {
                    username:"",
                    password:"",
                    confirmPassword:"",
                    email:"",
                    terms:false

                 }
                }

            >
                {
                    ()=>
                    (
                        <Form>
                            <FloatingLabel controlId='floatingUsername' label="UserName" className='mb-3'>
                                <Form.Control/>
                            </FloatingLabel>

                            <FloatingLabel controlId='floatingEmil' label="Email Adress" className='mb-3'>
                                <Form.Control/>
                            </FloatingLabel>
                            
                            <FloatingLabel controlId='floatingPassword' label="Password" className='mb-3'>
                                <Form.Control/>
                            </FloatingLabel>
                            
                            <FloatingLabel contolId="floatingConfirmPassword" label="ConfirmPassword" className='mb-3'>
                                <Form.Control/>
                            </FloatingLabel>
                            <Button type="submit">Registrate</Button>
                        </Form>
                    )
                }
                

            </Formik>
        </div>
    )

}
export default Regist;