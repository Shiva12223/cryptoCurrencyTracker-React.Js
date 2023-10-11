// Write your JS code here
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {currencyList} = this.props

    return (
      <div className="crypto-currency-list-container">
        <h1 className="home-heading">Cryptocurrency Tracker</h1>
        <img
          className="home-image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="currency-list-container">
          <div className="navbar">
            <h2 className="nav-title">Coin Type</h2>
            <div className="nav-sub-columns">
              <h2 className="nav-title">USD</h2>
              <h2 className="nav-title">EURO</h2>
            </div>
          </div>
          <ul className="items-container">
            {currencyList.map(eachItem => (
              <CryptocurrencyItem
                eachCryptocurrencyItemDetails={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
