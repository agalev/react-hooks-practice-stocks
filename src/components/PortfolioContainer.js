import Stock from './Stock'

export default function PortfolioContainer({ portfolio, handleSell }) {
	return (
		<div>
			<h2>My Portfolio</h2>
			{portfolio.map((stock) => (
				<Stock id={stock.id} key={stock.id} stock={stock} handleSell={handleSell} />
			))}
		</div>
	)
}
