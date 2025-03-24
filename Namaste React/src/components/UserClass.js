import React from 'react';
import { UserContext } from '../context/UserContext';

export class UserClass extends React.Component {

    /**
     * LIFECYCLE METHODS EXECUTION
     * 
     * ---- Mounting Phase ----
     * Constructor is called
     * "Render" method is called with dummy data
     * componentDidMount will be called - This will end the mounting phase
     *           where API call will happen and
     *             State variable will be updated
     * 
     * --- Updating Phase -----
     * SetState was called with (API DATA)
     * "Render" method is called with (API DATA)
     * componentDidUpdate will be called now at the end because state was changed now
     * 
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        console.log("constructor ", props);
        this.state = {
            count: 100,
            count2: 6666,
            // Initializing the userinfo in the state
            userInfo: {
                name: "",
                location: "",
                avatar_url: "https://www.google.com",
                login: ""
            }
        }
    }

    async componentDidMount() {
        console.log("Component did mount" , this.props)
        // Make API call here so that render method is called prios
        // and it renders the UI first and then aPI call is made
        let res = await fetch("https://api.github.com/users/aarzootrehan");
        let data = await res.json();
        console.log("Setting state now in did Mount ", this.props);
        // Updating the state
        this.setState({
            userInfo: data
        })
    }   

    componentDidUpdate() {
        console.log("Component has been updated")
    }

    render() {
        console.log("Render method", this.props)
        // Destructing the props to display in a cleaner way
        const {fName} = this.props;
        const {name, login, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                Class based component
                <h4>Count is {this.state.count}</h4>
                <span>Count2 is : {this.state.count2}</span>
                <h3>Name: {this.state.userInfo.login}</h3>
                <h3>Location: {this.props.location}</h3>
                <img src={avatar_url}/>
                <h4>Contact: abc@gmail.com</h4>
                <button onClick={() => {
                    // How to update the state variable
                    this.setState({
                        count: this.state.count+5
                    })
                }}>Confirm</button>

                Hello 
                <UserContext.Consumer>
                    {(({loggedInUser}) => <h1>I am {loggedInUser}</h1>)}
                </UserContext.Consumer>
            </div>
        )
    }
}