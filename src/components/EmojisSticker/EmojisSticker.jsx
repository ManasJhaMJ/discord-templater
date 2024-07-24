import app from '../../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import './contentTemplate.css'
import EmojiCard from './EmojiCard'
import { useState, useEffect } from 'react'
// import contentData from '../../Data/ContentTemplate.json'

function EmojisSticker() {

    const [contentData, setContentData] = useState([])

    useEffect(() => {
        const db = getDatabase(app)
        const contentRef = ref(db, '/EmojisStickers')

        const unsubscribe = onValue(contentRef, (snapshot) => {
            if (snapshot.exists()) {
                setContentData(Object.values(snapshot.val()))
            } else {
                alert('No data available')
            }
        })
        return () => unsubscribe()
    }, [])

    return (
        <section id='content' className='wrapper'>
            <h1>Content Templates</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia corporis quos consequatur animi rerum sunt, eos, alias nisi numquam illum corrupti, dicta ut a voluptatibus adipisci. Quia, rem. Doloribus?</p>

            <div className="content">
                {contentData.map((content, index) => (
                    <EmojiCard key={index} content={content} />
                ))}
            </div>
        </section>
    )
}

export default EmojisSticker