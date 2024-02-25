import { FaStar } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { IoChevronDownOutline } from "react-icons/io5";

import Button from "../Button/Button";
import img from "../../assets/download 1.png";

import "./Card.scss";

const Card = ({ obj }) => {
  return (
    <>
      <section>
        {obj.map((item) => (
          <div
            key={item.id}
            className={
              item.ishighlight ? "main card-container" : "card-container main"
            }
          >
            <div className="left-card">
              <img src={img} alt="computer image" />
              <div className="name">
                <p>{item.name}</p>
              </div>
            </div>

            <div className="middle-card">
              <div className="middle-upper-card">
                <span className="title">{item.title}</span>
                <span>{item.desc}</span>
              </div>

              <div className="middle-mid-card">
                <h3>main highlights</h3>
                <span className="highlight-desc">{item?.highlights}</span>
                {item?.ishighlight && (
                  <>
                    <div className="high">
                      <p className="hlt">
                        <span>9.9</span> Building Responsive
                      </p>
                      <p className="hlt">
                        <span>8.9</span> Cool
                      </p>
                      <p className="hlt">
                        <span>8.9</span> Docs
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="middle-lower-card">
                <p>show more</p>
                <span>
                  <IoChevronDownOutline />
                </span>
              </div>
            </div>

            <div className="right-card">
              <div className="right-upper-card">
                <p className="rank">{item.rank}</p>
                <p className="grade">{item.grade}</p>
                <p className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
              <div className="right-lower-card">
                <Button title="View" width={false} />
              </div>
            </div>

            {item?.choice && (
              <div className="choice">
                <div className="ico">
                  <GiTrophyCup size="1.4rem" />
                </div>
                <span>{item.choice}</span>
              </div>
            )}

            <div className="number">
              <p>{item.id}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Card;
