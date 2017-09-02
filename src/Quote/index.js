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
    edit: false,
  };

  onNameChange = (id, e) => {
    const updateList = this.state.lists.map((list) => {
      if (id === list.id) {
        return {
          ...list,
          name: e.target.value,
        };
      }

      return list;
    });

    this.setState({
      lists: updateList,
    });
  };

  onPriceChange = (id, e) => {
    const updateList = this.state.lists.map((list) => {
      if (id === list.id) {
        return {
          ...list,
          price: parseInt(e.target.value, 10) || 0,
        };
      }

      return list;
    });

    this.setState({
      lists: updateList,
    });
  };

  addItem = () => {
    const addItem = [...this.state.lists, {
      id: this.state.lists.length + 1,
      name: '',
      price: 0,
    }];

    this.setState({
      lists: addItem,
      edit: true,
    });
  };

  amendStatus = () => {
    this.setState(prevState => ({
      amend: !prevState.amend,
    }));
  };

  editStatus = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }));
  };

  updateStatus = () => {
    this.setState({
      amend: false,
      edit: false,
    });
  };

  resetStatus = () => {
    this.setState({
      lists: Lists,
      amend: false,
      edit: false,
    });
  };

  updateProduct = () => {
    console.log('update');
  };

  render() {
    const { lists, amend, edit } = this.state;

    return (
      <div className="Quote">
        <Title header="Quote details" amend={amend} amendStatus={this.amendStatus} />
        <ItemList
          lists={lists}
          amend={amend}
          edit={edit}
          editStatus={this.editStatus}
          updateProduct={this.updateProduct}
          onNameChange={this.onNameChange}
          onPriceChange={this.onPriceChange}
          addItem={this.addItem}
        />
        {
          amend && <Update updateStatus={this.updateStatus} resetStatus={this.resetStatus} />
        }
      </div>
    );
  }
}

export default Quote;
