import { createRoot } from 'react-dom/client'
import Car1 from './vehicle.jsx'
function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}
function Gar(){
  return(
  <>
  <h1>i am gar</h1>
  <Car />
  <Car1 />
  </>)
}

createRoot(document.getElementById('root')).render(
  <Gar />
);

       