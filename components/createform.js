import React from "react";
import { useState } from 'react';
import ReportTable from '../components/report_table.js';

export default function CreateForm() {
  
  // const [reply, setReply] = useState('Ask me anything');
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  // function questionAskedHandler(event) {
  //     event.preventDefault();
  //     const randomReply = replies[Math.floor(Math.random() * replies.length)];
  //     setReply(randomReply);
  // }

  function questionAskedHandler(event) {
      event.preventDefault();
      // const randomReply = replies[Math.floor(Math.random() * replies.length)];
      
      const answeredQuestion = {
          Loc: event.target.Loc.value,
          Min: event.target.Min.value,
          Max: event.target.Max.value,
          Avg: event.target.Avg.value,
          id: answeredQuestions.length,
      };
      
      console.log('answeredQuestion', answeredQuestion);
      
      setAnsweredQuestions([...answeredQuestions, answeredQuestion]);
  }

  function getLatestReply() {
      if (answeredQuestions.length === 0) {
          return 'No Cookies Stands Available';
      }
      else {
       return <ReportTable />
      }

  }
  
  return(

  <form onSubmit={questionAskedHandler}>
  {/* <createform action="/api/form" method="post"> */}
    <p className='text-lg font-semibold text-center py-4'>
      Create Cookie Stand
    </p>
    <div className='grid grid-cols-2 place-content-evenly g-0'>
      <div className='flex flex-col items-stretch mt-6 font-semibold text-md text-center pl-3 pr-3'>
      <label className='h-6 pr-3' htmlFor="Loc">ADD LOCATION</label>
      <input type="text" id="Loc" name="Loc" placeholder='Cookie Stand Location' required className='h-6 flex flex-grow'/>
      </div>
      <div className='flex flex-col items-stretch mt-6 text-xs pl-3 pr-3'>
        <button type="submit" className="h-12 bg-emerald-600 text-black font-medium duration-150 ease-in-out">CREATE</button>
    </div>
    </div>
    <div className='grid grid-cols-3 place-content-evenly g-0'>
      <div className='flex flex-col items-stretch mt-6 text-xs ml-2 pl-3 pr-3 border-solid border-3 bg-emerald-200'>
      <label className='text-center ' htmlFor="Min">Minimum Customers Per Hour </label>
      <input type="text" id="Min" name="Min" placeholder='0'required className='h-6'/>
      </div>
      <div className='flex flex-col items-stretch mt-6 text-xs ml-2 pl-3 pr-3 border-solid border-3 bg-emerald-200'>
      <label className='text-center' htmlFor="Max">Maximum Customers per Hour</label>
      <input type="text" id="Max" name="Max" placeholder='0' required className='h-6'/>
      </div>
      <div className='flex flex-col items-stretch mt-6 text-xs ml-2 pl-3 pr-3 border-solid border-3 bg-emerald-200'>
      <label className='text-center' htmlFor="Avg">Average Cookies per Sale</label>
      <input type="text" id="Avg" name="Avg" placeholder='0' required className='h-6'/>
      </div>
    </div>
    <div className='bg-emerald-50 mt-10 pt-4 text-lg font-semibold text-center'>
      {getLatestReply()}
    </div>
  </form>
  );
}