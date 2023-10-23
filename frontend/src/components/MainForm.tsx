import React, { FC, useEffect, useState } from "react";

export const MainForm: FC = () => {

    // Use state
    const [inputVal, setInputVal] = useState('');
    const [inputVal2, setInputVal2] = useState('');

    // Input event
    const onChangeEventHandler = (e: any) => {
        if (e.target.value === 'cat') {
            alert('Cat!!');
        }
        console.log('e.target.value from onChangeEventHandler: ', e.target.value);
        setInputVal(e.target.value);
    }

    const onChangeEventHandler2 = (e: any) => {
        console.log('e.target.value from onChangeEventHandler: ', e.target.value);
        setInputVal2(e.target.value);
    }

    const onClickEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert('Click');
    }

    // use Effect with params (on subscribe to inputVal)
    useEffect(() => {
        // console.log('inputVal from useEffect: ', inputVal);
        if (inputVal.length > 10) {
            setInputVal('');
        }
    }, [inputVal]);

    // use Effect with params (on subscribe to inputVal)
    useEffect(() => {
        // console.log('inputVal from useEffect: ', inputVal);
        if (inputVal === 'cat' && inputVal2 === 'dog') {
            alert('Cat & dog!!');
        }
    }, [inputVal, inputVal2]);

    return (
        <div className="p-[24px] flex flex-col">
            <input onChange={onChangeEventHandler} value={inputVal} style={{marginBottom: '12px'}}/>
            <input onChange={onChangeEventHandler2} value={inputVal2} style={{marginBottom: '12px'}} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onClickEventHandler}>Send</button>
        </div>
    )
}
