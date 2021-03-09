import React, { Component } from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

class Imga extends Component {
    render(props) {
        return (
            <Zoom>
                <span>
                    <img src={this.props.img} alt="gambar"/>
                </span>
            </Zoom>

        );
    }
}

export default Imga;
 