const stepItems = ["Dream", "Believe", "Achieve"];

function App() {
  const step = 1;

  function handlePrev() {
    alert("prev");
  }
  function handleNext() {
    alert("next");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {stepItems[step - 1]}
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
  );
}

export default App;
