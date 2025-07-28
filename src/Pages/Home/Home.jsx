import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import { useState } from 'react'
const Home = (props) => {

  const [category,setCategory]= useState(0);
  
  return (
    <div>
      <Sidebar sideBar={props.sideBar} category={category} setCategory={setCategory}/>
      <div className={`container ${props.sideBar?"":"large-container"}`}>
        <Feed category={category}/>
       </div>
    </div>
  )
}

export default Home