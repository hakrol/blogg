import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../common/FormError";
import { useState } from "react";

const schema = yup.object().shape({
    firstname: yup
        .string()
        .required("Please enter your firstname")
        .min(3, "The message must be at least 3 characters"),
    lastname: yup
        .string()
        .required("Please enter your lastname")
        .min(4, "The message must be at least 4 characters"),
    email: yup
        .string()
        .required("Please enter an email address")
        .email("Please enter a valid email address"),
    message: yup
        .string()
        .required("Please write your message")
        .min(10, "The message must be at least 10 characters"),
    ageGroup: yup
        .number()
        .oneOf([1, 2, 3, 4, 5])
        .typeError("Please select age group"),
});

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
        setSubmitted(true);
    }

    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {submitted && (
                <Alert variant="success">
                    Your registration was successful
                </Alert>
            )}
            <Form.Group controlId="firstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                    name="firstname"
                    placeholder="Enter firstname"
                    ref={register}
                />
                {errors.firstname && (
                    <ValidationError>
                        {errors.firstname.message}
                    </ValidationError>
                )}
            </Form.Group>
            <Form.Group controlId="lastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                    placeholder="Enter lastname"
                    name="lastname"
                    ref={register}
                />
                {errors.lastname && (
                    <ValidationError>{errors.lastname.message}</ValidationError>
                )}
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    ref={register}
                />
                {errors.email && (
                    <ValidationError>{errors.email.message}</ValidationError>
                )}
            </Form.Group>
            <Form.Group controlId="age-group">
                <Form.Label>Age Group</Form.Label>
                <Form.Control
                    as="select"
                    ref={register}
                    name="ageGroup"
                    defaultValue="Choose"
                >
                    <option hidden>Choose</option>
                    <option value="1">0 - 20</option>
                    <option value="2">21- 40</option>
                    <option value="3">41 - 60</option>
                    <option value="4">61 - 80</option>
                    <option value="5">80+</option>
                </Form.Control>
                {errors.ageGroup && (
                    <ValidationError>{errors.ageGroup.message}</ValidationError>
                )}
            </Form.Group>
            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your message"
                    name="message"
                    ref={register}
                />
                {errors.message && (
                    <ValidationError>{errors.message.message}</ValidationError>
                )}
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
