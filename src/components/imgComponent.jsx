import React from "react";

class imgComponent extends React.Component {
    return () {
        return <img src = {this.props.src} alt = {this.props.alt} />
    }
}

export default imgComponent;