import "./approve.scss";

const Approve = () => {
  return (
    <section className="approve">
      <div className="approve__container container">
        <div className="approve__desc descs">
          <h1 className="title">
            <span className="green__headline">Approve </span>
            more payments
          </h1>
          <p>
            Implementing features to improve transaction approval rates should
            be a top priority. Routing payments, accepting local payment
            methods, and setting payment method conditions such as relevance to
            the customer and chance of successful payment are all benefits of
            payments orchestration that can help improve your bottom line.
          </p>
        </div>
        <div className="image">
          <img src="https://payxtoday.com/images/approve.svg" alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Approve;
