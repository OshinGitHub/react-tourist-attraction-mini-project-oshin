/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

const LocationCard = (props) => {
  const { location = {} } = props

  /**
   * @param { Array<string> } categoryTags
   * @return { JSX.Element }
   */
  function renderCategoryTags(categoryTags) {
    const categoryButtons = categoryTags.map((tag) => {
      return (
        <button
          key={tag}
          css={css`
            background-color: transparent;
            border: 0;
            color: lightgrey;
            cursor: pointer;
            text-decoration: underline;
          `}
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
        `}
      >
        หมวดหมู่ {categoryButtons}
      </div>
    )
  }

  // console.dir(renderCategoryTags(location.tags))

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
                alt={photo}
                src={photo}
                css={css`
                  border-radius: 10px;
                  width: 50px;
                  height: 50px;
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
