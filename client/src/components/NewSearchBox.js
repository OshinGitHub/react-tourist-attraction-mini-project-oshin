//NewShearchBox.js

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { headerHeight } from '../constants/css-value'
import { doNothing } from '../constants/helpers'

export default function NewSearchBox(props) {
  const { searchText, onSetSearchText = doNothing } = props
  /**
   * @param { React.ChangeEvent<HTMLInputElement> } e
   */
  function handleChangeSearchText(e) {
    console.log('text', e.target.value)
    onSetSearchText(e.target.value)
  }

  return (
    <header
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: ${headerHeight};
        width: auto;
      `}
    >
      <h1
        css={css`
          color: deepskyblue;
          text-align: center;
        `}
      >
        เที่ยวไหนดี
      </h1>
      <div>
        <div
          css={css`
            align-self: center;
            width: 700px;
          `}
        >
          <label
            css={css`
              font-size: 12px;
            `}
          >
            ค้นหาที่เที่ยว
          </label>
          <input
            className="InputHeader"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            css={css`
              align-self: center;
              text-align: center;
              border: none;
              background: none;
              width: 700px;
              height: 25px;
              border-bottom: #bfbfbf 1px solid;
              ::placeholder {
                color: #bfbfbf;
              }
              :focus {
                outline: none;
              }
            `}
            value={searchText}
            onChange={handleChangeSearchText}
          />
        </div>
      </div>
    </header>
  )
}
