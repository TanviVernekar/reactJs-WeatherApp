import React from 'react'
import { CardComponent } from '../../components/cardComponent/CardComponent'
import './Favourite.css'

const Favourite = () => {
  return (
    <div className="main">
    {!true ? (
      <div className="nothingdiv">
        <img
          src={require("../../assets/images/web/icon_nothing.png")}
          alt="icon_nothing"
          className="icon_nothing"
          height={85}
          width={160}
        />
        <div className="nothingtext">No Favourites added</div>
      </div>
    ) : (
      <>
        <div className="favtopbar">
          <div>6 City added as favourite</div>
          <div>Remove All</div>
        </div>
        <div className="comprender">
          <CardComponent />
          
        </div>
      </>
    )}
  </div>

  )
}

export default Favourite
