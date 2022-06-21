import { Form, Formik } from 'formik';
import { TextInput } from '../form/TextInput';
import * as Yup from 'yup';
import axios from "axios";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHECK_GOOGLE_MAIL } from '../../redux/actions';
import { toast } from 'react-toastify';
const { REACT_APP_APIURL } = process.env;

export const RememberPassword = () => {
  const { userResponse } = useSelector(store => store.clientReducer);
  const dispatch = useDispatch();
  const [ok, setOk] = useState('')
  const [info, setInfo] = useState("")
  const [check, setcheck] = useState(false);
  let usuarioDeGoogle = ""
  const sendMailResetPass = async (values) => {
    try {
      const response = await axios.post(`${REACT_APP_APIURL}users/resetPass`, values);
      if (response.data.ok) {
        setOk(response.data.msg)
      } else {
        setOk(response.data.msg)
      }
    } catch (error) {
      setOk('Ha ocurrido un error, por favor intente nuevamente.')
    }
  }
  if (check && userResponse.ok && userResponse.userIsGoogle) {
    usuarioDeGoogle = "Usted creo su usuario con google, no puede cambiar su contraseña"
  } else if (check && userResponse.ok && !userResponse.userIsGoogle) {
    sendMailResetPass(info)
    toast.success("Mail enviado")
    setcheck(false)
  }
  return (
    <div >
      <span>{ok}</span>
      <Formik
        initialValues={{ userEmail: '' }}
        validationSchema={Yup.object({
          userEmail: Yup.string()
            .email('Debes ingresar un email válido')
            .required('Debes ingresar tu email para reestablecer la contraseña')
        })
        }
        onSubmit={(values, actions) => {
          dispatch(CHECK_GOOGLE_MAIL(values.userEmail))
          setcheck(true)
          setInfo(values)
        }}
      >
        {props => (
          <section >
            <Form className='changePasswordForm' >
              <h1>REESTABLECER CONTRASEÑA</h1>
              <TextInput name='userEmail' type='email' placeholder='e-mail' />
              <button type="submit">Enviar</button>
              {usuarioDeGoogle && <p>{usuarioDeGoogle} </p>}
            </Form>
          </section>
        )}
      </Formik>
    </div>
  )
};
