const FormLogin =({onChange,onClick,formData,dataSource})=>{
    return (
        <div>
        <div>
          <input name="email" value={formData.email} onChange={onChange}  />
          <input name="password"   value={formData.password} onChange={onChange} />
          <button onClick={onClick}>Login</button>
        </div>
        {dataSource.map((item) => {
        return (
          <div>
            <div>Email: {item.email}</div>
            <div>Password: {item.password}</div>
          </div>
        );
      })}
      </div>
    )
}
export default FormLogin