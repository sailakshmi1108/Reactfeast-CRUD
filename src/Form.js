import {useState} from "react";
function Form(props){
    const[product,setProduct] = useState(props.data)
    let changeFormData = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value })
    }
    return (
        <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label>Food Item:</label>
                    <input className="form-control mt-2" value={product.name} type="text" name="name" placeholder="Enter Dish Name"
                    onChange={changeFormData}/>
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input className="form-control mt-2" value={product.price} type="number" name="price" placeholder="Enter Price"
                    onChange={changeFormData}/>
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <select className="form-control mt-2" name="category"
                        value={product.category}
                        onChange={changeFormData}
                    >

                        <option value='-1'></option>
                        <option value={'Veg'}>Veg</option>
                        <option value={'Non-Veg'}>Non-Veg</option>
                        {/* <option value={'fruits'}>Fruits</option> */}

                    </select>
                </div>
                <button className="btn btn-secondary m-1 btn-violet float-end" onClick={(e)=>{
                    e.preventDefault();
                    props.add(product);
                }}
                >Send</button>
                <button className="btn btn-secondary m-1 btn-blue float-end" onClick={(e)=>{
                    e.preventDefault();
                    props.closeForm()
                }}
                >Cancel</button>
            </form>
        </div>
    )
}
export default Form