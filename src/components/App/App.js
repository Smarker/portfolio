import React from "react";
import {connect} from "react-redux"; // this is optional 
import {withWrapper} from "create-react-server/wrapper";
import Root from "../../index.js";

export class App extends React.Component {
 
    static async getInitialProps({location: {pathname, query}, params, store}) {
        return {custom: 'custom'};
    };
 
    render() {
        return (
            <Root />
        );
    }
 
}
 
export default withWrapper(App); // here we connect to WrapperProvider 