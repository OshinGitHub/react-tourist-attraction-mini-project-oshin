/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { doNothing } from '../constants/helpers'

const LocationCard = (props) => {
  const { location = {}, onSetSearchText = doNothing } = props

  /**
   * @param { Array<string> } categoryTags
   * @return { JSX.Element }
   */
  function renderCategoryTags(categoryTags) {
    const categoryButtons = categoryTags.map((tag, idx) => {
      return (
        <button
          key={idx}
          css={css`
            background-color: transparent;
            border: 0;
            color: inherit;
            cursor: pointer;
            text-decoration: underline;
            font-size: inherit;
          `}
          onClick={() => {
            onSetSearchText((previousValue) => {
              const arrayOfSearchTags = previousValue
                ? previousValue.split(', ')
                : []
              const setOfSearchTags = new Set([...arrayOfSearchTags, tag])
              const resultArrayTags = Array.from(setOfSearchTags)
              const resultSearchText = resultArrayTags.join(', ')
              return resultSearchText
            })
          }}
        >
          {tag}
        </button>
      )
    })
    categoryButtons.splice(categoryTags.length - 1, 0, <span>และ</span>)

    return (
      <div
        css={css`
          display: flex;
          column-gap: 8px;
          color: lightgrey;
          font-size: 12px;
          color: #aeaeae;
        `}
      >
        หมวดหมู่ {categoryButtons}
      </div>
    )
  }

  return (
    <div
      className="location-card"
      css={css`
        display: flex;
        column-gap: 32px;
        margin: 10px;
      `}
    >
      <img
        alt={location.title}
        src={location.photos?.[0]}
        css={css`
          width: 30%;
          height: 100%;
          border-radius: 10px;
        `}
      />
      <div>
        <h3
          css={css`
            display: -webkit-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          `}
        >
          {location.title}
        </h3>
        <p
          css={css`
            color: #aeaeae;
            font-size: 12px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            // line-clamp: 1;
            overflow: hidden;
          `}
        >
          {location.description}
        </p>
        <a
          href={location.url}
          target="_blank"
          rel="noreferrer"
          css={css`
            font-size: 12px;
          `}
        >
          อ่านต่อ
        </a>

        {renderCategoryTags(location.tags)}
        <div
          css={css`
            display: flex;
            column-gap: 10px;
          `}
        >
          {location.photos?.slice(1).map((photo) => {
            return (
              <img
                key={photo}
                alt={photo}
                src={photo}
                css={css`
                  border-radius: 10px;
                  width: 55px;
                  height: 55px;
                  margin-top: 10px;
                `}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LocationCard
