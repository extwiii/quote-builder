import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';

function ItemList(props) {
  const {
    lists,
    amend,
    editStatus,
    edit,
    updateProduct,
    onNameChange,
    onPriceChange,
    addItem } = props;

  const totalQuote = lists.reduce((total, list) => total + list.price, 0);

  return (
    <div >
      {lists.map(list => (
        <ul key={list.id} >
          { edit ?
            <div >
              <form onSubmit={updateProduct} className="item-list">
                <input
                  className="item-list-name"
                  type="text"
                  value={list.name}
                  onChange={e => onNameChange(list.id, e)}
                />
                <input
                  className="item-list-price"
                  type="number"
                  value={list.price}
                  onChange={e => onPriceChange(list.id, e)}
                />
              </form>
            </div> :
            <div className="item-list">
              <h4 className="item-list-name">{list.name}</h4>
              {amend ?
                <div className="item-list-edit">
                  <h4 className="item-list-price">£ {list.price}</h4>
                  <button onClick={editStatus} >edit</button>
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
        <button className="item-list-price" onClick={addItem}> + Add quote item</button>
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
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  amend: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  editStatus: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ItemList;
