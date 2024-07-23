import ServerTemplate from "../ServerTemplate/ServerTemplate"
import ContentTemplate from "../ContentTemplate/ContentTemplate"

import './home.css'

function Home() {
    return (
        <section id="home">
            <ServerTemplate />
            <ContentTemplate />
        </section>
    )
}

export default Home