import React from 'react'
import LeftBar from './components/LeftBar/LeftBar'
import Songs from './components/Songs/Songs'
import RightBar from './components/RightBar/RightBar'


const App = () => {
  return (
    <>
      <div style={{display: "flex", width: "100%", gap: "0.5rem"}}>
        <LeftBar />
        <Songs />
        <RightBar />
      </div>
    </>
  );
}

export default App