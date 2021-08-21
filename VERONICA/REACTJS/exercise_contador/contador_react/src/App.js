// import logo from './logo.svg';
import './App.css';
import ExerciseRepaso from './parentComponent';
import ExerciseRepasoFetch from './childComponent';
import ExerciseRepasoDos from './otherRepasoEx';
import ExerciseRepasoCuatro from './fourtEx';

function App() {
  return (
    <div className="main-container">
     <ExerciseRepaso></ExerciseRepaso>
     <ExerciseRepasoFetch></ExerciseRepasoFetch>
     <ExerciseRepasoDos></ExerciseRepasoDos>
     <ExerciseRepasoCuatro></ExerciseRepasoCuatro>
    </div>
  );
}

export default App;
