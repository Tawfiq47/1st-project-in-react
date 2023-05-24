import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(val);


class Contact extends Component {

    handleSubmit = values => {
        console.log(values);
    } 

    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: '20px' }}>
                    <div className="col-12">
                        <h3>send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}> First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" name="firstname" placeholder="enter your first name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" name="lastname" placeholder="enter your last name" className="form-control"
                                        validators={{
                                            required
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}> Contact tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" name="telnum" placeholder="tel num." className="form-control"
                                        validators={{
                                            required,
                                            isNumber
                                        }} />

                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required, ",
                                                isNumber: "Invalid Number"
                                            }
                                        }
                                    />

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}> Your Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" name="email" placeholder="enter your email" className="form-control" validators={{
                                        required,
                                        validEmail
                                    }} />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required, ",
                                                validEmail: "Invalid Email"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check className="checkbox">
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input" />
                                            <strong>may we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>tel.</option>
                                        <option>email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}> your feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" placeholder="your message" name="message" rows={5} className="form-control"
                                        validators={{
                                            required
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">send feedback</Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </div>

                </div>
            </div>
        );
    }

}

export default Contact