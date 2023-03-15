import { Input, Modal, Form } from "antd";

const ModalFormProducts = ({ onSubmit, formData, onChange, setOpen, open }) => {
  // const [modal,contextHolder] =Modal.useModal();
    const [form] =Form.useForm()
    const onSubmit2 = () => {
        const data = form.getFieldsValue()
        onSubmit(data)
      }
  const onCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onOk={onSubmit2} onCancel={onCancel}>
        {/*<Form layout="vertical">  cho chữ label hiển thị lên trên */}
        <Form form ={form}layout="vertical"> 
            <Form.Item name="name" label="Tên sản phẩm">
            <Input
                placeholder="Tên sản phẩm:"
                text="Name"
                name="name"
                value={formData.name}
                onChange={onChange}
            />
            </Form.Item>
            <Form.Item name="code" label="Mã sản phẩm">
            <Input
                placeholder="Mã sản phẩm:"
                name="code"
                value={formData.code}
                onChange={onChange}
            />
            </Form.Item>

            <Form.Item name="price" label="Giá">
            <Input
                placeholder="Nhập giá:"
                name="price"
                value={formData.price}
                onChange={onChange}
            />
            </Form.Item>
        </Form>
        
      </Modal>
    </div>
  );
};

export default ModalFormProducts;

//SearchBox   tên kí hiệu components và class
