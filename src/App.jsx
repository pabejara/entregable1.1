import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import colors from './json/colors.json'

function App() {

const getRandomFromArray = arr => {
  const indexRandom = Math.floor(arr.length * Math.random())
  return arr[indexRandom]
}

const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))
const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))

const handleClick = () => {
  setQuoteRandom(getRandomFromArray(quotes))
  setColorRandom(getRandomFromArray(colors))
}

const objStyle = {
  backgroundColor: colorRandom
}

  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
