'use client'

import { createContext, useContext } from 'react';
import { useUsersData } from '@/hooks/users/useUsersData';
import { User } from '@/types/users';

interface UserContextValue {
    users: User[];
    isLoadingUsers: boolean;
    error: Error | null;
}

const UserContext = createContext<UserContextValue | null>(null);

export default function UserProvider({
    children,
    initialUsers
}:{
    children: React.ReactNode,
    initialUsers: User[]
}){
    const {data: users, isLoading, error} = useUsersData(initialUsers);

    return(
        <UserContext.Provider value={{users, isLoadingUsers: isLoading, error}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUsers(){
    const context = useContext(UserContext);
    if(!context) throw new Error('useUsers must be used within UserProvider');

    return context;
}