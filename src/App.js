import logo from './logo.svg';
import './App.css';
import CalcContainer from './components/CalcContainer';
import {useState} from 'react'

function App() {
  
  const [rightSideNumbers,setRightSideNumbers] = useState([]);
  const [leftSideNumbers,setLeftSideNumbers] = useState([]);
  const [operation,setOperation] = useState([]);
  const [display,setDisplay] = useState([]);
  const [equalSign,setEqualSign] = useState("");
  const [total,setTotal] = useState(0)
  
  // const handleNumClick = (e)=>{
  //   e.preventDefault();
  //   const val = Number(e.target.value);
  //   //const liveRightSide = [...rightSideNumbers, val];
  //   setRightSideNumbers([...rightSideNumbers, val])
  //   setCalcDisplayScreen(rightSideNumbers)
  // }

  const handleNumClick = (e) => {
    e.preventDefault();
    if(total !== 0){
      return
    }
    const val = Number(e.target.value);
    setRightSideNumbers((prevRightSideNumbers) => [
      ...prevRightSideNumbers,
      val,
    ]);
    setDisplay((prevDisplay) => prevDisplay + val.toString()); // Append the new number to the existing display
    
  };

  const handleFloatNumberPeriod = (e)=>{
    e.preventDefault();
    
    if (total !== 0) {
      return;
    }

    const floatNumberPeriodSign = e.target.value;

    setRightSideNumbers((rightSideNumbers) => [
      ...rightSideNumbers,
      floatNumberPeriodSign,
    ]);
    setDisplay((prevDisplay) => prevDisplay + floatNumberPeriodSign); // Append the new number to the existing display
  }

  const handleDivision = (e)=>{
    e.preventDefault();
    if (total !== 0) {
      return;
    }
    setDisplay((prevDisplay) => prevDisplay + " / "); // Append the new number to the existing display
  }
  const handleTimes = (e)=>{
    e.preventDefault();
    if (total !== 0) {
      return;
    }
    setDisplay((prevDisplay) => prevDisplay + " * "); // Append the new number to the existing display
  }
  const handlePlus = (e)=>{
    e.preventDefault();
    if (total !== 0) {
      return;
    }
    setDisplay((prevDisplay) => prevDisplay + " + "); // Append the new number to the existing display
  }
  const handleMinus = (e)=>{
    e.preventDefault();
    if (total !== 0) {
      return;
    }
    setDisplay((prevDisplay) => prevDisplay + " - "); // Append the new number to the existing display
  }
  const handleCalc = (e) => {
    e.preventDefault();
    if (total !== 0) {
      return;
    }
    setEqualSign("=")
    const results = eval(display)
    console.log(results)
    setDisplay((prevDisplay)=> prevDisplay + " = " + results)
    setTotal(results)
  }

  const handleClear=(e)=>{
    e.preventDefault();
    setTotal(0);
    setRightSideNumbers([]);
    setOperation("");
    setDisplay([]);
  }

  return (
    <div className="App">
      <h1>Homemade Calculator ...</h1>
      <p style={{width:"50%", margin:"0 autho"}}>
        The Calculator below should perform very basic math operations on numbers including negatives as well as floats.
        Next version of this should handle more advanced operations like persentage, modulos, ...
      </p>
      <CalcContainer>
        <div
          style={{
            height: "100px",
            borderBottom: "1px solid red",
            backgroundColor: "black",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{display:"flex",flexDirection:"row", justifyContent:"center", gap:"50px"}}>
            <span style={{ fontSize: "200%" }}>{display}</span>
            
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              height: "300px",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "purple",
            }}
          >
            <div style={{ width: "220px", margin: "auto" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <button
                  style={{ width: "65px", height: "65px" }}
                  onClick={handleNumClick}
                  value="1"
                >
                  1
                </button>
                <button
                  style={{ width: "65px", height: "65px" }}
                  onClick={handleNumClick}
                  value="2"
                >
                  2
                </button>
                <button
                  style={{ width: "65px", height: "65px" }}
                  onClick={handleNumClick}
                  value="3"
                >
                  3
                </button>
                <button
                  style={{ width: "65px", height: "65px" }}
                  onClick={handleNumClick}
                  value="4"
                >
                  4
                </button>
                <button
                  style={{ width: "65px", height: "65px" }}
                  onClick={handleNumClick}
                  value="5"
                >
                  5
                </button>
                <button
                  style={{ width: "65px", height: "65px" }}
                  onClick={handleNumClick}
                  value="6"
                >
                  6
                </button>
                <button
                  style={{ width: "65px", height: "65px" }}
                  onClick={handleNumClick}
                  value="7"
                >
                  7
                </button>
                <button
                  style={{ width: "65px", height: "65px" }}
                  onClick={handleNumClick}
                  value="8"
                >
                  8
                </button>
                <button
                  style={{ width: "65px", height: "65px" }}
                  onClick={handleNumClick}
                  value="9"
                >
                  9
                </button>
                <button
                  style={{ width: "98px", height: "65px" }}
                  onClick={handleNumClick}
                  value="0"
                >
                  0
                </button>
                <button
                  style={{ width: "97px", height: "65px", fontWeight: "800" }}
                  onClick={handleFloatNumberPeriod}
                  value="."
                >
                  .
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "300px",
              width: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "green",
            }}
          >
            <button
              style={{ Width: "100%", height: "20%" }}
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              style={{ Width: "100%", height: "20%" }}
              onClick={handleDivision}
            >
              &divide;
            </button>
            <button
              style={{ Width: "100%", height: "20%" }}
              onClick={handleTimes}
            >
              &times;
            </button>
            <button
              style={{ Width: "100%", height: "20%" }}
              onClick={handlePlus}
            >
              &#43;
            </button>
            <button
              style={{ Width: "100%", height: "20%" }}
              onClick={handleMinus}
            >
              &minus;
            </button>
            <button
              style={{ Width: "100%", height: "20%" }}
              onClick={handleCalc}
            >
              &#61;
            </button>
          </div>
        </div>
      </CalcContainer>
    </div>
  );
}

export default App;
