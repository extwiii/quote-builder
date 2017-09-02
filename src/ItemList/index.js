import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';

function ItemList(props) {
  const {
    lists,
    amend,
    editStatus,
    edit,
    onNameChange,
    onPriceChange,
    addItem } = props;

  const totalQuote = lists.reduce((total, list) => total + list.price, 0);

  return (
    <div >
      {lists.map(list => (
        <ul key={list.id} className="list">
          { edit ?
            <div className="item-list">
              <input
                className="item-list-input"
                type="text"
                value={list.name}
                onChange={e => onNameChange(list.id, e)}
              />
              <input
                className="item-list-input"
                type="number"
                value={list.price}
                onChange={e => onPriceChange(list.id, e)}
              />
            </div> :
            <div className="item-list">
              <h4 className="item-list-name">{list.name}</h4>
              {amend ?
                <div className="item-list-edit">
                  <h4 className="item-list-price">£ {list.price}</h4>
                  <button className="item-list-edit-button" onClick={editStatus} >edit</button>
                </div> :
                <h4 className="item-list-price">£ {list.price}</h4>
              }
            </div>
          }
        </ul>
      ),
      )}
      {
        amend &&
        <div className="item-list-add">
          <button className="item-list-add-button" onClick={addItem}> + Add quote item</button>
        </div>
      }
      <div className="item-list-total">
        <h4 >Total quote (excl. VAT)</h4>
        <h4 className="item-list-price">£ {totalQuote * 0.8}</h4>
      </div>
      <div className="item-list-total">
        <h4 >VAT</h4>
        <h4 className="item-list-price">£ {totalQuote * 0.2}</h4>
      </div>
      <div className="item-list-total">
        <h4 >Total quote (incl. VAT)</h4>
        <h1 className="item-list-price-total">£ {totalQuote}</h1>
      </div>
    </div>
  );
}

ItemList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  amend: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  editStatus: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ItemList;
