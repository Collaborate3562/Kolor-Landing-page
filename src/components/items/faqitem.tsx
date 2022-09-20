import { useAppContext } from "../../context/AppContext";
import AngleUp from "../../assets/icon/angle_up.svg";
import AngleDown from "../../assets/icon/angle_down.svg";

declare type FapProps = {
  question: string;
  answer: string;
  id: number;
  handleFaqClicked: any;
}

const FaqItem = (props: FapProps) =>{
  const context = useAppContext();

  return (
    <div className="flex flex-row text-white bg-body rounded-3xl">
      <div
        className="flex flex-col p-2 py-4 cursor-pointer w-full"
        onClick={() => { props.handleFaqClicked(props.id) }}
      >
        <div className="flex font-soralight justify-between items-center py-2 px-2">
          {props.question}
          <img
            src={context.faqStatus[props.id] ? AngleUp : AngleDown}
            className="mx-2"
            alt={context.faqStatus[props.id] ? "angle-up" : "angle-down"}
          />
        </div>
        {context.faqStatus[props.id] && (
          <>
            <div className={`mt-2 font-soralight text-white flex bg-body py-2 px-2`}>
              {props.answer}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default FaqItem;