class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }

    handleClick() {
        this.setState({liked: !this.state.liked});
    }

    render() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <div>
                <p onClick={this.handleClick.bind(this)}>
                    You {text} this. Click to toggle.
                </p>
                <DislikeButton liked={this.state.liked}/>
            </div>
        );
    }
}

class DislikeButton extends React.Component {
    // handleClick() {
    //     this.props.liked = !this.props.liked;
    // }

    render() {
        var text = this.props.liked ? 'haven\'t liked' : 'like';

        return <div>
            {<p>You {text} this.</p>}
            {/*<p onClick={this.handleClick.bind(this)}> You {text} this.</p>*/}
        </div>;
    }
}


ReactDOM.render(
    <LikeButton />
    ,
    document.getElementById('content')
);