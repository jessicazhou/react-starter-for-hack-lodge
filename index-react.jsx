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
        fetch('/user/ivan', {
            method: "GET",
            body: {
                reason: "because he is an asshole"
            }
        })
       // then(function(res){return res.json();})    
       // then(function(data){alert(JSON.stringify(data))})
            .then(res => res.json())
            .then(console.log)
    }
}

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

//ReactDOM.render(<Component/>, document.getElementById('parent'))

ReactDOM.render(<NameForm/>,document.getElementById('parent'))

//<User/>, <NavBar/>, <NameForm/>,