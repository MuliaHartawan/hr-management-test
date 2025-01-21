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
import { TCreatePositionValidation } from "../-validations/create-position-validation";
import { TUpdatePositionValidation } from "../-validations/update-position-validation";
import { useGetDepartmentsOptions } from "../../departments/-hooks/use-get-departments-options";
import { Department } from "@/common/types/department";

type Props = {
  type: "create" | "update";
  form: UseFormReturn<TCreatePositionValidation | TUpdatePositionValidation>;
  onSubmit: (
    data: TCreatePositionValidation | TUpdatePositionValidation
  ) => void;
  defaultValues?: TUpdatePositionValidation;
};

const FormPosition = ({ type, form, onSubmit, defaultValues }: Props) => {
  const { data: departments, isPending } = useGetDepartmentsOptions();

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data);
  });

  useEffect(() => {
    if (type === "update" && defaultValues) {
      form.setValue("name", defaultValues.name);
      form.setValue("department_id", defaultValues.department_id);
    }
  }, [defaultValues, form, type, isPending]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mx-auto w-full max-w-lg"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="department_id"
          control={form.control}
          render={({ field }) => (
            <FormItem>
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

        <FormItem>
          <FormControl>
            <Button type="submit">Submit</Button>
          </FormControl>
        </FormItem>
      </form>
    </Form>
  );
};

export default FormPosition;
