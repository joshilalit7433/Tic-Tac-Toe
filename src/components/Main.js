import React, { useEffect, useRef, useState } from 'react'


export default function Main() {

const[board,setboard]=useState(Array(9).fill(null))
    const[change,setchange]=useState('X')
    const[turn,setturn]=useState("Xs turn");
    

    const toggle=(n)=>{

        if(board[n]!==null){
            alert("already played");
            return
         }

        
        let sq=[...board];

        

        sq[n]=change;
        setboard(sq);
        if(change==='X'){
            setchange('O');
            setturn("Os turn");
        }
    
        else{
            setchange('X');
            setturn("Xs turn");

            
        }

       if( winner(sq)){
        setTimeout(() => {
            alert(change+" is the winner");
            document.location.reload();
        }, 100);
       }
    
   

    
          
    
       
    }

   

 

   const winner=(board)=>{
    const conditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
let flag=false
    conditions.map(element=>{
        if(board[element[0]]!==null && board[element[1]]!==null && board[element[2]]!==null){
        if(board[element[0]]===board[element[1]]&& board[element[1]]===board[element[2]] ){
         flag=true;
         setturn(null);
         setchange(change+" is the winner ");
         
        }
        
    }})
    return flag
   }

  
useEffect(()=>{
    alert("X's turn");
},[])




  
   
  return (
    <>
    <div  >
    <div className="grid grid-rows-1 justify-center items-center  ">
        <p className="text-[50px] lg:text-[100px] text-white" >TIC TAC TOE</p>
       
    </div>

    <p className="flex flex-row justify-center items-center text-[50px] text-white" >{turn}</p>
   

    <div className="flex justify-center items-center mt-[50px] lg:mt-[20px] ">
<div className="grid grid-rows-3 grid-cols-3 gap-[5px] lg:gap-[10px] ">
    <div className="border-4 border-white h-[100px] w-[100px] flex justify-center items-center text-[100px] lg:h-[150px] lg:w-[150px] lg:text-[150px] text-white "  onClick={()=>{toggle(0)}} > {board[0]} </div>
    <div className="border-4 border-white h-[100px] w-[100px] flex justify-center items-center text-[100px] lg:h-[150px] lg:w-[150px] lg:text-[150px] text-white " onClick={()=>{toggle(1)}}> {board[1]} </div>
    <div className="border-4 border-white h-[100px] w-[100px] flex justify-center items-center text-[100px] lg:h-[150px] lg:w-[150px] lg:text-[150px] text-white " onClick={()=>{toggle(2)}}> {board[2]} </div>
    <div className="border-4 border-white h-[100px] w-[100px] flex justify-center items-center text-[100px] lg:h-[150px] lg:w-[150px] lg:text-[150px] text-white " onClick={()=>{toggle(3)}}> {board[3]} </div>
    <div className="border-4 border-white h-[100px] w-[100px] flex justify-center items-center text-[100px] lg:h-[150px] lg:w-[150px] lg:text-[150px] text-white " onClick={()=>{toggle(4)}}> {board[4]} </div>
    <div className="border-4 border-white h-[100px] w-[100px] flex justify-center items-center text-[100px] lg:h-[150px] lg:w-[150px] lg:text-[150px] text-white " onClick={()=>{toggle(5)}}> {board[5]} </div>
    <div className="border-4 border-white h-[100px] w-[100px] flex justify-center items-center text-[100px] lg:h-[150px] lg:w-[150px] lg:text-[150px] text-white " onClick={()=>{toggle(6)}}> {board[6]} </div>
    <div className="border-4 border-white h-[100px] w-[100px] flex justify-center items-center text-[100px] lg:h-[150px] lg:w-[150px] lg:text-[150px] text-white " onClick={()=>{toggle(7)}}> {board[7]} </div>
    <div className="border-4 border-white h-[100px] w-[100px] flex justify-center items-center text-[100px] lg:h-[150px] lg:w-[150px] lg:text-[150px] text-white " onClick={()=>{toggle(8)}}> {board[8]} </div>
  
</div>
</div>


</div>



    </>
  )
}
