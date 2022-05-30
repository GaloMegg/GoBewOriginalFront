import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { POST_IMAGE_ADMIN } from "../../../redux/actions";

export default function CreationImage() {
    const [img, setImg] = useState([]);
    const dispatch = useDispatch()
    const product = useSelector((state) => state.adminReducer.product)
    console.log(product.data)

    const uploadImage = (files) => {
        const formData = new FormData()
        img.forEach(ele => {
            formData.append("file", ele)
            formData.append("upload_preset", "eh329sqm")
            axios.post("https://api.cloudinary.com/v1_1/gobew10/image/upload", formData)
                .then((res) => {
                    console.log("es aca")
                    console.log(res.data)
                    dispatch(POST_IMAGE_ADMIN({
                        productId: product.data.product.productId,
                        imageName: res.data.secure_url,
                        imageAlt: product.data.product.productName,
                    }))
                })
            });
    }
    function handleDeleteImg(e) {
        let res = img.filter(pic => pic.name !== e.target.name)
        setImg(res)
    }

    return (
        <div>
            <label>Imagen: </label>
            <input type="file" placeholder="Nombre..." onChange={(e) => {
                setImg([...img, e.target.files[0]]);
                console.log(img)
            }} />
            <ul>
                <li>{img.map(pic => <li> {pic.name}
                    <button type="button" key={pic.name} name={pic.name} onClick={(e) => handleDeleteImg(e)}>X</button>
                </li>)}
                </li>
            </ul>
            <button type="button" onClick={uploadImage}> Subir Imagen Prueba</button>
            {/* <span>{error.productImage}</span> */}
        </div>
    )
}