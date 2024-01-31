import React from 'react';
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formatedTime = `${String(minutes).padStart(2, '0')}: ${String(remainingSeconds).padStart(2, '0')}`
    return formatedTime;
}

const QuizHeader = ({timer}) => {
  return (
    <div className='shadow-sm my-5 pt-5 sticky top-0 bg-white z-10'>
        <div className='w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div classname='text-xs'>
                <p>Attention! You have 60 seconds to 60 questions</p>
                <p>Please keep on eye on the timer and make sure to answer all questions before time runs out</p>
            </div>

            {/* timer */}
            <div>
                <h1  className='text-xl text-green-700'>{formatTime(timer)}</h1>
                <p>Time Consumed</p>
            </div>
        </div>
    </div>
  )
}

export default QuizHeader