import { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";

import "./index.less";
import CounterView from './components/CounterView/index';
import { getCurrentInstance } from "@tarojs/taro";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

@inject("store")
@observer
class Index extends Component {
  $instance = getCurrentInstance()

  constructor(props) {
    super(props);
    console.log("🚀 Logger:  - Index  - constructor  - constructor");
  }

  onLoad(arg) {
    console.log("🚀 Logger:  - Index  - onLoad  - arg", arg);
  }

  componentDidShow(arg) {
    console.log("🚀 Logger:  - Index  - componentDidShow  - this.$instance.router", this.$instance.router);
    // console.log("🚀 Logger:  - Index  - componentDidShow  - arg", arg);
  }

  componentDidMount() {
    console.log("🚀 Logger:  - Index  - componentDidMount  - arg");
  }

  onReady() {
    console.log("🚀 Logger:  - Index  - onReady  - onReady");
  }

  componentWillUnmount() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  render() {
    console.log("🚀 Logger:  - Index  - render  - render");
    const {
      counterStore: { counter },
    } = this.props.store;
    return (
      <View className="index">
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{ counter }</Text>
        <CounterView counter={counter}></CounterView>
      </View>
    );
  }
}
export default Index;
