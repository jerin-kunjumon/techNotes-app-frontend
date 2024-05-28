import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Avodha Edutech </span></h1>
            </header>
            <main className="public__main">
                <p>Located near Infopark Campus in Kakkanad, Avodha Edutech Pvt. limited  provides quality education and helps you land your dream job</p>
                <address className="public__addr">
                    Carnival Infopark<br />
                    Phase I, First Floor<br />
                    Infopark Campus, Kakkanad,<br />
                    Kochi, Kerala 682042<br />
                    <a href="tel:+918138009891">+91 8138009891</a>
                </address>
                <br />
                {/* <p>Owner: Dan Davidson</p> */}
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public