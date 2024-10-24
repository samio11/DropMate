import React from 'react';
import useRole from '../../Custom_Hooks/useRole';
import BookPacel from './User/BookPacel';
import DeliveryList from './DeliveryMan/DeliveryList';
import AdminStat from './Admin/AdminStat';

const CommonPage = () => {
    const [role] = useRole();
    return (
        <div>
           {role === 'User' && <BookPacel></BookPacel>}
           {role === 'DeliveryMan' && <DeliveryList></DeliveryList>}
           {role === 'Admin' && <AdminStat></AdminStat>}
        </div>
    );
};

export default CommonPage;