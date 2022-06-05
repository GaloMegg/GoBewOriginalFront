import React, { useState } from 'react';  
import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { TextInput } from '../form/TextInput';
import * as Yup from 'yup';
import { CREATION_USERFORM } from '../../redux/actions';
import { toast, success } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateUserForm () {
  const back = useNavigate();
    const dispatch = useDispatch();
    const resUser = useSelector((state)=> state.clientReducer.userResponse)
    return (
        <div>
            <h1> Crear Usuario</h1>
            <Formik
      initialValues={{
                  userEmail:'',
                  userPassword: '',
                  userFirstName:"",
                  userLastName:"",
                }}
      validationSchema={Yup.object({
        userEmail: Yup.string()
          .email('El email es inválido.')
          .required('Requerido.'),
        userPassword: Yup.string().min(6, 'Requerida'),
        userFirstName: Yup.string()
        .min(2, 'El nombre es muy corto!')
        .max(50, 'El nombre es muy largo!')
        .required("Requerido."),
        userLastName: Yup.string()
        .min(2, 'El apellido es muy corto!')
        .max(50, 'El apellido es muy largo!')
        .required("Requerido.")
    })
    }
    onSubmit={(values, actions) => {
      dispatch(CREATION_USERFORM(values))
      toast.success("Usuario creado con exito")
      back("/logIn")
    }}
    >
        {props => (
        <Form>
          <TextInput label='e-mail' name='userEmail' type='email' placeholder='e-mail'/>
          <TextInput label='password' name='userPassword' type='password' placeholder='password'/>
          <TextInput label="nombre" name= "userFirstName" type="nombre" placeholder= "nombre"/>
          <TextInput label="apellido" name= "userLastName" type="apellido" placeholder= "apellido"/>
          <button type="submit">Continuar</button>
          {resUser.ok && toast.success("Usuario creado con exito")}
          

        </Form>
      )}

    </Formik>
        </div>
    )
}