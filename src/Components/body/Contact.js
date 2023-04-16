import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: ""
        }
    }

    handleInputChange = event =>{
        const value = event.target.type === 'checkbox'? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event =>{
        console.log(this.state);
        event.preventDefault();
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}> First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" placeholder="enter your first name" value={this.state.firstname}
                                    onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}> Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" placeholder="enter your last name" value={this.state.lastname}
                                    onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}> Contact tel.</Label>
                                <Col md={10}>
                                    <Input type="number" name="telnum" placeholder="tel num." value={this.state.telnum} 
                                    onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}> Your Email</Label>
                                <Col md={10}>
                                    <Input type="email" name="email" placeholder="enter your email" value={this.state.email} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check className="checkbox">
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} />
                                            <strong>may we contact you? </strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>tel.</option>
                                        <option>email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}> your feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" placeholder="your message" name="message" value={this.state.message} rows="7" onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">send feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </div>
            </div>
        );
    }

}

export default Contact