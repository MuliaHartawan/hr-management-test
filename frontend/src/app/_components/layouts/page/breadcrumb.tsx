import { TBreadcrumb } from "../../types/breadcrumb-types";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";

export const Breadcrumbs = ({ items }: { items: TBreadcrumb[] }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={item.path}>
            <BreadcrumbItem>
              {index !== items.length - 1 ? (
                <BreadcrumbLink href={item.path}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index !== items.length - 1 && <BreadcrumbSeparator key={index} />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
