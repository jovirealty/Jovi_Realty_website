import { useEffect } from "react";

const useRecaptcha = (siteKey) => {
    useEffect(() => {
        if(!window.grecaptcha) {
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
    }, [siteKey]);

    const getToken = async (action='submit') => {
        if(!window.grecaptcha){
            throw new Error('reCAPTCHA not yet loaded');
        }
        return await window.grecaptcha.execute(siteKey, { action });
    };
    return getToken;
};

export default useRecaptcha;