import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
const { REACT_APP_APIURL } = process.env

const ReviewForm = ({ orderId, productId, userId }) => {

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                reviewStars: "1",
                reviewComment: "",

                userId,
                productId,
                orderId,
            }}
            onSubmit={(values) => {
                fetch(`${REACT_APP_APIURL}reviews`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                }).then(res => res.json())
                    .then(data => {
                    }).catch(err => err)
            }}
            validationSchema={Yup.object().shape({
                reviewStars: Yup.number().min(1).max(5).required("La calificación es requerida"),
                reviewComment: Yup.string().required("El comentario es requerido"),
                orderId: Yup.string().required("El id de la orden es requerido"),
                productId: Yup.string().required("El id del producto es requerido"),
                userId: Yup.string().required("El id del usuario es requerido")
            })}
        >
            {
                (formik) => (
                    <Form className='New'>
                        <p>Añade una nueva dirección</p>
                        <Field type="radio" name="reviewStars" className={formik.values.reviewStars >= "1" ? "selected" : "nothing"} id="reviewStars" value="1" />
                        <Field type="radio" name="reviewStars" className={formik.values.reviewStars >= "2" ? "selected" : "nothing"} id="reviewStars" value="2" />
                        <Field type="radio" name="reviewStars" className={formik.values.reviewStars >= "3" ? "selected" : "nothing"} id="reviewStars" value="3" />
                        <Field type="radio" name="reviewStars" className={formik.values.reviewStars >= "4" ? "selected" : "nothing"} id="reviewStars" value="4" />
                        <Field type="radio" name="reviewStars" className={formik.values.reviewStars >= "5" ? "selected" : "nothing"} id="reviewStars" value="5" />
                        {formik.errors.reviewStars && <p className="error">{formik.errors.reviewStars}</p>}
                        <Field as="textarea" name="reviewComment" label='Descripción' className="textArea" placeholder='Descripción de envío' />
                        {formik.errors.reviewComment && <p className="error">{formik.errors.reviewComment}</p>}
                        <button type='submit'> AGREGAR NUEVA DIRECCIÓN</button>
                    </Form >
                )
            }
        </Formik >
    )
}

export default ReviewForm