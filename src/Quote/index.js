import React, { Component } from 'react';
import ItemList from '../ItemList';
import Title from '../Title';
import Update from '../Update';
import Lists from './list.json';
import './Quote.css';

class Quote extends Component {
  state = {
    lists: Lists,
    amend: false,
  };

  amendStatus = () => {
    this.setState(prevState => ({
      amend: !prevState.amend,
    }));
  };

  render() {
    const { lists, amend } = this.state;

    return (
      <div className="Quote">
        <Title header="Quote details" amend={amend} amendStatus={this.amendStatus} />
        <ItemList lists={lists} amend={amend} />
        {
          amend && <Update />
        }
      </div>
    );
  }
}

export default Quote;
