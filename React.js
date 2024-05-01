import React from 'react';
import $ from 'jquery';



export default class PersonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.firstName} {this.state.LastName}</h1>
      </div>
    );
  }

  fetch() {
    var context = this;
  
    $.ajax({
      url: 'http://localhost:3000',
      method: 'GET',
      success: function(response) {
        context.setState({
          firstName: response.firstName,
          lastName: response.lastName
        });
      }
    });
  }

  componentDidMount() {
    this.fetch();
  }
}

