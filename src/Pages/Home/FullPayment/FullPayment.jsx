import cardsImg from "../../../images/hero_cards_without_coins.png";
import "./fullPayment.scss";

const FullPayment = () => {
  return (
    <section className="full__payment">
      <div className="full__payment__container container">
        <div className="full__paymnet__desc descs">
          <h1 className="title">
            <span className="green__headline">Full </span>payment stack
          </h1>
          <p>
            We brings together everything required to accept payments and send
            payouts globally.
          </p>
          <div className="full__payment__btns">
            <button className="first">Connect</button>
            <button>Process</button>
            <button>Optimise</button>
            <button>Manage</button>
            <button>Market</button>
            <button>Develop</button>
          </div>
        </div>
        <div className="full__payment__content">
          <div className="full__payment__content__squre">
            <img src={cardsImg} alt="image" />
            <div className="full__payment__content__squre__desc">
              <div>
                <h2>Payment providers</h2>
                <p>Select and connect PSPs in a few clicks</p>
              </div>
              <button className="arrow">↘</button>
            </div>
          </div>
          <div className="full__payment__content__squre">
            <div className="full__pay__images">
              <div className="full__desc__images__img">
                <img
                  src="https://payxtoday.com/images/full_method-1.svg"
                  alt="image"
                />
                <p>Apple Pay</p>
              </div>
              <div className="full__desc__images__img">
                <img
                  src="https://payxtoday.com/images/full_method_2.svg"
                  alt="image"
                />
                <p>Visa</p>
              </div>
              <div className="full__desc__images__img">
                <img
                  src="	https://payxtoday.com/images/full_method_3.svg"
                  alt="image"
                />
                <p>American Express</p>
              </div>
              <div className="full__desc__images__img">
                <img
                  src="https://payxtoday.com/images/full_method_4.png"
                  alt="image"
                />
                <p>Discover</p>
              </div>
              <div className="full__desc__images__img">
                <img
                  src="https://payxtoday.com/images/full_method_10.svg"
                  alt="image"
                />
                <p>Google Pay</p>
              </div>
              <div className="full__desc__images__img">
                <img
                  src="https://payxtoday.com/images/full_method_5.svg"
                  alt="image"
                />
                <p>BItcoin</p>
              </div>
              <div className="full__desc__images__img">
                <img
                  src="https://payxtoday.com/images/full_method_6.svg"
                  alt="image"
                />
                <p>Ripple</p>
              </div>
              <div className="full__desc__images__img">
                <img
                  src="https://payxtoday.com/images/full_method_7.png"
                  alt="image"
                />
                <p>Samsung Pay</p>
              </div>
              <div className="full__desc__images__img">
                <img
                  src="https://payxtoday.com/images/full_method_8.png"
                  alt="image"
                />
                <p>Ethereum</p>
              </div>
              <div className="full__desc__images__img">
                <img
                  src="https://payxtoday.com/images/full_method_9.svg"
                  alt="image"
                />
                <p>PayPal</p>
              </div>
            </div>
            <div className="full__payment__content__squre__desc">
              <div>
                <h2>Payout method</h2>
                <p>Make payouts using any tool of choice</p>
              </div>
              <button className="arrow">↘</button>
            </div>
          </div>
          <div className="full__payment__content__squre">
            <img
              className="api__img"
              src="https://payxtoday.com/images/full_api.png"
              alt="image"
            />
            <div className="full__payment__content__squre__desc">
              <div>
                <h2>Payout method</h2>
                <p>Make payouts using any tool of choice</p>
              </div>
              <button className="arrow">↘</button>
            </div>
          </div>
          <div className="full__payment__content__squre">
            <div className="full__pay__images__anim">
              <img
                className="card__img"
                src="https://payxtoday.com/images/full_card_grey.png"
                alt="image"
              />
              <img
                className="card__img__sec"
                src="https://payxtoday.com/images/full_card_visa.png"
                alt="img"
              />
            </div>
            <div className="full__payment__content__squre__desc">
              <div>
                <h2>Payout method</h2>
                <p>Make payouts using any tool of choice</p>
              </div>
              <button className="arrow">↘</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullPayment;
