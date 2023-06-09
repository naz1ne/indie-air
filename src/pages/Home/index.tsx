import { memo } from 'react'
import { FilterRow } from '../../components/FilterRow'
import { MyMap } from '../../components/Map'
import { StyledMain } from './styled'

export const Home = memo(() => {
  return (
    <div className="App">
      <StyledMain>
        <FilterRow />
        <MyMap />
      </StyledMain>
    </div>
  )
})
