import React from "react";
import {withWrapper} from "create-react-server/wrapper";

class NotFound extends React.Component {

  static notFound = true;

  render() {
    return (
      <div>404 Not Found</div>
    );
  }

}

export default withWrapper(NotFound);