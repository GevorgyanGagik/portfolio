import Approve from "./Approve/Approve";
import Experience from "./Experiance/Experience";
import Faq from "./Faq/Faq";
import FullPayment from "./FullPayment/FullPayment";
import Manage from "./Manage/Manage";
import Modular from "./Modular/Modular";
import Optimize from "./Optimize/Optimize";
import PaymentsSection from "./PaymentsSection/PaymentsSection";
import Proud from "./Proud/Proud";

const Home = () => {
  return (
    <>
      <PaymentsSection />
      <Experience />
      <Manage />
      <Approve />
      <Optimize />
      <FullPayment />
      <Modular />
      <Proud />
      <Faq />
    </>
  );
};

export default Home;
