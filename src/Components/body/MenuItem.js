import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import './menu.css'

const MenuItem = (props) => {
    // console.log(props);
    return (
        <div>
            <Card style={{ margin: "10px 0px" }}>
                <CardBody>
                    <CardImg width="100%" src={props.dish.image} alt={props.dish.name}></CardImg>
                    <CardImgOverlay>
                        <CardTitle className="card-t" onClick={props.DishSelect}> {props.dish.name} </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>


        </div>
    )

}


export default MenuItem