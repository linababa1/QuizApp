import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loading from './Loading';

const Home = () => {
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const handleStatQuiz = () => {
    setLoading(true);
    setTimeout(() =>{
        navigate('/quiz');
        setLoading(false);
    }, 3000)
  }
  return (
    <section className='lg:w-9/12 md:w-[90%] px-4 mx-auto mt-12 flex flex-col md:flex-row-reverse justify-between items-center'>

        {loading && <Loading />}

         {/* left side */}
         <div className='md:w-1/2 w-full'>
            <img src='./images/banner.png' alt='banner' className='w-full mx-auto' />
        </div>

        {/* left side */}
        <div className='md:w-1/2 w-full space-y-8'>
            <h2 className='lg:my-8 lg:text-4xl text-3xl font-medium text-[#333] md:w-4/6 lg:leading-normal leading-normal mb-3'>Learn new concepts for each question</h2>
            <p className='py-2 mb-6 text-gray-500 pl-2 border-l-4 border-indigo-700 text-base'>We help you prepare for exams and quizzes</p>
            <div className='text-lg font-medium flex flex-col  sm:flex-row gap-5'>
                <button onClick={handleStatQuiz} className='bg-primary px-6 py-2 text-white rounded'>Start Quiz</button>
                <button className='px-5 py-2 text-white rounded border text-primary ml-3 hover:bg-primary hover:text-white transition-all duration-300'>Know more</button>  
            </div>
        </div>

       
    </section>
  )
}

export default Home