import { Form, Formik } from 'formik';
import { TextInput } from '../form/TextInput';
import * as Yup from 'yup';
import axios from "axios";
import { useState } from 'react';
const { REACT_APP_APIURL } = process.env;
export const RememberPassword = () => {
  
  const [ok, setOk] = useState('')

  const sendMailResetPass = async (values) => {
    try {
      console.log(`${REACT_APP_APIURL}users/resetPass`)
      console.log(values)
      const response = await axios.post(`${REACT_APP_APIURL}users/resetPass`, values);
      console.log(response)
      if(response.data.ok){
        setOk(response.data.msg)
      } else {
        setOk(response.data.msg)
      }

    } catch (error) {
      console.log(error)
        setOk('Ha ocurrido un error, por favor intente nuevamente.')
    }
  }

  return (

  <div >
    <span>{ ok }</span>
    <Formik
      initialValues={{ userEmail:'' }}
      validationSchema={Yup.object({
        userEmail: Yup.string()
          .email('Debes ingresar un email válido')
          .required('Debes ingresar tu email para reestablecer la contraseña')
        })
    }
    onSubmit={(values, actions) => {
      
      sendMailResetPass(values)
      
    }}
    
    >
      {props => (
        <section >
          <Form >
            <div >
              <h1>REESTABLECER CONTRASEÑA</h1>
            </div>
            <div >
              <TextInput name='userEmail' type='email' placeholder='e-mail'/>
            </div>
            <div>
              <button type="submit">Enviar</button>
            </div>

            
          </Form>
        </section>
      )}
    </Formik>
    
  </div>
)};