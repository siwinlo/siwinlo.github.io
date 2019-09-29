"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    if (this.state.count) {
      return `This has been liked ${this.state.count} times`;
    }

    return e(
      "button",
      { onClick: () => this.setState({ count: this.state.count + 1 }) },
      "Like"
    );
  }
}
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
