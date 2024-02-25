import "./Horizontal.scss";
import HorizontalCard from "./HorizontalCard";

const CardHorizontal = () => {
  return (
    <>
      <section className="horizontal">
        <h2>Related deals you might like for</h2>
        <div className="horizontal-container">
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
      </section>
    </>
  );
};

export default CardHorizontal;
