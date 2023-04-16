import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";
import { connect } from "react-redux";


const mapDispatchToProps = dispatch =>{
    return{
        addComment: (dishId, rating, author, comment) => dispatch({
            type: 'ADD_COMMENT',
            payload:{
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}


class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        // console.log(this.state);

        this.props.addComment(
            this.props.dishId,
            this.props.rating,
            this.props.author,
            this.props.comment
        );

        this.setState({
            author: '',
            rating: '',
            comment: ''
        });
        event.preventDefault();
    }



    render() {
        console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input type="text" name="author" placeholder="your name"
                        value={this.state.author} required
                        onChange={this.handleInputChange} />
                    <br />
                    <Input style={{ width: "100%", margin: "10px 0px" }} type="select" name="rating" value={this.state.rating} onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />

                    <Input type="textarea" name="comment" value={this.state.comment} placeholder="your message" required onChange={this.handleInputChange}>
                    </Input>
                    <br />

                    <Button type="submit" >submit comment</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps) (CommentForm);