import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/users";

export function useUsersData(initialData: User[]){
    return useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('/api/users');
            if(!res.ok) throw new Error('Failed to fetch users');

            return res.json();
        },
        initialData,
        staleTime: 5000,
        refetchOnWindowFocus: false
    })
}