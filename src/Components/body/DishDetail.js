import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ margin: "10px 0px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}/-</p>
                        </CardText>
                </CardBody>
            </Card>

        </div>
    );
}

export default DishDetail