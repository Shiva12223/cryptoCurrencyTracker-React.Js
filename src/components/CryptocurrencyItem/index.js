// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachCryptocurrencyItemDetails} = props

  const {
    currencyName,
    euroValue,
    currencyLogo,
    usdValue,
  } = eachCryptocurrencyItemDetails
  return (
    <li className="currency-list">
      <div className="currency-list-item">
        <div className="logo-container">
          <img
            className="currency-logo"
            src={currencyLogo}
            alt={currencyName}
          />
          <p>{currencyName}</p>
        </div>
        <div className="currency-value-container">
          <p>{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
