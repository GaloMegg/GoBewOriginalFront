import { useField, ErrorMessage } from 'formik'

//Text input type puede ser text, email, password o number
<<<<<<< HEAD
export const TextInput = ({label, ...props}) => {
    const [ field ] = useField(props);
  return (
    <>
        <label htmlFor={ props.id || props.name }>{ label }</label>
        <input {...field}  {...props} />
        <ErrorMessage name={props.name} component='span'/>
=======
export const TextInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      {/* <label htmlFor={ props.id || props.name }>{ label }</label> */}
      <input {...field}  {...props} placeholder={label} />
      <ErrorMessage name={props.name} component='span' />
>>>>>>> 95987f389fddb4975a2b987bb88198d63a65c19f
    </>
  )
}
