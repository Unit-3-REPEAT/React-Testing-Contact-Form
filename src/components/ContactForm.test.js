import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';


 //Import everything you need -- ARRANGE
  //Act calling a render function -- ACT
  //Making an assertion that app will run without any error -- ASSERT

test("Check if ContactForm renders without crashing", () => {
    render(<ContactForm />);
});

test('All the inputs are in the document', () => {

    //ARRANGE
    const {getByPlaceholderText, getByLabelText, getElementById} = render(<ContactForm />)

    //ACT
    //grab with getByPlaceholderText
    const firstNameInput = getByPlaceholderText(/edd/i);
    const lastNameInput = getByPlaceholderText(/burke/i);

    //grab with getByLabelText
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);
    const submitButton = getElementById(/submit/i);

    //ASSERT
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    

    //types into input      
    fireEvent.change(firstNameInput, {target: {value: "Dino" }});
    fireEvent.change(lastNameInput, {target: {value: 'Muratovic'}});
    fireEvent.change(emailInput, {target: {value: 'dinodino@yahoo.com'}});
    fireEvent.change(messageInput, {target: {value: 'Test test the message text area'}});    

    //clicks the button
    
    fireEvent.click(submitButton);
 });