import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import LoadComments from "./LoadComments";


const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ margin: "10px 0px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle> 
                        <CardText>{props.dish.description}</CardText>
                        <CardText>category: {props.dish.category}</CardText>
                        <CardText>price: {props.dish.price}/-</CardText>
                        <CardText>label: {props.dish.label}</CardText>  
                        <hr/>
                        <LoadComments comments={props.dish.comments}/>
                </CardBody>
            </Card>

        </div>
    );
}

export default DishDetail