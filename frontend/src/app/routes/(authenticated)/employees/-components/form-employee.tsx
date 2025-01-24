import { UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Button } from "@/app/_components/ui/button";
import { useEffect } from "react";
import { TCreateEmployeeValidation } from "../-validations/create-employee-validation";
import { TUpdateEmployeeValidation } from "../-validations/update-employee-validation";
import { useGetDepartmentsOptions } from "../../departments/-hooks/use-get-departments-options";
import { Department } from "@/common/types/department";
import { useGetPositionsOptions } from "../-hooks/use-get-positions-options";
import { Position } from "@/common/types/position";
import { useGetShiftsOptions } from "../-hooks/use-get-shifts-options";
import { Shift } from "@/common/types/shift";
import { useGetUsersOptions } from "../-hooks/use-users-options";
import { User } from "@/common/types/user";
import { Textarea } from "@/app/_components/ui/textarea";

type Props = {
  type: "create" | "update";
  form: UseFormReturn<TCreateEmployeeValidation | TUpdateEmployeeValidation>;
  onSubmit: (
    data: TCreateEmployeeValidation | TUpdateEmployeeValidation
  ) => void;
  defaultValues?: TUpdateEmployeeValidation;
};

const FormEmployee = ({ type, form, onSubmit, defaultValues }: Props) => {
  const { data: departments, isPending } = useGetDepartmentsOptions();
  const { data: positions, isPending: isPositionsPending } =
    useGetPositionsOptions();
  const { data: shifts, isPending: isShiftsPending } = useGetShiftsOptions();
  const { data: users, isPending: isUsersPending } = useGetUsersOptions();

  const handleSubmit = form.handleSubmit((data) => {
    console.log("[FORM DATA]", data);
    const formattedData = {
      ...data,
      nip: Number(data.nip),
      phone: data.phone?.trim() ? data.phone : undefined,
      department_id: Number(data.department_id),
      position_id: Number(data.position_id),
      shift_id: Number(data.shift_id),
      user_id: Number(data.user_id),
      join_date: data.join_date
        ? new Date(data.join_date).toISOString().split("T")[0]
        : "",
    };
    console.log("[FORMATTED DATA]", formattedData);
    onSubmit(formattedData);
  });

  useEffect(() => {
    console.log("[FORM ERRORS]", form.formState.errors);
  }, [form.formState.errors]);

  useEffect(() => {
    if (type === "update" && defaultValues) {
      form.setValue("first_name", defaultValues.first_name);
      form.setValue("last_name", defaultValues.last_name);
      form.setValue("phone", defaultValues.phone || "");
      form.setValue("department_id", Number(defaultValues.department_id));
      form.setValue("position_id", Number(defaultValues.position_id));
      form.setValue("shift_id", Number(defaultValues.shift_id));
      form.setValue("address", defaultValues.address || "");
      form.setValue("join_date", defaultValues.join_date);
      form.setValue("user_id", Number(defaultValues.user_id));
      form.setValue("nip", Number(defaultValues.nip));
    }
  }, [defaultValues]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mx-auto w-full max-w-lg"
      >
        <div className="flex gap-2 max-lg:flex-col">
          <FormField
            name="first_name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="First Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="last_name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Last Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-2 max-lg:flex-col">
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="nip"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>NIP</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="NIP"
                    type="number"
                    defaultValue={defaultValues?.nip}
                    onChange={(e) => {
                      field.onChange(e.target.valueAsNumber);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-2 max-lg:flex-col">
          <FormField
            name="department_id"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Department</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value?.toString()}
                  disabled={isPending}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {departments &&
                      !isPending &&
                      departments.map((department: Department) => (
                        <SelectItem
                          value={department.id.toString()}
                          key={department.id}
                        >
                          {department.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="position_id"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Position</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value?.toString()}
                  disabled={isPositionsPending}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Position" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {positions &&
                      !isPositionsPending &&
                      positions.map((position: Position) => (
                        <SelectItem
                          value={position.id.toString()}
                          key={position.id}
                        >
                          {position.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-2 max-lg:flex-col">
          <FormField
            name="shift_id"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Shift</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value?.toString()}
                  disabled={isShiftsPending}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Shift" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {shifts &&
                      !isShiftsPending &&
                      shifts.map((shift: Shift) => (
                        <SelectItem value={shift.id.toString()} key={shift.id}>
                          {shift.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="user_id"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Account</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value?.toString()}
                  disabled={isUsersPending}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Account" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {users &&
                      !isUsersPending &&
                      users.map((user: User) => (
                        <SelectItem value={user.id.toString()} key={user.id}>
                          {user.email}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-2 max-lg:flex-col">
          <FormField
            name="address"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Address"
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="join_date"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Join Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    value={
                      field.value
                        ? new Date(field.value).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormItem className="flex-1">
          <FormControl>
            <Button type="submit">Submit</Button>
          </FormControl>
        </FormItem>
      </form>
    </Form>
  );
};

export default FormEmployee;
