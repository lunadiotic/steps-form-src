import { useState } from "react";

const stepItems = ["Dream", "Believe", "Achieve"];

function App() {
  // const [step, setStep] = React.useState(1);
  // const arr = useState(1);
  // console.log(arr);
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // Bad practice
  // const [test] = useState({ name: "Aim" });

  function handlePrev() {
    if (step > 1) setStep((step) => step - 1);
    // setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
      setStep((step) => step + 1);
      // setStep(step + 1);
      // setStep(step + 1);
    }
    // setStep(step + 1);
    // step = step + 1;
    // Bad practice
    // test.name = "Lynn";
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {stepItems[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#526D82", color: "#fff" }}
              // onClick={() => alert("Prev")}
              onClick={handlePrev}
              // onMouseEnter={() => alert("Prev")}
            >
              Prev
            </button>
            <button
              style={{ backgroundColor: "#526D82", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
