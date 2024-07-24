import app from '../../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import TemplateCard from './TemplateCard';
import './serverTemplate.css';
import { useState, useEffect } from 'react';

function ServerTemplate() {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        const db = getDatabase(app);
        const serverRef = ref(db, '/ServerTemplate');

        // Listen for real-time updates
        const unsubscribe = onValue(serverRef, (snapshot) => {
            if (snapshot.exists()) {
                setServerData(Object.values(snapshot.val()));
            } else {
                alert('No data available');
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <section id='templates' className='wrapper'>
            <h1>Server Templates</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident possimus corrupti non, praesentium optio, pariatur iure illo eveniet consectetur nostrum reiciendis quae doloremque dolore natus fugiat itaque voluptatibus debitis. Quasi.</p>

            <div className="templates">
                {serverData.map((template) => (
                    <TemplateCard
                        key={template.id}
                        template={template}
                    />
                ))}
            </div>
        </section>
    );
}

export default ServerTemplate;
