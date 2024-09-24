import minus from "../../../images/minus.png";
import "./faq.scss";

const Faq = () => {
  const addAccardion = (ev) => {
    ev.target.parentElement.nextElementSibling.classList.toggle("active");

    ev.target.src == minus
      ? (ev.target.src = "https://payxtoday.com/images/accordion_plus.svg")
      : (ev.target.src = minus);
  };

  return (
    <section className="faq__container container">
      <h1 className="title">FAQ</h1>

      <div className="acardeons">
        <div className="acardeons__desc">
          <div className="acardeon">
            <p>What are payment orchestration platforms?</p>
            <img
              onClick={addAccardion}
              src="https://payxtoday.com/images/accordion_plus.svg"
            />
          </div>
          <p className="desc">
            A payment orchestration platform, often referred to as a payment
            gateway, is a software system designed to facilitate the acceptance
            of payments, processing of payouts, and management of various
            financial operations for businesses.
            <br /> <br />
            Simply put, payment gateways offer a range of advanced tools and
            functionalities that enable businesses to efficiently track,
            control, and analyze their financial transactions, both incoming and
            outgoing.
          </p>
        </div>
        <div className="acardeons__desc">
          <div className="acardeon">
            <p>How does payment orchestration work?</p>
            <img
              onClick={addAccardion}
              src="https://payxtoday.com/images/accordion_plus.svg"
            />
          </div>
          <p className="desc">
            In terms of its core functions, a payment orchestration platform is
            akin to the digital equivalent of a POS system in a physical store,
            as it also transmits payer data to a payment processor. However, the
            additional capabilities of payment orchestration enable business
            owners to eliminate technical complexities, enhance internal
            financial control and payment discipline, and improve operational
            transparency.
            <br /> <br />
            Although transaction processing typically takes just a few seconds
            and may appear straightforward, it is, in reality, a complex process
            involving multiple parties. Payment gateways are designed to connect
            these parties and streamline their interactions. As a result of the
            payment gateway's operation, each transaction is routed to the most
            suitable payment service provider for processing in the most
            cost-effective manner.
          </p>
        </div>
        <div className="acardeons__desc">
          <div className="acardeon">
            <p>What can a payment orchestration platform do for you?</p>
            <img
              onClick={addAccardion}
              src="https://payxtoday.com/images/accordion_plus.svg"
            />
          </div>
          <p className="desc">
            A payment orchestration platform or a payment gateway is a software
            solution that allows businesses to accept payments, make payouts,
            and tackle other financial management procedures.
            <br /> <br />
            In other words, payment gateways provide a set of smart tools and
            features that allow businesses to monitor, manage, and analyse their
            incoming and outgoing transactions.
          </p>
        </div>
        <div className="acardeons__desc">
          <div className="acardeon">
            <p>Why choose PayXtoday payment orchestration platform?</p>
            <img
              onClick={addAccardion}
              src="https://payxtoday.com/images/accordion_plus.svg"
            />
          </div>
          <p className="desc">
            PayXtoday's payment orchestration platform is a software solution
            designed for online businesses and payment institutions that seek to
            optimize their payment processes and streamline payouts. By
            integrating a single payment gateway, companies gain access to all
            the essential tools needed to accept payments, process payouts, and
            efficiently manage all transactions in one centralized location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
