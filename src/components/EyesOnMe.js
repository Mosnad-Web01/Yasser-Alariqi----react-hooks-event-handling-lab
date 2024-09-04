import React from 'react'

function EyesOnMe() {

    const handleFouces = () => {
        console.log('Good!');
        
    }

    const handleBlur = () => {
        console.log('Hey! Eyes on me!');
    }

  return (
    <>

        <button onFocus={handleFouces} onBlur={handleBlur}>Eyes on me</button>
    </>
)
}

export default EyesOnMe