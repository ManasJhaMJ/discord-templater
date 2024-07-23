/* eslint-disable react/prop-types */
import './contentTemplate.css'
import nitro from '../../assets/misc/nitro.png'

import { CopyToClipboard } from 'react-copy-to-clipboard';

function ContentCard({ content }) {

    const nitroCheck = () => {
        if (content.nitro === true) {
            return (
                <span className='nitro'>
                    <img src={nitro} alt="" />
                    <h5>2k+ Chars. (Nitro req.) </h5>
                </span>
            )
        }

        else {
            return (
                <span className='nitro grayscale' >
                    <img src={nitro} alt="" />
                    <h5>No Nitro Required</h5>
                </span >
            )
        }
    };


    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className="content-card">
                <img className='content-card-img' src={content.image} alt="" />
                <div className="card-body">
                    <h2>{content.title}</h2>
                    <p>{content.text}</p>
                    <CopyToClipboard text={content.text}>
                        <button>Copy to clipboard</button>
                    </CopyToClipboard>
                </div>
                {nitroCheck()}
            </div>
        </div>
    )
}

export default ContentCard