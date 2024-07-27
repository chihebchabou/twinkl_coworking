import { Sidebar, Drawer, Button, Popover } from "flowbite-react";
import { useState } from "react";
import { HiChartPie, HiUser, HiAcademicCap, HiLogout } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";



const SidebarComponent = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    return (
        <>
            <div className="fixed h-full hidden lg:block">
                <Sidebar
                    aria-label="Sidebar with multi-level dropdown example"
                    className="[&>div]:bg-white [&>div]:p-3 w-[300px]"
                >

                    <div className="text-gray-500 font-bold mb-8 mt-5 ms-5">MENU</div>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="/admin/dashboard" onClick={(e) => {
                                e.preventDefault()
                                navigate('/admin/dashboard')
                            }} icon={HiChartPie}>
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item href="/admin/customers" onClick={(e) => {
                                e.preventDefault()
                                navigate('/admin/customers')
                            }} icon={HiUser}>
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item href="/admin/courses" onClick={(e) => {
                                e.preventDefault()
                                navigate('/admin/courses')
                            }} icon={HiAcademicCap}>
                                Les formations
                            </Sidebar.Item>
                            <Sidebar.Item href="/admin/courses" onClick={(e) => {
                                e.preventDefault()
                            }} icon={HiLogout}>
                                Déconnecter
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>

                    </Sidebar.Items>


                </Sidebar>
            </div>
            <div className="lg:hidden">
                <div className="p-2">
                    <Popover content={(
                        <div className="p-2 text-sm text-gray-500 dark:text-gray-400">
                            Menu
                        </div>
                    )} trigger="hover" placement="right">
                        <Button outline gradientDuoTone="purpleToBlue" className="flex justify-center items-center" onClick={() => setIsOpen(true)}><GiHamburgerMenu /></Button>
                    </Popover>
                </div>
                <Drawer open={isOpen} onClose={handleClose}>
                    <Drawer.Header title="MENU" titleIcon={() => <></>} />
                    <Drawer.Items>
                        <Sidebar
                            aria-label="Sidebar with multi-level dropdown example"
                            className="[&>div]:bg-transparent [&>div]:p-0"
                        >
                            <div className="flex h-full flex-col justify-between py-2">
                                <div>
                                    <Sidebar.Items>
                                        <Sidebar.ItemGroup>
                                            <Sidebar.Item href="/admin/dashboard" onClick={(e) => {
                                                e.preventDefault()
                                                navigate('/admin/dashboard')
                                            }} icon={HiChartPie}>
                                                Dashboard
                                            </Sidebar.Item>
                                            <Sidebar.Item href="#" onClick={(e) => {
                                                e.preventDefault()
                                                navigate('/admin/customers')
                                            }} icon={HiUser}>
                                                Users
                                            </Sidebar.Item>
                                            <Sidebar.Item href="#" onClick={(e) => {
                                                e.preventDefault()
                                                navigate('/admin/courses')
                                            }} icon={HiAcademicCap}>
                                                Les formations
                                            </Sidebar.Item>
                                            <Sidebar.Item href="#" onClick={(e) => {
                                                e.preventDefault()
                                                
                                            }} icon={HiLogout}>
                                                Déconnecter
                                            </Sidebar.Item>
                                        </Sidebar.ItemGroup>

                                    </Sidebar.Items>

                                </div>
                            </div>
                        </Sidebar>
                    </Drawer.Items>
                </Drawer>
            </div>
        </>
    )
}

export default SidebarComponent