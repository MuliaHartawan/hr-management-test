type DescriptionsProps = {
  bordered?: boolean;
  children: React.ReactNode;
};

type DescriptionsItemProps = {
  children: React.ReactNode;
  label?: string;
};

export const Descriptions = ({ bordered, children }: DescriptionsProps) => {
  return (
    <div
      className={`flex flex-col gap-4 ${bordered && "border"} w-full overflow-auto`}
    >
      {children}
    </div>
  );
};

Descriptions.Item = ({ children, label }: DescriptionsItemProps) => {
  return (
    <div className="w-full border">
      {label && <p className="font-semibold text-gray-700 p-2">{label}</p>}
      <p>{children}</p>
    </div>
  );
};
