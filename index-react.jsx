const React = require('react')
const ReactDOM = require('react-dom')

class User extends React.Component {
    render() {
        return (
            <div>
                <span style={{backgroundColor: this.props.color}}>{this.props.id}</span>
            </div>
        )
    }
}

const companyColor = '#7f007f'

class NavBar extends React.Component {
    render() {
        const style = {
            height: '20px',
            width: '100vw',
        }

        return (
            <div style={style}>
                <button>asdf</button>
                <a>asdf</a>
            </div>
        )
    }


}

class Component extends React.Component {
    render() {
        return (
            <div style={{height: '100vh'}}>
                <button onClick={() => this.onLikeButtonClik()}>click me to like somone</button>
            </div>
        )
    }

    onLikeButtonClik() {
        fetch('/user/' + 'ivan', {
            method: "POST",
            body: {
                reason: "because he is an asshole"
            }
        })
            .then(res => res.json())
            .then(console.log)
    }
}

ReactDOM.render(<Component/>, document.getElementById('parent'))