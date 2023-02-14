import React, { useEffect, useState } from 'react'
import { list_Products, remove_Products } from '../../api/products'
import { Link, Outlet } from 'react-router-dom'

export default function List_product_component() {

    const [state, setState] = useState([])
    
    useEffect(() => {
        list_Products().then((data) => {
            setState(data.data)
        })
    }, [])

    const remove_product = async ($id) => {
        await remove_Products($id)
        const new_data = state.filter((item) => item._id !== $id)
        setState(new_data)
    }

  return (
    <div className='list_product_page'>
        <h4>Danh sách sản phẩm</h4>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Màu sắc</th>
                    <th>Mô tả</th>
                    <th>
                        <Link to={'./add'}>Thêm mới</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {state.map((item,key) => 
                    <tr key={item._id}>
                        <td>{key + 1}</td>
                        <td>{item.name}</td>
                        <td>
                            <img src={item.img} width='100px'></img>
                        </td>
                        <td>{item.color}</td>
                        <td className='desc'>{item.detail}</td>
                        <td>
                            <button onClick={() => remove_product(item._id)}>Xóa</button>
                            <button>
                                <Link to={`./edit/${item._id}`}>Chỉnh sửa</Link>
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
