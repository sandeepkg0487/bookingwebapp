import React, { useState } from 'react'

const useDataCollection = () => {

    const [data, setDatacollection] = useState({})

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
    
    return {
        inputEventHandler,
        reset,
        data,
        handleFormSubmit
    }
}

export default useDataCollection