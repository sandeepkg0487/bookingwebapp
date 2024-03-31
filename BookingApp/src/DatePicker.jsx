import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const DatePicker = () => {


    const [value, setValue] = useState({ 

        startDate: new Date(), 
        endDate: new Date().setMonth(11) 
        
        }); 
        
        const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
        
        } 

    return (
        <Datepicker 
        minDate={ new Date().toISOString().split('T')[0]}
       
        value={value} 
        onChange={handleValueChange} 
        
        /> 
        
        )
}

export default DatePicker














