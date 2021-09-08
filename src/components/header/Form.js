import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyle'

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <FormContainer onSubmit={handleSubmit}>
                <FoodInput type="text" placeholder="Search" />
                <Button>Search</Button>
                <Select name="mealTypes" id="mealTypes"></Select>
            </FormContainer>
        </div>
    )
}

export default Form
