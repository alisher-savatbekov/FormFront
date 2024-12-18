// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import "./auth.css"
// import * as formik from 'formik';
// import * as yup from 'yup';
// import  Button  from 'react-bootstrap/Button';

// function Login() {
//   const {Formik} = formik;
//   const schema=yup.object().shape(
//       {
//           email:yup.string("Invalid Email").required("Email is required"),
//           pasword:yup.string().min(6,"At least 6 symbol").required("password is required")
//       }
//   );
//   return (
//     <div className="form-auth">
//         <Formik
//         validationSchema={schema}  onSubmit={(values)=>{  console.log(values)}}  initialValues={{ email:"", password:""}}
//         >
//           {
//             ({handleSubmit,handleChange,errors,values,touched})=>({
             
//             <Form 
//               className="form-submit" 
//               onSubmit={handleSubmit}
//               validateOnChange={true}
//               validateOnBlur={false}
//               noValidate>
//                 <h2>Log In</h2>

//                 <FloatingLabel label="Email adress">
//                     <Form.Control
//                     type="email"
//                     placeholder="username@example.com"

//                     />
//                 </FloatingLabel>


//               </Form>
//               })
//           }

//         </Formik>
      
//       <FloatingLabel
//         controlId="floatingInput"
//         label="Email address"
//         className="mb-3"
//       >
//         <Form.Control type="email" placeholder="name@example.com" />
//       </FloatingLabel>
//       <FloatingLabel controlId="floatingPassword" label="Password">
//         <Form.Control type="password" placeholder="Password" />
//       </FloatingLabel>
//     </div>
//   );
// }

// export default Login;