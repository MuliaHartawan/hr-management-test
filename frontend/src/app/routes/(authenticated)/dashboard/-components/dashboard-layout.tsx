type DashboardLayoutProps = {
    children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div>
            <div>Dashboard Layout</div>
            {children}
        </div>
    )
}