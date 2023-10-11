// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  renderCryptocurrencyList = () => {
    const {currencyList} = this.state
    return <CryptocurrenciesList currencyList={currencyList} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrencyList()
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
