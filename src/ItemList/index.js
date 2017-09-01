import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';

function ItemList(props) {
  const { lists, amend } = props;

  const totalQuote = lists.reduce((total, list) => total + list.price, 0);

  return (
    <div >
      {lists.map(list => (
        <ul key={list.id} className="item-list">
          <h4 className="item-list-name">{list.name}</h4>
          {amend ?
            <div className="item-list-edit">
              <h4 className="item-list-price">£ {list.price}</h4>
              <button >edit</button>
            </div> :
            <h4 className="item-list-price">£ {list.price}</h4>

          }
        </ul>
      ),
      )}
      {
        amend &&
        <h4 className="item-list-price"> + Add quote item</h4>
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
        <h1 className="item-list-price">£ {totalQuote}</h1>
      </div>
    </div>
  );
}

ItemList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  amend: PropTypes.bool.isRequired,
};

export default ItemList;
