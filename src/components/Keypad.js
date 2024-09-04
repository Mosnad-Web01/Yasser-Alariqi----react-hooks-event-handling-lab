

function Keypad (){

    const handelChange = (e) => {
        console.log('Entering password...');
    }

    return (
        <>
            <label htmlFor="password">Enter Password</label>
            <br/>
            <input type="password" id="password" onChange={handelChange}/>

        </>
    )
}

export default Keypad;