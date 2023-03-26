import { useState } from "react";

const Bai3 = () => {
    const [value, setValue] = useState("");
    const [sum, setSum] = useState(0);
  
    const onChange = (e) => {
      const value = e.target.value;
      setValue(value);
  
      let tong = 0;
      for (let i of value) {
        tong += parseInt(i);
      }
      setSum(tong);
    };
    return(
        <div>
            <div>
            <input value={value} onChange={onChange}  />
            </div>
            <div>
                <li>{sum}</li>
            </div>
        </div>
    )
}
export default Bai3;