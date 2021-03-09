import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Serticard = ({values:{no, name, img, url, course}}) => {
    return (
        <div className="col-lg-6 margin-t">
            <div className="card" style={{"width": "18rem"}}>
                <Zoom>
                    <span>
                        <img src={img} className="card-img-top" alt={name} />
                    </span>
                </Zoom>
                {/* <Imge gambar={img}/> */}
                <div className="card-body" href="">
                    <h5>{name}</h5>
                    <p className="card-text">{course}</p>
                </div>
            </div>
        </div>
    );
}

export default Serticard;
