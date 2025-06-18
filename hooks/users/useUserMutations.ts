// Layer 3: Mutations with optimism
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { User } from '@/types/users';

export type User = {
  id: string;
  name: string;
  age: string;
  price: string;
};

export function useUserMutations() {
  const queryClient = useQueryClient();

  const createUserMutation = useMutation({
    mutationFn: async (newUser: { name: string; age: string; price: string}) => {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error('Failed to create team');
      return response.json();
    },
    onMutate: async (newUser) => {
      await queryClient.cancelQueries({ queryKey: ['users'] });
      const currentUsers = queryClient.getQueryData(['users']);
      queryClient.setQueryData(['users'], (old: User[] = []) => [
        ...old,
        { ...newUser, id: `temp-${Date.now()}` }
      ]);
      return { currentUsers };
    },
    onError: (err, variables, context) => {
      if (context?.currentUsers) {
        queryClient.setQueryData(['users'], context.currentUsers);
  }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });

  const deleteUserMutation = useMutation({
    mutationFn: async (userId: string) => {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete team');
      return response.json();
    },
    onMutate: async (userId) => {
      await queryClient.cancelQueries({ queryKey: ['users'] });
      const currentUsers = queryClient.getQueryData(['users']);
      queryClient.setQueryData(['users'], (old: User[] = []) =>
        old.filter(user => user.id !== userId)
      );
      return { currentUsers };
    },
    onError: (err, userId, context) => {
      if (context?.currentUsers) {
        queryClient.setQueryData(['users'], context.currentUsers);
  }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });

  return {
    createUser: createUserMutation.mutate,
    deleteUser: deleteUserMutation.mutate,
    // @ts-ignore
    isCreating: createUserMutation.isLoading,
    // @ts-ignore
    isDeleting: deleteUserMutation.isLoading,
  };
}