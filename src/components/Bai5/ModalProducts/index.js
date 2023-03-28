
import { Table} from "antd";
const ModalProducts = ({users,data}) => {

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Products",
      dataIndex: "products",
      key: "products",
      render: () => {
        data.forEach(element => {
            if (users.products===element.id) {
                return (
                      <div>
                        <h6>{element.name}</h6>
                        <div>{element.price}</div>
                      </div>
                  );
            } 
        });
      },
    },
    {
        title: "",
        dataIndex: "actions",
      },
  ];
  return (
    <div>
        <Table dataSource={users} data={data} columns={columns} />;
    </div>
  );
};
export default ModalProducts;