import { useState } from "react";

const Bai4 = () => {
    const [name, setName] = useState({firstName:'',lastName:''});
    // const [fullName, setFullName] = useState('');
  
    const onChange = (e) => {

        setName({
            ...name,
            [e.target.name]: e.target.value  // dấu [] là giá trị dailamickeys là giá trị không cố định, giá trị linh động
        })
    }
    return(
        <div>
            <div>
            <input name="firstName" value={name.firstName} onChange={onChange}  />
            <input name="lastName" value={name.lastName} onChange={onChange}  />
            </div>
            <div>
                {`Tên đầy đủ là:${name.firstName} ${name.lastName}`}
            </div>
        </div>
    )
}
export default Bai4;