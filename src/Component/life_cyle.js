import React, { PureComponent } from 'react';

class Life extends PureComponent {

    // 1 GET  DEFAULT  props

    // 2 Set Deafault state
    state = {
        title: "Life cyclessssssssssssssssssssssss"
    }

    // // 3 Before render
    // UNSAFE_componentWillMount() {
    //     console.log("3 Befroe render")
    // }
    // UNSAFE_componentWillUpdate(){
    //     console.log("BEFORE UPDATE")
    // }

    //Evaluate the code before update
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextState.title === this.state.title)
    //     {
    //         return false;
    //     }

    //     return true;
    // }
    // //to check if parent component is sending new props
    //     UNSAFE_componentWillReceiveProps(){
    //     console.log("BEFROE RECEIVING")
    // }
    // componentWillUnmount(){
    //     console.log("UNMOUNT")
    // }
 

    // // 4 rend jxs
    render() {
        console.log("RENDER")
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div
                    onClick={() => this.setState({ title: "something else" })}>
                    Click to change
                </div>
            </div>
        )
    }
    // // 5 After render
    // componentDidMount() {
    //     console.log("5 After render")
    //     document.querySelector("h1").style.color = "blue"
    // }
    // componentDidUpdate(){
    //     console.log("AFTER UPDATE")
    // }
}

export default Life;