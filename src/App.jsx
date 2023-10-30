import { useEffect, useState } from 'react'
import FinanceInputList from './components/FinanceInputList.jsx'
import Header from './components/Header'

function App() {
  const [finances, setFinances] = useState({
    assets: 0.00,
    currentLiabilities: 0.00,
    longTermLiabilities: 0.00,
    totalLiabilities: 0.00,
    totalValue: 0.00
  })

  function updateTotal(totalAmount, category) {

    setFinances(prevState => {
      return {
        ...prevState,
        [category]: totalAmount
      }
    })

  }

  return (
    <>
      <Header />
      <main>
        <div className='form'>
          <div className='form--section'>Assets</div>
          <div className='form--section large-only'>Current Value</div>
          <div className='form--subSection'>Cash and cash equivalents</div>
          <br />
          <FinanceInputList category="assets" updateTotal={updateTotal} />
          <div className='form--total'>Total cash $</div>
          <div className='dollar'>
            <div className='form--output'>{parseFloat(finances.assets).toFixed(2)}</div>
          </div>
        </div>
        <div className='form'>
          <div className='form--section'>Liabilities</div>
          <div className='form--section large-only'>Current amount due</div>
          <div className='form--subSection'>Current</div>
          <br />
          <FinanceInputList category="currentLiabilities" updateTotal={updateTotal} />
          <div className='form--subSection'>Long-term</div>
          <br />
          <FinanceInputList category="longTermLiabilities" updateTotal={updateTotal} />
          <div className='form--total'>Total Liabilities $</div>
          <div className='dollar'>
            <div className='form--output'>{(parseFloat(finances.currentLiabilities) + parseFloat(finances.longTermLiabilities)).toFixed(2)}</div>
          </div>
          <div className='form--total'>Total Value $</div>
          <div className='dollar'>
            <div className='form--output'>{(parseFloat(finances.assets) - (parseFloat(finances.currentLiabilities) + parseFloat(finances.longTermLiabilities))).toFixed(2)}</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
