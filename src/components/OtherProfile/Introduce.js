import React from 'react';

function Introduce(props) {
    return (
        <div className="p-3 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold">Giới thiệu</h1>
            <div className="flex items-center mt-2">
                <i className="far fa-address-card text-gray-500"></i>
                <p className="px-2">Chứng minh nhân dân: <span className="font-bold">123456789</span></p>
            </div>
            <div className="flex items-center mt-2">
                <i className="fas fa-home text-gray-500"></i>
                <p className="px-2">Sống tại <span className="font-bold">Đà Nẵng</span></p>
            </div>
            <div className="flex items-center mt-2">
                <i className="fas fa-birthday-cake text-gray-500"></i>
                <p className="px-2">Ngày sinh <span className="font-bold">04-01-2000</span></p>
            </div>
            <div className="flex items-center mt-2">
                <i className="fas fa-venus-mars text-gray-500"></i>
                <p className="px-2">Giới tính <span className="font-bold">Nam</span></p>
            </div>
        </div>
    );
}

export default Introduce;