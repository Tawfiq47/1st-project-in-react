import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";



class Menu extends Component {
    state = {
        dishes: DISHES,
        onDishSelect: null,
        modalOpen: false
    }
    onDishSelect = dish => {
        this.setState({ 
            selectedDish: dish ,
            modalOpen: !this.state.modalOpen 
        })
        
    }
    modalToggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }



    render() {
       
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} DishSelect={() => this.onDishSelect(item)} />
            );
        })
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} >
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.modalToggle} color="warning">Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
};

export default Menu;