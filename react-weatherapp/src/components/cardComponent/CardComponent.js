import "./CardComponent.css";

export const CardComponent = () => {
  return (
    <div className="compdiv">
      <div className="comptext1">Udupi, Karnataka</div>
      <div className="compdivin">
        <img
          src={require("../../assests/images/04_Favourite/Group 3/Group 4/mostly_sunny.png")}
          alt="comp_icon"
          className="comp_icon"
        />
        <div className="comptext2">32°c</div>
        <div className="comptext3">Mostly Sunny</div>
      </div>
      {false ? (
        <img
          src={require("../../assests/images/02_Home_Favourite/favouriteIcon.png")}
          alt="favourite"
          className="fav_icon"
        />
      ) : (
        <img
          src={require("../../assests/images/02_Home_Favourite/Group 11/icon_favourite_Active.png")}
          alt="favourite"
          className="fav_icon"
        />
      )}
    </div>
  );
};