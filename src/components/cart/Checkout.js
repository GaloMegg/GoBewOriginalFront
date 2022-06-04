import React, { useEffect } from 'react';
const FORM_ID = 'payment-form';

// ! test CARD = {
// !   num: 5031 7557 3453 0604   ,
// !    cvv: 123,
// !    vencimiento: 11 / 25,
// ! }
// ! Martinez Mirtha
// ! 23011111114



export default function Checkout({ id }) {
    useEffect(() => {
        // con el preferenceId en mano, inyectamos el script de mercadoPago
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src =
            'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
        script?.setAttribute('data-preference-id', id);
        const form = document?.getElementById(FORM_ID);
        form?.appendChild(script);
        return () => {
            const formu = document?.getElementById(FORM_ID)
            formu?.removeChild(script);
        }
    }, [id]);
    return (< form id={FORM_ID} method="GET" />);

}