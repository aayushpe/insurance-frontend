import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1><span className="nowrap">StateFarm Admin Panel</span></h1>
            </header>
            <main className="public__main">
                <p><Link to="/dash">Go to Dashboard</Link></p>
            </main>
            <footer>
                <p>StateFarm</p>
            </footer>
        </section>

    )
    return content
}
export default Public