import React, { useEffect } from 'react'
const FORM_ID = 'payment-form';

const MPButton = ({ id }) => {
    useEffect(() => {
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
    return (
        < form id={FORM_ID} method="GET" className='checkoutContainer--btn' />
    )
}

export default MPButton