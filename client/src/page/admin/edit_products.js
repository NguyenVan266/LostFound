import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { detail_Products, edit_Products, list_Products } from '../../api/products'
import { upload_Image } from '../../api/upload_img'
import { useAppContext } from '../../Context'

export default function Edit_products_page() {

  const {id_product} = useParams()
  
  const [product, setProduct] = useState()
  const [name, setName] = useState()
  const [address, setAddress] = useState()
  const [color, setColor] = useState()
  const [desc, setDesc] = useState()
  const [detail, setDetail] = useState()
  const [cate, setCate] = useState()
  const [img, setImg] = useState()
 

  useEffect(() => {
    detail_Products(id_product).then((data) => {
      const pro = data.data
      setProduct(pro)
    })
  }, [])

  const edit_product = async (e) => {
    e.preventDefault()
    
    const input_file = document.querySelector(".input_file")
    
    async function url() {
      if (input_file.files[0]) {
        if(input_file.files[0].size > 0){
          const response = await upload_Image(input_file.files[0]);
          return response.data.url
         }
       } else {
         return product.img
       }
     }
 
     // console.log( url());
     
 
   const new_product = await {
     name: document.querySelector(".name").value,
     category: document.querySelector(".category").value,
     address: document.querySelector(".address").value,
     color: document.querySelector(".color").value,
     description: document.querySelector(".description").value,
     detail: document.querySelector(".detail").value,
     img: await url()
   }
 
   console.log(new_product);
 
   await edit_Products(id_product,new_product);
 
   window.location.href = "../products"
 
  }
  const {handleLogout}=useAppContext()


  return (
    <div className='create_products'>
      <button onClick={handleLogout}> Đăng xuất </button>
        <h3>Sửa thông tin sản phẩm!</h3>
        {/* Form */}
        <div className='form_action'>
          <form>
            <div className='list_item'>
              <div className='item_form'>
                <p>Tên sản phẩm: <i>*</i></p>
                <input type="text" value={product?.name} className='name' placeholder='Tên sản phẩm'></input>
              </div>
              <div className='item_form'>
                <p>Danh mục sản phẩm: <i>*</i></p>
                <select className='category'>
                  <option value="1">Học liệu</option>
                  <option value="2">Đồ dùng cá nhân giá trị thấp</option>
                  <option value="3">Đồ dùng cá nhân giá trị cao</option>
                  <option value="4">Đồ vật tính nhận diện xác định</option>
                  <option value="5">Đồ vật khó nhận diện cho người ngoài</option>
                  <option value="6">Đồ vật khác</option>
                </select>
              </div>
              <div className='item_form'>
                <p>Địa chỉ: <i>*</i></p>
                <input value={product?.address} className='address' type="text" placeholder='Địa chỉ'></input>
              </div>
              <div className='item_form'>
                <p>Màu sắc: <i>*</i></p>
                <input value={product?.color} className='color' type="text" placeholder='Màu sắc sản phẩm'></input>
              </div>
              <div className='item_form'>
                <p>Mô tả: <i>*</i></p>
                <textarea value={product?.description} className='description' rows='3' placeholder="Thông tin mô tả"></textarea>
              </div>
              <div className='item_form'>
                <p>Mô tả chi tiết: <i>*</i></p>
                <textarea value={product?.detail}  className='detail' rows='3' placeholder="Thông tin chi tiết"></textarea>
              </div>
              <div className='item_form'>
                <p>Hình ảnh: <i>*</i></p>
                <input type="file" name="file" id="file" className="input_file" />
              </div>
            </div>
              <button className='btn_submit' type='submit'>Lưu</button>
          </form>
              <i>* là trường thông tin bắt buộc!</i>
        </div>      
    </div>
  
  )
}
