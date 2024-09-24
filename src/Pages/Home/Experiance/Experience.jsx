import map from "../../../images/customer__map--line.png";
import "./experience.scss";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience__container container">
        <div className="bcg__color">
          <img src={map} alt="map" />
          <img
            className="icons"
            src="https://payxtoday.com/images/map_alipay.svg"
            alt="icon"
            style={{ left: "85px", top: "25px", animationDelay: "1s" }}
          />
          <img
            className="icons"
            src="https://payxtoday.com/images/map_adyen.svg"
            alt="icon"
            style={{ right: "280px", top: "-5px", animationDelay: "300ms" }}
          />
          <img
            className="icons"
            src="	https://payxtoday.com/images/map_bitcoin.svg"
            alt="icon"
            style={{ left: "220px", top: "135px", animationDelay: "1.5s" }}
          />
          <img
            className="icons"
            src="https://payxtoday.com/images/map_neteller.svg"
            alt="icon"
            style={{ right: "160px", top: "190px", animationDelay: "2s" }}
          />
          <img
            className="icons"
            src="	https://payxtoday.com/images/map_apple_pay.svg"
            alt="icon"
            style={{ left: "190px", top: "270px", animationDelay: "1.7s" }}
          />
          <img
            className="icons"
            src="https://payxtoday.com/images/map_stripe.svg"
            alt="icon"
            style={{ right: "40px", top: "300px", animationDelay: "500ms" }}
          />
          <img
            className="icons"
            src="	https://payxtoday.com/images/map_skrill.svg"
            alt="icon"
            style={{ left: "70px", top: "385px", animationDelay: "2.2s" }}
          />
          <img
            className="icons"
            src="	https://payxtoday.com/images/map_visa.svg"
            alt="icon"
            style={{ right: "210px", top: "370px", animationDelay: "3.7s" }}
          />
          <img
            className="icons"
            src="https://payxtoday.com/images/map_discover.svg"
            alt="icon"
            style={{ left: "160px", top: "490px", animationDelay: "900ms" }}
          />
          <img
            className="icons"
            src="https://payxtoday.com/images/map_paypal.svg"
            alt="icon"
            style={{ right: "100px", bottom: "260px", animationDelay: "100ms" }}
          />
          <img
            className="icons"
            src="https://payxtoday.com/images/map_master_card.svg"
            alt="icon"
            style={{ right: "260px", bottom: "130px", animationDelay: "1.8s" }}
          />
        </div>
        <div className="descs costumer__exp__desc">
          <p className="costumer__exp__title title">
            <span className="green__headline">Improve</span> the customer
            experience
          </p>
          <p>
            With payments orchestration, you can set payment processing rules
            based on your business needs. Choose a default credit card payment
            processor, and if it’s experiencing downtime we’ll send the
            transaction to another one. Routing payments to the best-performing
            provider reduces payment failures, improves customer experience, and
            leads to more approved payments (i.e. more sales).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
