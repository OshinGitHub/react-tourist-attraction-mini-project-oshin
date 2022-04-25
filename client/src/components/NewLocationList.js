//NewLocationList.js

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { doNothing } from '../constants/helpers'
import LocationCard from './LocationCard'

export default function NewLocationsList({
  locations = [],
  onSetSearchText = doNothing
}) {
  return (
    <ul
      css={css`
        width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      `}
    >
      {locations.map((location) => {
        return (
          <li
            key={location.eid}
            css={css`
              list-style: none;
            `}
          >
            <LocationCard
              location={location}
              onSetSearchText={onSetSearchText}
            />
          </li>
        )
      })}
    </ul>
  )
}
