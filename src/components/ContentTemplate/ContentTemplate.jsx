import './contentTemplate.css'
import ContentCard from './ContentCard'
import contentData from '../../Data/ContentTemplate.json'

function ContentTemplate() {
    return (
        <section id='content' className='wrapper'>
            <h1>Content Templates</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia corporis quos consequatur animi rerum sunt, eos, alias nisi numquam illum corrupti, dicta ut a voluptatibus adipisci. Quia, rem. Doloribus?</p>

            <div className="content">
                {contentData.map((content, index) => (
                    <ContentCard key={index} content={content} />
                ))}
            </div>
        </section>
    )
}

export default ContentTemplate