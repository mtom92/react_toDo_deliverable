import React , { Component } from 'react';

class ListItem extends Component {
  render() {
    
    return (
    <li> {this.props.content} </li>
    )
  }
}

export default ListItem;
