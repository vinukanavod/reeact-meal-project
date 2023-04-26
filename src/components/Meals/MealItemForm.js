import React,{useRef,useState} from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
export default function MealItemForm(props) {
     const[valid,setValid]= useState(true);
    const amountInputRef = useRef();
   const submitHandler = (e) =>{
       e.preventDefault();
      const enterefAmount = amountInputRef.current.value;
      const enterefAmountNumber = +enterefAmount;

      if(enterefAmount.trim().length === 0 || enterefAmountNumber < 1 || enterefAmountNumber >5)
      {
       /* methanata apita onanam error masegev ekak danna pulywann api thin waraddak wela kiyala */
       setValid(false) 
       return;
      }
      props.onAddToCart(enterefAmountNumber)
   }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
     <Input label='Amount' ref={amountInputRef}
      input={{
      
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
     }}
     />
      <button> + Add</button>
      {!valid && <p>please enter valid number</p>}
    </form>
  );
}
