import './App.css';
import Banner from './components/Banner'
import FormationList from './components/FormationList'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <Banner />
      <FormationList />
    </div>
  );
}
