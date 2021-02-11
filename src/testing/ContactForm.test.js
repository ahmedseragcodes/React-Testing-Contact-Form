import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import ContactForm from "../components/ContactForm";

test("Contact Form component renders without error", ()=>{

    render(<ContactForm />);
})

test("Contact Form inputs can be filled out", ()=>{
    render (<ContactForm />);

    const firstNameInput=screen.getByLabelText(/first name/i);

    const lastNameInput=screen.getByLabelText(/last name/i);

    const emailInput=screen.getByLabelText(/email/i);

    const messageInput=screen.getByLabelText(/message/i);

    const submitButton=screen.getByRole("button", {type: /submit/ });

    userEvent.type(firstNameInput, "Ahm");

    userEvent.type(lastNameInput, "serag");

    userEvent.type(emailInput, "Ahmed@LambdaSchool.com");

    userEvent.type(messageInput, "test");

    userEvent.click(submitButton);

    const nameText=screen.getByText("serag");

    expect(nameText).toBeInTheDocument();
})