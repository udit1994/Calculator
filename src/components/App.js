import React, { Component } from "react";
import Buttons from "./Buttons";
import ThemeProvider, { ThemeContext } from "./ThemeProvider";
import calculate from "../util/calculate";
import "../styles/app.css";

const simpleOperatorsList = ["+", "-", "*", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const scientificOperatorsList = ["sign", "^", "√"];

const initialState = {
  leftOperand: "",
  rightOperand: "",
  operator: "",
  displayValue: "",
};

class App extends Component {
  state = initialState;

  handleButtonClick = (e) => {
    const { leftOperand, rightOperand, operator, displayValue } = this.state;

    const buttonValue = e.target.value;

    if (
      scientificOperatorsList.includes(buttonValue) &&
      displayValue &&
      +displayValue
    ) {
      switch (buttonValue) {
        case "sign":
          {
            const result = (-1 * +displayValue).toString();

            if (operator) {
              this.setState({
                displayValue: result,
                rightOperand: result,
              });
            } else {
              this.setState({
                leftOperand: result,
                displayValue: result,
              });
            }
          }
          break;
        case "^":
          {
            const result = ((+displayValue) ** 2).toString();

            this.setState({
              leftOperand: "",
              displayValue: result,
              rightOperand: "",
              operator: "",
            });
          }
          break;
        case "√":
          {
            const result = Math.sqrt(+displayValue).toString();

            this.setState({
              leftOperand: "",
              displayValue: result,
              rightOperand: "",
              operator: "",
            });
          }
          break;
        default:
      }

      return;
    }

    if (simpleOperatorsList.includes(buttonValue)) {
      if (operator && leftOperand && rightOperand) {
        const result = calculate(leftOperand, rightOperand, operator);

        this.setState({
          leftOperand: result,
          rightOperand: "",
          operator: buttonValue,
          displayValue: result,
        });
      } else if (leftOperand) {
        this.setState({
          operator: buttonValue,
        });
      }

      return;
    }

    if (numbers.includes(buttonValue)) {
      if (operator) {
        if ([0, NaN].includes(+rightOperand)) {
          this.setState({
            rightOperand: buttonValue,
            displayValue: buttonValue,
          });
        } else {
          const result = [0, NaN].includes(+rightOperand)
            ? buttonValue
            : rightOperand + buttonValue;

          this.setState({
            rightOperand: result,
            displayValue: result,
          });
        }
      } else {
        const result = [0, NaN].includes(+leftOperand)
          ? buttonValue
          : leftOperand + buttonValue;

        this.setState({
          leftOperand: result,
          displayValue: result,
        });
      }

      return;
    }

    if (buttonValue === "=" && leftOperand && rightOperand && operator) {
      const result = calculate(leftOperand, rightOperand, operator);

      this.setState({
        leftOperand: result,
        rightOperand: "",
        operator: "",
        displayValue: result,
      });

      return;
    }

    if (buttonValue === "clear") {
      this.setState(initialState);
    }
  };

  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div className={`${theme}-page page`}>
              <div className={`${theme}-display display`}>
                {this.state.displayValue}
              </div>
              <Buttons onButtonClick={this.handleButtonClick} />
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
