import React, { useState } from 'react'

const useDataCollection = () => {

    const [data, setDatacollection] = useState({})
    const [phoneNumber, setPhoneNumber] = useState('');

    function inputEventHandler(e) {
        const { name, value } = e.target
        setDatacollection(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const reset = () => {
        setDatacollection({})
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
    }




    const phoneEventHandler = (event) => {
        const formattedPhoneNumber = event.target.value.replace(/\D/g, '');
        setPhoneNumber(formattedPhoneNumber);
    }


    return {
        inputEventHandler,
        reset,
        data,
        handleFormSubmit, 
        phoneEventHandler,
        phoneNumber
    }
}

export default useDataCollection