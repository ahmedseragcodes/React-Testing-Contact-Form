import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "../App";


test("App component renders without error", ()=>{
    render(<App />);


})
test ("Heading on App Component exists and renders without error", ()=>{
    render(<App />);

    const headingContainer=screen.getByText(/Contact Form/i);

    expect(headingContainer).toBeInTheDocument();
})