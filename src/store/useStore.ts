import { create } from 'zustand';

interface UserState {
  name: string;
  email: string;
  username: string;
  image: string | null;
  setUser: (data: {
    name: string;
    email: string;
    username: string;
    image: string | null;
  }) => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: '',
  email: '',
  username: '',
  image: null,
  setUser: (data) => set(data),
}));
