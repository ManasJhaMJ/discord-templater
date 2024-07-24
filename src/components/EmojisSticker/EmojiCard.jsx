/* eslint-disable react/prop-types */
import './contentTemplate.css'
import { saveAs, FileSaver } from 'file-saver';


function ContentCard({ content }) {

    const emojiStickerCheck = () => {
        if (content.type === "emoji") {
            return (
                <span className='emoji-link'>
                    <img loading='lazy' src={content.link} alt="emoji" />
                </span>
            )
        }

        else {
            return (
                <span className='emoji-link sticker' >
                    <img loading='lazy' src={content.link} alt="sticker" />
                </span >
            )
        }
    };

    const handleDownload = () => {
        saveAs(content.link, content.title);
    }

    return (
        <div className='col-lg-4 col-md-6 col-md-12'>
            <div className="emojicard">
                {emojiStickerCheck()}
                <span>
                    <h1>{content.title}</h1>
                    <p>{content.type}</p>
                    <button onClick={handleDownload} >
                        Download
                    </button>
                </span>
            </div>
        </div>
    )
}

export default ContentCard