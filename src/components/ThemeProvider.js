import React from "react";

export const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  state = {
    theme: "light",
  };

  changeToLightTheme = () => {
    this.setState({
      theme: "light",
    });
  };

  changeToDarkTheme = () => {
    this.setState({
      theme: "dark",
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          changeToLightTheme: this.changeToLightTheme,
          changeToDarkTheme: this.changeToDarkTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
