
import { useState } from "react";
import ModalProducts from "./ModalProducts";
const Bai5 = () => {
  const [users] = useState([
    { name: "A", email:'a@gmail.com', products: 1 },
    { name: "B", email:'b@gmail.com', products: 2 },
    { name: "C", email:'c@gmail.com', products: 3 },
    { name: "D", email:'d@gmail.com', products: 4 },
  ]);
    const [dbProduct] = useState([
        { id:1, name: "iphone X", code: "ipx", price: "10000000" },
        { id:2, name: "iphone 8", code: "ip8", price: "8000000" },
        { id:3, name: "iphone 7", code: "ip7", price: "7000000" },
        { id:4, name: "iphone 6", code: "ip6", price: "4000000" },
      ])
    return(
          <ModalProducts users={users} data={dbProduct}/>
    )
}
export default Bai5;