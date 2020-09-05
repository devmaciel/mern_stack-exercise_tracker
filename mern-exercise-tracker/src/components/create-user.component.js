import React, { Component } from 'react';

export default class CreateUsers extends Component {

    //Constructor
    constructor(props){
        super(props);

        //Binds (old version sintax, newers version have other sintax with autobinding) 
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //States
        this.state = {
            username: ''
        }
    }


    //Methods Setter
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    //My Methods
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        this.setState({
            username: ''
        });

    }


    //Render
    render(){
        return(
            <div>
               <h3>Create New User</h3>
               <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label htmlFor="inputUsername">Username: </label>
                        <input type="text" name="inputUsername" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>

               </form> 
            </div>
        )
    }
}