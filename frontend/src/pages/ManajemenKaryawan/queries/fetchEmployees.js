import { getEmployee } from "../../../utils/api/employee/index";
import { dataEmployee, useEmployeesStore } from "../store";

export const fetchEmployee = async () => {
  useEmployeesStore.setState({ data: dataEmployee, status: "pending" });
  try {
    const token = localStorage.getItem("token");
    const employee = await getEmployee(token);
    useEmployeesStore.setState({ data: employee, status: "resolve" });
  } catch (error) {
    useEmployeesStore.setState({
      status: "reject",
      error: error,
    });
  }
};
