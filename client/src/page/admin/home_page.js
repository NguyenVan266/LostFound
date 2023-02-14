import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home_page() {
  return (
    <div className='home_admin'>
        <div className="nav_admin"> 
            <ul>
                <li>
                    <Link to={"/admin"}>Quản lý</Link>
                </li>
                <li>
                    <Link to={"/admin/products"}>Sản phẩm</Link>
                </li>
                <li>
                    <Link to={"#"}>Danh mục</Link>
                </li>
            </ul>
        </div>
        <div className='content_admin'>
            
           <Outlet></Outlet>
        </div>
    </div>
  )
}
