import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
//import style
import './App.css'
import NewSearchBox from './components/NewSearchBox'
import NewLocationList from './components/NewLocationList'
import { headerHeight } from './constants/css-value'

function App() {
  const [locationList, setLocationList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isError, setIsError] = useState(null)

  /* TODO: It is function for filter locationList by tags */
  const filteredLocations = useMemo(() => {
    const tags = searchText ? searchText.split(', ') : []
    const result =
      locationList?.filter((location) =>
        tags?.every((tag) =>
          location?.tags?.some((innerTag) => innerTag.includes(tag.trim()))
        )
      ) || []
    return !searchText ? locationList : result
  }, [searchText, locationList])

  const getLocations = async () => {
    try {
      const results = await axios('http://localhost:4010/trips?keywords=')
      setLocationList(results.data.data)
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
      {/* <ChildComponentName propName={thingToPassTroughChild}  */}
      <NewSearchBox searchText={searchText} onSetSearchText={setSearchText} />
      <main
        css={css`
          min-height: calc(100vh - ${headerHeight});
          margin: 0 auto;
        `}
      >
        {isError ? (
          <h1>Request failed</h1>
        ) : (
          <NewLocationList
            locations={filteredLocations}
            onSetSearchText={setSearchText}
          />
        )}
      </main>
    </div>
  )
}

export default App
