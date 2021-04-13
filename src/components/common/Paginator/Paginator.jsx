import React, { useState } from 'react'
import s from './Paginator.module.css'
import cn from 'classnames'

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.itemsTotalCount / props.pageSize)
  let pages = []
  for(let i = 1; i <= pagesCount; i++) {
  // for (let i = 1; i <= 20; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / props.portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
  let rightPortionPageNumber = portionNumber * props.portionSize

  // console.log('=============')
  // console.log('props.pageSize', props.pageSize)
  // console.log('props.portionSize', props.portionSize)
  // console.log('pagesCount', pagesCount)
  // console.log('portionCount', portionCount)
  // console.log('portionNumber', portionNumber)
  // console.log('leftPortionPageNumber', leftPortionPageNumber)
  // console.log('rightPortionPageNumber', rightPortionPageNumber)

  return <div className={s.paginationBar}>
    { portionNumber > 1 &&
      <span>
      <button onClick={() => { setPortionNumber(1) }}>START</button>
      <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
      </span>
    }

    {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map(p => {
        return (
          <span
            key={p}
            // className={props.currentPage === p && s.selectedPage}
            className={cn({[s.selectedPage] : props.currentPage === p}, s.pageNumber)}
            onClick={() => props.onPageChange(p)}
          >{p} </span>
        )
      })
    }

    { portionCount > portionNumber &&
      <span>
      <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
      <button onClick={() => { setPortionNumber(portionCount) }}>END</button>
      </span>
    }
  </div>
}

export default Paginator