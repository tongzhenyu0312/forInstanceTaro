import { Component } from "react";
import { Provider } from "mobx-react";

import counterStore from "./store/counter";

import "./app.less";

const store = {
  counterStore,
};

class App extends Component {
  onLaunch(args) {
    console.log("🚀 Logger:  - App  - onLaunch  - args", args);
  }

  componentDidMount() {}

  componentDidShow(arg) {
    console.log("🚀 Logger:  - App  - componentDidShow  - arg", arg);
  }

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 就是要渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
