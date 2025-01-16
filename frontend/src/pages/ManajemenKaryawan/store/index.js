/* eslint-disable no-unused-vars */
import { create } from "zustand";

export const dataEmployee = [
  {
    id: 1,
    user_id: 4,
    employee_id: 104,
    first_name: "Bob",
    last_name: "Williams",
    department_id: 2,
    position_id: "1",
    shift_id: 1,
    phone: "+628765432109",
    address: "Jl. Jendral Soedirman No. 56, Yogyakarta",
    join_date: "2021-05-30",
    created_at: "2025-01-14T14:17:05.000Z",
    updated_at: "2025-01-14T14:17:05.000Z",
    department: null,
    position: null,
    user: {
      id: 4,
      role_id: 2,
      email: "staff2@example.com",
      password: "$2b$10$CrYhVMAZ9yzDNPBt6b80Ie/EiqbkSGJlj68CQ/olLxKDRH8XN8ua2",
      is_active: true,
      created_at: "2025-01-14T08:09:28.000Z",
      updated_at: "2025-01-14T08:09:28.000Z",
      role: {
        id: 2,
        name: "STAFF",
      },
    },
    shift: null,
  },
];

export const useEmployeesStore = create((set) => ({
  data: dataEmployee,
  addData: (data) =>
    set((state) => ({
      ...state,
      data: [...state.data, ...data.data],
      meta: data.meta,
      status: "resolve",
      loading: false,
    })),
  set: (data) => set((state) => ({ ...state, data: [], status: "resolve" })),
  reset: () => set({ ready: false, data: dataEmployee, status: "reject" }),
}));
