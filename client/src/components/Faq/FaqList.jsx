import { faqs } from "../../assets/data/faqs";
import FaqItem from "./FaqItem";

function FaqList() {
  return (
    <ul className="mt-[38px]">
      {faqs.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </ul>
  );
}
export default FaqList;
