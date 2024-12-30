import React, { useRef, useState } from "react";
import Card from "./Card";
import SData from "./SData";

const profile = SData;

function Search(){
         
         const onhandle = (event)=>{
          event.preventDefault();
         }

      return(
           <form onSubmit={onhandle}>
            <input type="text" className="form-control-sm"/>
            <button className="btn btn-info">Search</button>
           </form>
      );
}

function App(){
  let pageSize=3;  // constant
 // let [pageNumber,setPageNumber]= useState(0); 
  let pageNumber=useRef(0);
  let [profile,setData] = useState(SData.slice(0,3));

 const onPrev = ()=>{
  pageNumber.current-=1;
  const start=pageSize*pageNumber.current;
  const end=start+pageSize;
  //setPageNumber(pageNumber = pageNumber-1);

  setData(SData.slice(start,end));
      
 }
 const onNext=()=>{
  pageNumber.current+=1;
    const start=pageSize*pageNumber.current;
    const end=start+pageSize;
  // setPageNumber(pageNumber+=1); // pagenumber=pagenumber+1
    console.log(pageNumber);
    setData(SData.slice(start,end));
 }

    return(
    <>
    {/*<Card 
      // {...profile[0]}
  /* img1 ={profile[0].img1}
    name1 = {profile[0].name1}
    dis = {profile[0].dis}
    vid = {profile[0].vid}
    />
  
    <Card 
        // {...profile[1]}
    /*img1 ={profile[1].img1}
    name1 = {profile[1].name1}
    dis = {profile[1].dis}
    vid = {profile[1].vid}
    />
  
   <Card
       // {...profile[2]}
   /* img1 ={profile[2].img1}
    name1 = {profile[2].name1}
    dis = {profile[2].dis}
    vid = {profile[2].vid}
    />*/}
  
  {profile.map(p =>{
       return<Card{...p} />;
  })}
      <button onClick={onPrev} className="btn btn-success">previous</button>
      <button onClick={onNext} className="btn btn-danger">Next</button>
      <Search />
    </>
  
  
  
    );
  }

  export default App;