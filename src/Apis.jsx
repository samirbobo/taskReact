import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

// ======================  fetch Data  ==========================
export const getUsers = async () => {
  const response = await axios.get(`${baseUrl}/users`);
  return response.data;
};

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });


// ======================  fetch Data by id  ==========================
export const getUserById = async (userId) => {
  const response = await axios.get(`${baseUrl}/users/${userId}`);
  return response.data;
};

export const useUserById = (userId) =>
  useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
    enabled: !!userId,
  });

// ======================  Add Data  ==========================
export const addUser = async (formData) => {
  const response = await axios.post(`${baseUrl}/users`, formData);
  return response.data;
};

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser,
    onSuccess: (newUser) => {
      queryClient.setQueryData(["users"], (oldData) => {
        return [...oldData, newUser];
      });
    },
  });
};

// ======================  Edit Data  ==========================
export const editUser = async (formData) => {
  const response = await axios.patch(
    `${baseUrl}/users/${formData.id}`,
    formData
  );
  return response.data;
};

export const useEditUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editUser,
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["users"], (oldUsers) => {
        return oldUsers.map((user) =>
          user.id === updatedUser.id ? { ...user, ...updatedUser } : user
        );
      });
    },
  });
};

// ======================  delete Data  ==========================
export const deleteUser = async (userID) => {
  const response = await axios.delete(`${baseUrl}/users/${userID}`);
  return response.data;
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: (_, userID) => {
      queryClient.setQueryData(["users"], (oldUsers) => {
        return oldUsers.filter((user) => user.id !== userID);
      });
    },
  });
};
