import * as React from "react";

import "./index.less";
import { View } from "@tarojs/components";
import { getCurrentInstance } from "@tarojs/taro";
import { eventCenter } from "@tarojs/runtime";

interface CounterViewProps {
  counter: number;
}
interface CounterViewState {}
class CounterView extends React.Component<CounterViewProps, CounterViewState> {
  $instance = getCurrentInstance();

  constructor(props: CounterViewProps) {
    super(props);
    this.state = {};
    console.log("🚀 Logger:  - CounterView  - constructor  - constructor");
  }
  static getDerivedStateFromProps(...args) {
    console.log(
      "🚀 Logger:  - CounterView  - getDerivedStateFromProps  - args",
      args
    );
  }
  componentDidMount() {
    console.log(
      "🚀 Logger:  - CounterView  - componentDidMount  - componentDidMount"
    );
    if (this.$instance.router?.onShow) {
      eventCenter.on(this.$instance.router.onShow, this.onShow, this);
    }
  }
  shouldComponentUpdate(...args) {
    console.log(
      "🚀 Logger:  - CounterView  - shouldComponentUpdate  - shouldComponentUpdate",
      args
    );
    return true;
  }
  componentDidUpdate(...args) {
    console.log(
      "🚀 Logger:  - CounterView  - componentDidUpdate  - args",
      args
    );
  }
  onShow() {
    console.log("🚀 Logger:  - CounterView  - onShow  - onShow");
  }
  render() {
    console.log("🚀 Logger:  - CounterView  - render  - render");
    return <View className="CounterView">{this.props.counter}</View>;
  }
}
export default CounterView;
