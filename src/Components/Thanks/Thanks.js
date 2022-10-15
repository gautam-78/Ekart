import React from 'react'
import './Thanks.css'
import { Button } from 'antd'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'

function Thanks() {
    const navigate = useNavigate();
    const navigateToBrowseProducts = () => {
        navigate('/products')
    }
    return (
        <div>
            <Header />
            <div className='thanks-container'>

                <div className="thanks-wrapper">
                    <div className="ordered-heading">
                        <h3>It's Ordered!</h3>
                    </div>
                    <div className="discription-text">
                        <p>You will receive an invoice for your order shortly.
                            <br />
                            Your order will arrive in 7 business days</p>
                    </div>
                    <div className="wallet-text">
                        <p>Waller balance <br />
                            4700 availabe</p>
                    </div>
                    <div className="browse-btn">
                        <Button type='primary' onClick={navigateToBrowseProducts} size='large' >
                            Browse for more products
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thanks