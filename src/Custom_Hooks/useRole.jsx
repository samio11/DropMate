import React, { useContext } from 'react';
import { ContextProvider } from '../AllContext/ContextContainer';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const {user,loading} = useContext(ContextProvider)
    const axiosSecure = useAxiosSecure()
    const {data: role = '',isLoading} = useQuery({
        queryKey: ['role',user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const {data} = await axiosSecure(`/user/${user?.email}`)
            return data.userRole;
        }
    })
    return [role,isLoading]
};

export default useRole;