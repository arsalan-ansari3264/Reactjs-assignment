import "./HorizontalCard.scss";
import img from "../../assets/download 1.png";
import Button from "../Button/Button";

const HorizontalCard = () => {
  return (
    <div className="card-horizontal">
      <div className="img">
        <img src={img} alt="main image" />
      </div>

      <div className="offer">
        <p>20% Off</p>
        <p>Limited time</p>
      </div>

      <div className="naming">
        <h2>Webbuilder 1</h2>
      </div>

      <div className="description">
        <p>Computer Modern clasic with wix support</p>
      </div>

      <div className="det">
        <div className="price">$39.96</div>
        <div className="hlt-price">$49.96</div>
        <div className="off">(20% Off)</div>
      </div>

      <div className="deal-btn">
        <Button title="View Deal" width={true}/>
      </div>
    </div>
  );
};

export default HorizontalCard;
