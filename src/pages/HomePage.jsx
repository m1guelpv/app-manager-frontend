import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/HomePage.css';

export default function HomePage() {
  return (
    <>
        <Header />
        <Aside />
        <main className='main'>
            <section id='section1'>
                <h1>Section 1</h1>
                <p>Content for section 1</p>
            </section>
            <section id='section2'>
                <h1>Section 2</h1>
                <p>Content for section 2</p>
            </section>
            <section id='section3'>
                <h1>Section 3</h1>
                <p>Content for section 3</p>
            </section>
            <section id='section4'>
                <h1>Section 4</h1>
                <p>Content for section 4</p>
            </section>
        </main>
        <Footer />
    </>
  );
}