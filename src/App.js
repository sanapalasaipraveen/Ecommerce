import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <div className="App">
      <Header />
      <main className='py-3'>
      <Container>
       
        <HomeScreen />
      </Container>
      </main>
      <Footer />
     my Appp
    </div>
  );
}

export default App;
