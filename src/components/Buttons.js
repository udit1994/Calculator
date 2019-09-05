import React, { Fragment } from "react";
import { ThemeContext } from "./ThemeProvider";
import Button from "./Button";

export default class Buttons extends React.Component {
  state = {
    isScientificModeOn: true
  };

  toggleScientificMode = () => {
    this.setState({
      isScientificModeOn: !this.state.isScientificModeOn
    });
  }

  render() {
    const { onButtonClick } = this.props;

    return (
      <Fragment>
        <div>
          <Button label="1" value="1" onButtonClick={onButtonClick} />
          <Button label="2" value="2" onButtonClick={onButtonClick} />
          <Button label="3" value="3" onButtonClick={onButtonClick} />
          <Button label="Add(+)" value="+" wide onButtonClick={onButtonClick} />
          <Button label="Scientific" value="Scientific" wide onButtonClick={this.toggleScientificMode} />
        </div>
        <div>
          <Button label="4" value="4" onButtonClick={onButtonClick} />
          <Button label="5" value="5" onButtonClick={onButtonClick} />
          <Button label="6" value="6" onButtonClick={onButtonClick} />
          <Button label="Substract(-)" value="-" wide onButtonClick={onButtonClick} />
          {this.state.isScientificModeOn && <Button label="+/-" value="sign" wide onButtonClick={onButtonClick} /> }
        </div>
        <div>
          <Button label="7" value="7" onButtonClick={onButtonClick} />
          <Button label="8" value="8" onButtonClick={onButtonClick} />
          <Button label="9" value="9" onButtonClick={onButtonClick} />
          <Button label="Multiply(*)" value="*" wide onButtonClick={onButtonClick} />
          {this.state.isScientificModeOn && <Button label="^" value="^" wide onButtonClick={onButtonClick} /> }
        </div>
        <div>
          <Button label="Clear" value="clear" onButtonClick={onButtonClick} />
          <Button label="0" value="0" onButtonClick={onButtonClick} />
          <Button label="=" value="=" onButtonClick={onButtonClick} />
          <Button label="Divide(/)" value="/" wide onButtonClick={onButtonClick} />
          {this.state.isScientificModeOn && <Button label="√" value="√" wide onButtonClick={onButtonClick} /> }
        </div>
        <ThemeContext.Consumer>
          {({ changeToLightTheme, changeToDarkTheme }) => (
            <div>
              <Button label="Light mode" value="light" wide onButtonClick={changeToLightTheme} />
              <Button label="Dark mode" value="dark" wide onButtonClick={changeToDarkTheme} />
            </div>
          )}
        </ThemeContext.Consumer>
      </Fragment>
    );
  }
}
