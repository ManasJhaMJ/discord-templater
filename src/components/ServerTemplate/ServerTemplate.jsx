import templatedata from '../../Data/ServerTemplate.json'
import TemplateCard from './TemplateCard'
import './serverTemplate.css'

function ServerTemplate() {
    return (
        <section id='templates' className='wrapper'>
            <h1>Server Templates</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident possimus corrupti non, praesentium optio, pariatur iure illo eveniet consectetur nostrum reiciendis quae doloremque dolore natus fugiat itaque voluptatibus debitis. Quasi.</p>

            <div className="templates">
                {templatedata.map((template, index) => (
                    <TemplateCard key={index} template={template} />
                ))}
            </div>
        </section>
    )
}

export default ServerTemplate