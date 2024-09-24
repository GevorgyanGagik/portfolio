import "./manage.scss";

const Manage = () => {
  return (
    <section className="manage">
      <div className="manage__container container">
        <div className="manage__desc">
          <h1 className="title">
            Manage your entire payments stack
            <span className="green__headline"> in one platform</span>
          </h1>
          <p>
            Consumers expect e-commerce businesses to accept a wide range of
            online payment methods. This includes credit cards, alternative
            forms of payment such as digital wallets, installment payments, and
            local payment options.
          </p>
          <p className="desc__p">
            Rather than integrating with many payment service providers,
            payments orchestration streamlines the process so you can save time
            & money managing your entire payment stack and transaction data in
            one dashboard.
          </p>
        </div>
        <img src="https://payxtoday.com/images/platform_img.png" alt="image" />
      </div>
    </section>
  );
};

export default Manage;
