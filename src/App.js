import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Card from './components/Card';
import NewsPage from './components/NewsPage'; 



function App() {
  return (
    <div className="App">
      {/* <Greet name='Mrudula' relation='Sister'> <p>This a children Props</p></Greet>
      <Greet name='Madhura' relation='Mother'> <button>Housewife</button></Greet>
      <Greet name='Vishwas' relation='Father'></Greet>
      <Welcome name='Mrudula' relation='Sister'></Welcome>
      <Welcome name='Madhura' relation='Mother'></Welcome>
      <Welcome name='Vishwas' relation='Father'></Welcome> */}
      {/* <button className='btn btn-danger'></button> */}
      <NewsPage></NewsPage>
    </div>
  );
}

export default App;
