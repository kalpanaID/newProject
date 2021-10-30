import './App.css';
import UpdateEmp from './components/employee/updateEmp';
import SubmitFeedback from './components/review/submitFeedback';
import SubmitReview from './components/review/submitReview';
import Login  from './components/login/login';
import Employees from './components/employee/employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
        <SubmitReview></SubmitReview>
        <UpdateEmp></UpdateEmp>
        <SubmitFeedback></SubmitFeedback>
        <Employees></Employees>
      </header>
    </div>
  );
}

export default App;
