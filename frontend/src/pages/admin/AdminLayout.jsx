import SidebarComponent from "@/components/SidebarComponent";
import { userProfile } from "@/utils/api";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const data = useLoaderData();
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/admin' || location.pathname === '/admin/') navigate('/admin/dashboard')
  }, [])
 
  
  return (
    <Flowbite>
            <div className="bg-[#e7e8e9] dark:bg-[#111827] min-h-screen">
                <SidebarComponent />
                <div className="lg:ms-[300px] p-10"> 
                    <Outlet context={{...data}} />
                </div>
            </div>
            <DarkThemeToggle className="fixed bottom-5 right-5" />
        </Flowbite>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => userProfile();

export default AdminLayout