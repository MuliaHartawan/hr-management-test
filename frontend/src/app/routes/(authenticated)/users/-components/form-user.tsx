import { UseFormReturn } from "react-hook-form";
import { TCreateUserValidation } from "../-validations/create-user-validation";
import { TUpdateUserValidation } from "../-validations/update-user-validation";
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
import { Switch } from "@/app/_components/ui/switch";
import { ROLE_OPTIONS } from "../-enum/role-option";
import { useEffect } from "react";

type Props = {
  type: "create" | "update";
  form: UseFormReturn<TCreateUserValidation | TUpdateUserValidation>;
  onSubmit: (data: TCreateUserValidation | TUpdateUserValidation) => void;
  defaultValues?: TUpdateUserValidation;
};

const FormUser = ({ type, form, onSubmit, defaultValues }: Props) => {
  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data);
  });

  useEffect(() => {
    if (type === "update" && defaultValues) {
      form.setValue("role_id", defaultValues.role_id);
      form.setValue("is_active", defaultValues.is_active);
    }
  }, [defaultValues]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mx-auto w-full max-w-lg"
      >
        {type === "create" && (
          <>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Email" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <FormField
          name="role_id"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(Number(value))}
                value={field.value?.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={ROLE_OPTIONS.STAFF.toString()}>
                    Staff
                  </SelectItem>
                  <SelectItem value={ROLE_OPTIONS.HRD.toString()}>
                    HRD
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="is_active"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Is Active</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
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

export default FormUser;
