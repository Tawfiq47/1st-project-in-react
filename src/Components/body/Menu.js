import React, { Component } from "react";
// import DISHES from "../../data/dishes";    
// import COMMENTS from "../../data/comments";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux"; 
import { addComment } from "../../redux/actionCreators";




const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) =>  dispatch(addComment(dishId, rating, author, comment))
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
                <MenuItem dish={item} key={item.id}
                 DishSelect={() => this.onDishSelect(item)} />
            );
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id
            )
            dishDetail = <DishDetail
                dish={this.state.selectedDish}
                comments={comments}
                addComment={this.props.addComment} />

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

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
// export default connect(mapStateToProps, null, null, { context: mapDispatchToProps })(Menu);
