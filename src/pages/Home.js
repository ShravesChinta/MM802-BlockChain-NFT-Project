import React from 'react'
import SignMessage from '../SignMessage'
import VerifyMessage from '../VerifyMessage'


function Home() {
  return (
    // <div>Home</div>
    <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
      <SignMessage />
    </div>
    <div className="w-full lg:w-1/2">
      <VerifyMessage />
    </div>
  </div>
  )
}

export default Home