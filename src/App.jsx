import { Copy } from 'lucide-react';
import React, { useState } from 'react'

const App = () => {

  const [title, setttile] = useState('');
  const [discription, setdiscription] = useState('');
  const [task, settask] = useState([]);

  function preventDefault(e) {
    e.preventDefault();
    setttile('');
    setdiscription('');

    const CopyTask = [...task];
    CopyTask.push({ title, discription });
    settask(CopyTask);
    console.log(CopyTask);
  }

  function DeleteTask(i){
    const copyTask = [...task];
    copyTask.splice(i,1);
    settask(copyTask);
  }

  return (
    <div className='bg-black min-h-screen flex  lg:flex-nowrap flex-wrap'>
      <form onSubmit={preventDefault}
        className='h-full w-full overflow-hidden flex  gap-1 flex-col lg:w-1/2 p-10 border-b-2 '
      >
        <input
          type="text"
          className='w-full bg-white border-2 font-medium border-amber-500 p-3 outline-none rounded-2xl'
          placeholder='Enter Title of Task'
          value={title}
          onChange={(e) => { setttile(e.target.value) }}
        />

        <textarea
          name="Description"
          id="Desc"
          className='w-full bg-white border-2 font-medium border-amber-500 p-3 outline-none rounded-2xl'
          placeholder='Add discription'
          value={discription}
          onChange={(e) => { setdiscription(e.target.value) }}>
        </textarea>

        <button
          className='w-full active:bg-gray-500 bg-slate-600 border-2  border-black p-3 outline-none rounded-2xl transition transform hover:scale-105 hover:cursor-pointer'>
          Add Note
        </button>
      </form>
      <div className='lg:w-1/2 lg:border-l-4 border-white w-full flex flex-col gap-1 h-screen overflow-y-auto no-scrollbar bg-blue-950 p-10'>
        <h1 className='text-amber-50 text-center text-4xl'>Your Notes</h1>
        {task.map((e, i) => {
          if (e.title != "" && e.discription != "") {
            return (
              <div
                key={i}
                className='h-40 w-full rounded-2xl bg-blue-400 shrink-0 flex flex-col justify-between p-2'>
                <div>
                  <h1 className='text-3xl'>Title - {e.title}</h1>
                  <h2 className='text-2xl'>Discription - {e.discription}</h2>
                </div>
                <button
                  onClick={()=>{DeleteTask(i)}}
                  className='w-15 h-5 bg-red-500 cursor-pointer rounded-4xl flex items-center justify-center active:scale-100 hover:bg-red-400'>
                    Delete
                  </button>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default App
