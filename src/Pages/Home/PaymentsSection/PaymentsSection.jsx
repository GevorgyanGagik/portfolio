import globe from "../../../images/globe-img.svg";
import bitcoin from "../../../images/bitcoin-img.svg";
import valet from "../../../images/valet-img.svg";
import vector from "../../../images/Vector.svg";
import cardsImg from "../../../images/hero_cards_without_coins.png";
import backImg from "../../../images/mainback.png";
import "./paymentsSection.scss";

const PaymentsSection = () => {
  return (
    <section className="payments">
      <img className="globe__img" src={backImg} alt="image" />
      <div className="payments__container container">
        <div className="payments__desc">
          <div className="payments__title">
            <h1>
              Unlock global performance with payments <br /> orchestration
            </h1>
            <p>
              Seize control of all payments. Get the most powerful open payments
              platform and unlock new level for your business.
            </p>
            <div className="btns">
              <button className="black__btn">
                Book a Demo <span className="arrow"> ↘</span>
              </button>
              <button className="green__btn">Talk To an Expert</button>
            </div>
          </div>
          <img src={cardsImg} alt="image" />
        </div>
        <div className="payments__section__info">
          <div className="cube first">
            <div className="cube__img">
              <img src={globe} alt="globe" />
            </div>
            <div className="cube__headline">
              <h2>25</h2>
              <p>languages</p>
            </div>
          </div>
          <div className="cube second">
            <div className="cube__img">
              <img src={bitcoin} alt="bitcoin" />
            </div>
            <div className="cube__headline">
              <h2>200+</h2>
              <p>currencies and cryptos</p>
            </div>
          </div>
          <div className="cube third">
            <div className="cube__img">
              <img src={valet} alt="valet" />
            </div>
            <div className="cube__headline">
              <h2>250+</h2>
              <p>payment methods</p>
            </div>
          </div>
          <div className="cube fourth">
            <div className="cube__img">
              <img src={vector} alt="vector" />
            </div>
            <div className="cube__headline">
              <h2>400+</h2>
              <p>ready-to-use integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsSection;
