import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu'
import { useAppContext } from '../Context';

export default function Detail_page(props) {

    const [detail_pr, setDetail_pr] = useState()

    const { handleLogout } = useAppContext();

    const {id} = useParams()
    const {list_products} = props
    
    const product = list_products.filter((item) => item._id === id)
    const info = product[0]
    


    return (
        <div className='detail_page' id="wrapper">
            <div id="header">
                <a href="" className="logo">
                    <img src="/logo.png" alt="" />
                </a>
                <Menu />
                <div id="actions">
                    <div className="item">
                        <button className="sign-up" onClick={handleLogout}>Đăng xuất</button>
                    </div>
                </div>
            </div>
            <div className='main'>
                <div className='img'>
                    <img src={info.img} width="100%"/>
                </div>
                <div className='detail'>
                    <h3>{info.name}</h3>
                    <p>Màu sắc: {info.name}</p>
                    <p>Địa chỉ: {info.address}</p>
                    <p>Mô tả: {info.description}</p>
                </div>
            </div>
        </div>
    )
}
