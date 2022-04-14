import { useState, useEffect } from 'react'
import axios from 'axios'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
//import style
import './App.css'
// import SearchBox from './SearchBox'
// import LocationsList from './LocationsList'
import NewSearchBox from './components/NewSearchBox'
import NewLocationList from './components/NewLocationList'
import { headerHeight } from './constants/css-value'

function App() {
  const [locationsList, setLocationsList] = useState([])
  const [isError, setIsError] = useState(null)

  const getLocations = async () => {
    try {
      const results = await axios('http://localhost:4010/trips?keywords=')
      console.log(results.data.data)
      setLocationsList(results.data.data)
    } catch (error) {
      setIsError(true)
      console.log('request error')
    }
  }

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <div
      className="App"
      css={css`
        // background-color: grey;
      `}
    >
      {/* {locationsList.map((locations) => {
        return <h1>{locations.title}</h1>
      })} */}

      {/* <SearchBox />
      <LocationsList /> */}

      <NewSearchBox />
      <main
        css={css`
          min-height: calc(100vh - ${headerHeight});
          margin: 0 auto;
        `}
      >
        {isError ? (
          <h1>Request failed</h1>
        ) : (
          <NewLocationList locations={locationsList} />
        )}
      </main>
    </div>
    // </div>
  )
}

export default App
