import {useState} from "react";

export default function Button() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    return <div>
        <div>
            Enter number 1 <input onInput={e => setNumber1(parseInt((e.target as any).value))}/>
        </div>
        <div>
            Enter number 2 <input onInput={e => setNumber2(parseInt((e.target as any).value))}/>
        </div>
        <div>
            Result: {number1 + number2}
        </div>
    </div>;
}