import okIcon from "../../../images/ok_icon.png";
import bcgImage from "../../../images/mainback.png";
import "./securityComp.scss";
import { useRef } from "react";

const SecurityComp = () => {
  const securityRef = useRef(null);

  return (
    <section className="security__comp__container container">
      <img src={bcgImage} alt="image" className="bcg__image" />
      <div className="security__comp__standarts">
        <div className="desc">
          <h1 className="title">High security standards</h1>
          <p>
            <b>We take security extremely seriously.</b> Through rigorous
            security checks, safe data storage, employee screenings and
            compliance with every available regulation, we ensure the safety,
            stability and reliability of our payment platform. We always seek
            new technology, process, and risk assessment and independent testing
            to keep on improving.
          </p>
        </div>
        <div className="card">
          <div className="card__images">
            <img
              className="card__image"
              src="https://payxtoday.com/images/card.svg"
              alt="card"
            />
          </div>
        </div>
      </div>
      <div className="security__list">
        <div className="securoty__list__item">
          <img src={okIcon} alt="ok" />
          <h2>Data encryption</h2>
          <p>adhere to the PCI Data Security Standard for Service Providers.</p>
        </div>
        <div className="securoty__list__item">
          <img src={okIcon} alt="ok" />
          <h2>Web application security</h2>
          <p>We follow the industry-standard secure coding guidelines.</p>
        </div>
        <div className="securoty__list__item">
          <img src={okIcon} alt="ok" />
          <h2>Physical & network security</h2>
          <p>Data is hosted in dedicated facilities with 24x7 security.</p>
        </div>
      </div>

      <div className="certifications">
        <h1 className="title">Certifications & Compliance</h1>
        <p>
          We have a dedicated compliance team to review procedures and policies
          and to align them with standards, and to determine what controls,
          processes, and systems are needed for compliance.
          <br />
          We also do periodic internal audits and facilitate independent audits
          and assessments by third parties.
        </p>
      </div>

      <div class="certifications__list">
        <div class="certifications__item">
          <div class="certifications__item-logo">
            <img src="http://127.0.0.1:5500/assets/images/pci.svg" alt="pci" />
          </div>
          <div class="certifications__item-content">
            <p className="little__title">PCI DSS Level 1 compliance</p>
            <p>
              <b>Payment Card Industry Data Security Standard</b>
              <a
                className="blue__str"
                href="/pci-compliant-payment-gateway"
                target="_blank"
              >
                (PCI DSS)
              </a>
              is one of the security standards created by major payment systems.
              Compliance with this standard makes online transactions secure and
              protects them against identity theft. It increases control of
              cardholder data and reduces credit card fraud.
            </p>
            <div class="certifications__item-lists">
              <ul class="certifications__info-list">
                <li class="certifications__info-list-item">
                  <img
                    src="http://127.0.0.1:5500/assets/images/green_arrow.svg"
                    alt="arrow"
                  />
                  Level 1 PCI
                  <abbr
                    title="Corefy meets the strictest requirements of the highest
                        PCI DSS. It ensures that your payments are highly
                        secure. The intensive onsite audit takes place annually
                        to ensure the highest compliance levels are maintained
                        and adhered to."
                  >
                    compliant
                  </abbr>
                </li>
                <li class="certifications__info-list-item">
                  <img
                    src="http://127.0.0.1:5500/assets/images/green_arrow.svg"
                    alt="arrow"
                  />
                  Industry
                  <abbr
                    title="We are on Visa’s Global Registry of Service Providers
                        and Mastercard’s Compliant Service Providers Lists."
                  >
                    recognition
                  </abbr>
                </li>
              </ul>
              <ul class="certifications__info-list">
                <li class="certifications__info-list-item">
                  <img
                    src="http://127.0.0.1:5500/assets/images/green_arrow.svg"
                    alt="arrow"
                  />
                  No need for you to be PCI
                  <abbr
                    title="Eliminate the hassle with PCI DSS compliance and let us
                        deal with the banks on your behalf. We take care of the
                        sensitive data and both you and your customers can enjoy
                        fully protected and encrypted transactions."
                  >
                    compliant
                  </abbr>
                </li>
                <li class="certifications__info-list-item">
                  <img
                    src="http://127.0.0.1:5500/assets/images/green_arrow.svg"
                    alt="arrow"
                  />
                  No prohibited data
                  <abbr
                    title="To comply with the strictest security standards, we do
                        not store raw magnetic-stripe, card validation codes or
                        PIN block data. Storage of this data is strictly
                        prohibited by PCI DSS."
                  >
                    storage
                  </abbr>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="certifications__item">
          <div class="certifications__item-logo two__img">
            <img
              style={{ width: "130px", height: "42px" }}
              src="http://127.0.0.1:5500/assets/images/visa.png"
              alt="visa"
            />
            <img
              style={{ width: "115px", height: "89px" }}
              src="http://127.0.0.1:5500/assets/images/master.png"
              alt="master"
            />
          </div>
          <div class="certifications__item-content">
            <p className="little__title">
              VISA Third Party Agent (TPA) and Mastercard Registration Program
              (MRP)
            </p>
            <div class="block-hidden-text pc default-text">
              <div>
                <p>
                  Our <b>VISA Third Party Agent (TPA)</b> and
                  <b>Mastercard Registration Program (MRP)</b>
                  registrations are an added layer of security for our clients.
                  All service providers who have access to cardholder data must
                  comply with the data security requirements prior to beginning
                </p>
              </div>
              <a href="" class="read__more__btn">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div class="certifications__item">
          <div class="certifications__item-logo">
            <img
              src="http://127.0.0.1:5500/assets/images/googlePay.svg"
              alt="psd2"
            />
          </div>
          <div class="certifications__item-content">
            <p className="little__title">Google Pay</p>
            <p>
              Corefy is officially featured in
              <a
                className="blue__str"
                href="https://developers.google.com/pay/api"
                target="_blank"
              >
                the Google Pay list of participating processors
              </a>
              . It allows our clients to easily implement this in-demand payment
              method and securely process Google Pay transactions through
              Corefy. Sign a contract with us, agree with Google's terms and
              policies, inform your Corefy Account Manager, and you're all set.
            </p>
            <a href="" class="read__more__btn ">
              Read more
            </a>
          </div>
        </div>
        <div class="certifications__item">
          <div class="certifications__item-logo">
            <img
              src="http://127.0.0.1:5500/assets/images/applePay.svg"
              alt="psd2"
            />
          </div>
          <div class="certifications__item-content">
            <p className="little__title">Apple Pay</p>
            <p>
              We’ve implemented the Apple Pay token decrypt service, which
              allows our clients to decrypt Apple Pay tokens and transfer the
              card data to the providers instead of transferring tokens. Thus,
              clients can use their own Apple Merchant ID and payment processing
              certificates to decrypt the tokens independently of the payment
              provider.
            </p>
            <a href="" class="read__more__btn hidden">
              Read more
            </a>
          </div>
        </div>
        <div class="certifications__item">
          <div class="certifications__item-logo">
            <img src="http://127.0.0.1:5500/assets/images/psd.svg" alt="psd2" />
          </div>
          <div class="certifications__item-content">
            <p className="little__title">PSD2 compliant software</p>
            <p>
              <b> PSD2 </b>
              is the second iteration of the Payment Services Directive
              implemented by the European Union and it affects both individual
              consumers and businesses. PSD2 enables bank customers to use
              third-party providers to manage their finances. The regulation has
              implications for all companies in...
            </p>
            <a href="" class="read__more__btn">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityComp;
