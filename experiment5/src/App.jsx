import './App.css' 
import Student from './component/student' 
 
function App() { 
 
  return ( 
    <> 
      <h2>Student Information</h2> 
 
      <Student name="Mudit" course="B.tech" marks="90" /> 
      <Student name="Ankur" course="M.tech" marks="95" /> 
      <Student name="Rohan" course="MCA" marks="99" /> 
    </> 
  ) 
} 
 
export default App 