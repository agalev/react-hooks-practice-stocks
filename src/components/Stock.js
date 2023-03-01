import React from 'react'

function Stock({ stock, handleBuy, handleSell }) {
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>{stock.name}</h5>
				<p className='card-text'>{stock.price}</p>
        {handleBuy && <button id={stock.id} className='btn btn-primary'onClick={(e) => handleBuy(parseInt(e.target.id))}>Buy</button>}
        {handleSell && <button id={stock.id} className='btn btn-primary'onClick={(e) => handleSell(parseInt(e.target.id))}>Sell</button>}
			</div>
		</div>
	)
}
export default Stock
