class Button extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.initialCount);
        console.log('getInitialState');
        this.state = {
            data: 0
        }
    }

    setNewNumber() {
        this.setState({data: this.state.data + 1});
        if (this.state.data === 2) {
            ReactDOM.unmountComponentAtNode(document.getElementById('content'));
            return;
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.setNewNumber.bind(this)}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}

Button.defaultProps = {initialCount: 0};

class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps() {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate() {
        console.log('should Component Update!');
        return true;
        // return false;
    }

    componentWillUpdate() {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate() {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
                {console.log('render')}
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Button />
    </div>,
    document.getElementById('content')
);

// ReactDOM.render(
//     <div>
//         <Button />
//     </div>,
//     document.getElementById('try')
// );