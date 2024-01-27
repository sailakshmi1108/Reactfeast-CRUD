
function Table(props){
    return (
        <table className='table m-3'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Food Item Name</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map(
                        (data)=>(
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.category}</td>
                                <td>
                                    <button className="btn btn-secondary m-1 btn-violet" onClick={()=>{
                                        props.edit(data)
                                    }}
                                    >
                                        Edit
                                    </button>
                                    <button className="btn btn-secondary m-1 btn-violet"
                                    onClick={()=>{
                                        props.delete(data.id)
                                    }
                                    }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>

                        )
                    )
                }
            </tbody>
        </table>
    )
};
export default Table;