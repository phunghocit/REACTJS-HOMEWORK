import { useState } from "react";
import { Table} from "antd";


const Bai1 = (props) => {
  const [products] = useState([
    { name: "iphone X", code: "ipx", price: "10000000" },
    { name: "iphone 8", code: "ip8", price: "8000000" },
    { name: "iphone 7", code: "ip7", price: "7000000" },
    { name: "iphone 6", code: "ip6", price: "4000000" },
  ]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];
  return (
    <div>
        <Table dataSource={products} columns={columns} />;
    </div>
  );
};
export default Bai1;


