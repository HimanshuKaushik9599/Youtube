import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='p-2 mt-[60px] overflow-y-auto m-0   flex-1 '>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
