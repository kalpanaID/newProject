import './App.css';
import UpdateEmp from './components/employee/updateEmp';
import SubmitFeedback from './components/review/submitFeedback';
import SubmitReview from './components/review/submitReview';
import Login  from './components/login/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SubmitFeedback></SubmitFeedback>
      </header>
    </div>
  );
}

export default App;
