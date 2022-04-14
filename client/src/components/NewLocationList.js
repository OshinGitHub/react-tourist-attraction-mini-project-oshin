/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import LocationCard from './LocationCard'

export default function LocationsList({ locations = [] }) {
  // console.log('props', props.locations)
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
            <LocationCard location={location} />
          </li>
        )
      })}
    </ul>
  )
}
