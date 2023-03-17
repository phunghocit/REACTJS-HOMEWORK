import { useState } from "react";
import { message } from 'antd';
import FormLogin from "./FormLogin";

const DEAFULT_FORMLOGIN = {email:"",password:""}
const Bai2 = (props)=>{
    const[formData,setFormData] = useState(DEAFULT_FORMLOGIN)
    const[dataSource,setDataSource]= useState([])

    const onClick = () => {
        setDataSource([
          ...dataSource,
          formData
        ]);
        console.log(dataSource);
        setFormData(DEAFULT_FORMLOGIN)
        message.open({
            type: 'success',
            content: 'Đăng nhập thành công! ',
          });
      };

    const onChange = (e) => {
        const name = e.target.name; // lấy giá trị của cột name trong input
        const value = e.target.value;
        setFormData({
          ...formData,
          [name]: value, //dấu [] để tùy biến cho các cột có name khác nhau
        });
      };

    return(
        <FormLogin dataSource={dataSource} onChange={onChange} onClick={onClick} formData={formData} />

    )
}
export default Bai2;