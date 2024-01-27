import {getData, postData, deleteData, putData} from "./api"
import {useEffect,useState} from 'react'
import Table from "./Table"
import Form from "./Form"


function App (){
  const [products, setProducts] = useState([])
  const [openForm, setOpenForm] = useState(false)
  const [initialForm, setForm] = useState({ name: '', price: '', category: '' })
  const [edit,setEdit]=useState(false)
    useEffect(
      ()=>{
        getProducts()
      },[]
    )

    let getProducts = async ()=>{
      let res = await getData();
      // console.log(res)
      setProducts(res.data)
    }
    let deleteProduct = async (id)=>{
      await deleteData(id);
      getProducts()
    }
    let addProduct = async (product)=>{
      let data = {
        name: product.name,
        price: product.price,
        category: product.category
    }
    if (edit)
        await putData(product.id, data);
    else
        await postData(data);
        setEdit(false)
    getProducts();
    setOpenForm(false);
    }
    let editProduct = async (data)=>{
      setForm(data)
      setOpenForm(true)
      setEdit(true)
    }
    let showForm =()=>{
      setOpenForm(true);
      setForm({
        name:'', price:'', category:''
      })
    }
    let closeForm =()=>{
      setOpenForm(false)
    }
    // const buttonStyle = {
    //   backgroundColor: 'violet',
    //   color: 'white',
    // };
   
  return(
    <div className="wrapper m-5 w-50">
      <h1 className="text-primary">ReactFeast - CRUD</h1>
      <button className="btn btn-secondary m-1 btn-violet float-end" onClick={()=>{
        showForm()
      }}
      >Add New Dish</button>
      <Table products={products} delete={deleteProduct} edit={editProduct}></Table>
      {
        openForm && <Form closeForm={closeForm} data={initialForm} add={addProduct}></Form>
      }
    </div>
  )
  
}
export default App