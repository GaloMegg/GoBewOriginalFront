import { useField, ErrorMessage } from 'formik'
export const TextInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <input {...field}  {...props} placeholder={label} />
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}
