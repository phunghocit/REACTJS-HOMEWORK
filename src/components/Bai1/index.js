import { Button } from "antd";
import { useState } from "react";
import ModalFormProducts from "./ModalFormProducts";
import TableProducts from "./TableProducts";

const DEFAULT_PRODUCT = { name: "", code: "", price: ""};

const Bai1 = (props) => {
  // const [modal,contextHolder] =Modal.useModal();
  const [formData, setFormData] = useState(DEFAULT_PRODUCT);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);

  const onCreate = (e) => {
    setFormData(DEFAULT_PRODUCT);
    setOpen(true);
  };
  const onEdit = (product) => {
    setFormData(product);
    setOpen(true);  
  };
  // const onDelete = (item) => {
  //   modal.confirm({
  //     title:'Xóa dữ liệu lại ',
  //     content:'Bạn có muốn xóa dữ liệu này vĩnh viễn!'
  //   });

  // };
  //cách bình thường
  const onDelete = (item) => {
    // modal.confirm({
    //   title='Xóa dữ liệu lại ',
    //   content=''
    // })
    const newProducts= dataSource.filter((product)=>{
      return product.id !== item.id
    })
    setDataSource(newProducts)
  };
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = () => {
    if (formData.id) { // Dùng để Edit khi item đã có id
      const newDataSource = dataSource.map((item) => {
        return item.id === formData.id ? formData : item
      });
      setDataSource(newDataSource);
      setFormData(DEFAULT_PRODUCT);
      setOpen(false);
    } else {   // Dùng create khi item chưa có id
      setDataSource([
        ...dataSource,
        {
            id: Math.random(),
            ...formData
        }
      ])
    }

      setFormData(DEFAULT_PRODUCT);
      setOpen(false);
  };

  return (
    <div>
      <Button onClick={onCreate}>Create</Button>
      <ModalFormProducts open={open} setOpen={setOpen} onSubmit={onSubmit} onChange={onChange} formData={formData} />
      <TableProducts dataSource={dataSource} onEdit={onEdit} onDelete={onDelete} />;
    </div>
  );
};

export default Bai1;


//SearchBox   tên kí hiệu components và class 


//uu tiên tách 3 component form , modal ,table 