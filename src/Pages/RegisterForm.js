import React from "react";
import { useParams } from 'react-router-dom';

import { Widget } from '@typeform/embed-react'

import RegisterData from '../Data/Register.json';

const RegisterForm = (props)=> {
    const {id} = useParams();
    const currEvent = RegisterData.find(obj=> obj.path === id);
    return(
        <Widget id={currEvent.formId} style={{ width: '100%',height:'100vh' }} className="my-form" />
    )
}

export default RegisterForm;