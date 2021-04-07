import { Component } from "react";

export default class ClassCount extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        count: 0,
    };

    add = () => {
        const count = this.state.count;
        this.setState({ count: count + 1 });
    };

    dec = () => {
        const count = this.state.count;
        this.setState({ count: count - 1 });
    };

    render() {
        console.log(this)
        return (
            <div>
                <p>c-lass count {this.state.count}</p>
                <button onClick={this.add}>+1</button>
                <button onClick={this.dec}>-1</button>
            </div>
        );
    }
}
