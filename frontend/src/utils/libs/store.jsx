/* eslint-disable no-unused-vars */
import { create } from "zustand";

const profileValue = {
  email: "hrd@email.com",
  role: "hrd",
};

export const useProfileStore = create((set) => ({
  ready: false,
  data: {},
  set: (data) => set((state) => ({ ...state, ...data })),
  reset: () => set({ ready: false, data: {} }),
}));

const activeDashboardValue = {};

export const useActiveDashboard = create((set) => ({
  ready: false,
  data: activeDashboardValue,
  set: (data) => set((state) => ({ ...state, ...data })),
  reset: () => set({ ready: false, data: profileValue }),
}));
