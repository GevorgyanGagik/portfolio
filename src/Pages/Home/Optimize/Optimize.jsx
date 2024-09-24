import "./optimize.scss";

const Optimize = () => {
  return (
    <section className="optimize">
      <div className="optimize__container container">
        <div className="optimize__image">
          <img src="https://payxtoday.com/images/optimize_img.svg" alt="img" />
        </div>
        <div className="optimize__desc descs">
          <h1 className="title">
            <span className="green__headline">Optimize </span>
            your payment flows
          </h1>
          <p>
            Connect MONEI to all major e-commerce platforms or integrate with
            your own website using the PayXtoday API. Open your account now to
            take advantage of payment orchestration.
          </p>
          <button className="green__btn">
            Discovery PayXtoday <span className="arrow"> ↘</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Optimize;
