import { Table,Button } from "antd";

const TableProducts = ({dataSource,onDelete,onEdit}) => {

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã sản phẩm",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Giá sản phẩm",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, item) => {
        return (
          <div>
            <Button
              onClick={() => {
                onEdit(item);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                onDelete(item);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
      <Table dataSource={dataSource} columns={columns} />
  );
};

export default TableProducts;
