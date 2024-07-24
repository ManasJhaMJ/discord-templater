/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import './serverTemplate.css';
import app from '../../firebase';
import { getDatabase, ref, update } from 'firebase/database';

function TemplateCard({ template }) {
    const handleUseItClick = async () => {
        const db = getDatabase(app);
        const templateRef = ref(db, `/ServerTemplate/${template.id}`);
        await update(templateRef, {
            uses: template.uses + 1
        });
    };

    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className="template-card">
                <img src={template.image} alt="" />
                <div className="card-body">
                    <h3 className="card-title">{template.title}</h3>
                    <p className="card-desc">{template.description}</p>
                    <span className='link-uses'>
                        <a href={template.link} target="_blank" rel="noopener noreferrer">
                            <button className="btn" onClick={handleUseItClick}>Use It!</button>
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
    );
}

export default TemplateCard;


