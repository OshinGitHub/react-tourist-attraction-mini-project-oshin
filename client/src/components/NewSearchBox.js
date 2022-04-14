/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { headerHeight } from '../constants/css-value'

export default function NewSearchBox() {
  return (
    <header
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 150px; /*${headerHeight}*/
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
          <label>ค้นหาที่เที่ยว</label>
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
              ::placeholder {
                color: #bfbfbf;
              }
            `}
          ></input>
          <hr></hr>
        </div>
      </div>
    </header>
  )
}
