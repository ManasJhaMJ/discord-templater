/* eslint-disable react/prop-types */
import './serverTemplate.css'
function TemplateCard({ template }) {
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className="template-card">
                <img src={template.image} alt="" />
                <div className="card-body">
                    <h3 className="card-title">{template.title}</h3>
                    <p className="card-desc">{template.description}</p>
                    <span className='link-uses'>
                        <a href={template.link} target="_blank" rel="noopener noreferrer">
                            <button className="btn">Use It!</button>
                        </a>
                        <h5>{template.uses} Uses</h5>
                    </span>
                    <span className='tags'>
                        {template.tags.map((tag, index) => (
                            <span key={index} className='tag'>{tag}</span>
                        ))}
                    </span>
                    <h6>{template.author}</h6>
                </div>
            </div>
        </div>
    )
}

export default TemplateCard

