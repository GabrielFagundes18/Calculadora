import { Container, Content, Row,} from "./styles";
import Input from "./components/input";
import Button from "./components/button";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState("0");
  const [fisrtNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrent("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (number) => {
    setCurrent((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumber = () => {
    if (fisrtNumber === "0") {
      setFirstNumber(String(current));
      setCurrent("0");
      setOperation("+");
    } else {
      const sum = Number(fisrtNumber) + Number(current);
      setCurrent(String(sum));
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleSubtract = () => {
    if (fisrtNumber === "0") {
      setFirstNumber(String(current));
      setCurrent("0");
      setOperation("-");
    } else {
      const sum = Number(fisrtNumber) - Number(current);
      setCurrent(String(sum));
      setFirstNumber("0");
      setOperation("");
    }
  };
  const handleMultiply = () => {
    if (fisrtNumber === "0") {
      setFirstNumber(String(current));
      setCurrent("0");
      setOperation("*");
    } else {
      const sum = Number(fisrtNumber) * Number(current);
      setCurrent(String(sum));
      setFirstNumber("0");
      setOperation("");
    }
  };
  const handleDivide = () => {
    if (fisrtNumber === "0") {
      setFirstNumber(String(current));
      setCurrent("0");
      setOperation("/");
    } else {
      const sum = Number(fisrtNumber) / Number(current);
      setCurrent(String(sum));
      setFirstNumber("0");
      setOperation("");
    }
  };
  const handleEquals = () => {
    if (fisrtNumber !== "0" && operation !== "" && current !== "0") {
      switch (operation) {
        case "+":
          handleSumNumber();
          break;
        case "-":
          handleSubtract();
          break;
        case "*":
          handleMultiply();
          break;
        case "/":
          handleDivide();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <h1>Calculadora Simples</h1>
      <Content>
        <Input value={current} />
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="=" onClick={() => handleEquals()} />
          <Button label="C" onClick={() => handleOnClear()} />
          <Button label="/" onClick={() => handleDivide()} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="*" onClick={() => handleMultiply()} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={() => handleSubtract()} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={() => handleSumNumber()} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
