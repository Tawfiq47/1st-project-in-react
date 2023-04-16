import React, { Component } from "react";
import DISHES from "../../data/dishes";    
import COMMENTS from "../../data/comments";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}



class Menu extends Component {
    state = {
        // dishes: DISHES,
        // comments: COMMENTS,
        onDishSelect: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });

    }
    modalToggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    


    render() {
        document.title = "Menu";
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} DishSelect={() => this.onDishSelect(item)} />
            );
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.state.comments.filter(comment => comment.dishId === this.state.selectedDish.id
            )
            dishDetail = <DishDetail
                dish={this.state.selectedDish}
                comments={comments} />

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

export default connect(mapStateToProps) (Menu);