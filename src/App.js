import { useState } from "react";
import {useRef} from "react";
import './App.css';

function App() {
const convertRef = useRef();
const [object1, setObject1] = useState ({inputValue: "",
selectValue:"km",
})
const [object2,setObject2] = useState({
  inputValue:"",
  selectValue:"km",
}) 
;
console.log(object1);
console.log(object2);

let n=1;
let trans=1;
switch(object1.selectValue){
  case"km" :
  n = object1.inputValue *1000;
  break;
  case"ha" :
  n = object1.inputValue *100;
  break;
  case"dam" :
  n = object1.inputValue *10;
  break;
  case"m" :
  n = object1.inputValue *1;
  break;
  case"dm" :
  n = object1.inputValue /10 ;
  break;
  case"cm" :
  n = object1.inputValue /100;
  break;
  case"mm" :
  n = object1.inputValue /1000;
  break;

}

  switch(object2.selectValue){
    case "km": 
   trans = n/1000;
   break;

   case "ha": 
   trans = n/100;
   break;

   case "dam": 
   trans = n/10;
   break;

   case "m": 
   trans = n/1;
   break;

   case "dm": 
   trans = n*10;
   break;

   case "cm": 
   trans = n*100;
   break;

   

   case "mm": 
   trans = n*1000;
   break;

  
  
}

const handleAdd=() => {
   if  (isNaN(object1.inputValue) ===false )  {
  convertRef.current.focus();
 
document.getElementById('id').value = trans;

setObject2({...object2,trans})


  }

else {
  setObject1({inputValue:"",selectValue: "km"})

  alert("Khong duoc")
  setObject2({inputValue:"",selectValue: "km"})
}

}






  return (
    <>
    
      <div  className="w-full h-screen flex flex-row justify-center items-center gap-10">
        <div className="flex flex-col">
          <input type="text" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none" placeholder="Enter value..."
          onChange={(e)=>
          setObject1({...object1,inputValue: e.target.value}) }
          value={object1.inputValue}
          ref={convertRef}
      
        
          >


          </input>
          <select onChange={(e)=>
          setObject1({...object1,selectValue:e.target.value } ) }>
            <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
            
          </select>
        </div>
        <div className="flex flex-col">
          <button type="" className="px-6 py-2 bg-lime-600 rounded-md text-white"
          onClick={handleAdd}
          >Convert </button>
        </div>
        <div className="flex flex-col">
          <input type="text" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none" placeholder="Result..."
         id ="id"
       
          ></input>
          <select default="km" 
           onChange={(e)=>
            setObject2({...object2,selectValue: e.target.value}) }
          >
          <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default App;
