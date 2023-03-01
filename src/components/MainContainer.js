import { useState, useEffect } from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from './SearchBar'

export default function MainContainer() {
	const [stocks, setStocks] = useState([])
	const [portfolio, setPortfolio] = useState([])
	const [sort, setSort] = useState('')

	useEffect(() => {
		fetch('http://localhost:3001/stocks')
			.then((r) => r.json())
			.then((response) => setStocks(response))
	}, [])

	function handleBuy(id) {
		const stock = stocks.find((stock) => stock.id === id)
		setPortfolio([...portfolio, stock])
	}

	function handleSell(id) {
		setPortfolio(portfolio.filter((stock) => stock.id !== id))
	}

	function sortByAlphabet() {
		setSort('alphabet')
		setStocks(stocks.sort((a, b) => a.name.localeCompare(b.name)))
	}
	function sortByPrice() {
		setSort('price')
		setStocks(stocks.sort((a, b) => a.price - b.price))
	}

	function handleFilter(declaredFilter) {
		fetch('http://localhost:3001/stocks')
			.then((r) => r.json())
			.then((response) => {
				switch (declaredFilter) {
					case 'Tech':
						setStocks(response.filter((stock) => stock.type === 'Tech'))
						break
					case 'Sportswear':
						setStocks(response.filter((stock) => stock.type === 'Sportswear'))
						break
					case 'Finance':
						setStocks(response.filter((stock) => stock.type === 'Finance'))
						break
					default:
						return
				}
			})
	}

	return (
		<div>
			<SearchBar
				sort={sort}
				// setSort={setSort}
				sortByAlphabet={sortByAlphabet}
				sortByPrice={sortByPrice}
				handleFilter={handleFilter}
			/>
			<div className='row'>
				<div className='col-8'>
					<StockContainer stocks={stocks} handleBuy={handleBuy} />
				</div>
				<div className='col-4'>
					<PortfolioContainer portfolio={portfolio} handleSell={handleSell} />
				</div>
			</div>
		</div>
	)
}
