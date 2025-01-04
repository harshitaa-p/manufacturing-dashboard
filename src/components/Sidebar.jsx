    import {LayoutDashboard, LogIn, Menu, ReceiptIcon, TableOfContents, UserPen } from 'lucide-react'
    import React, { useState } from 'react'
    import {AnimatePresence, motion} from "framer-motion"
    import { Link } from 'react-router-dom';
    import maqbitImage from "../assets/maqbit.jpg";


    const SIDEBAR_ITEMS = [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          color: "#4CAF50", // Example: Green
          href: "/dashboard",
        },
        {
          name: "Tables",
          icon: TableOfContents,
          color: "#FF9800", // Example: Orange
          href: "/tables",
        },
        {
          name: "Billing",
          icon: ReceiptIcon,
          color: "#F44336", // Example: Red
          href: "/billing",
        },
        {
          name: "Profile",
          icon: UserPen,
          color: "#3F51B5", // Example: Indigo
          href: "/profile",
        },
        {
          name: "Sign-up",
          icon: LogIn,
          color: "#3F51B5", // Example: Blue
          href: "/signup",
        },
      ];


    const Sidebar = () => {
        const [isSidebarOpen, setIsSidebarOpen] = useState(true);
        return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0
            ${isSidebarOpen ? 'w-64' : 'w-20'}`}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
        >
            <div
            className="flex-col h-full p-4 bg-gray-200 bg-opacity-50 border-r border-gray-100 backdrop-blur-md"
            >
                <div className="flex items-center mb-8">
                    <img
                        src={maqbitImage} // Replace with your image path
                        alt="Dashboard Logo"
                        className="w-20 h-6"
                        />
                        {isSidebarOpen && (
                            <span className="ml-4 text-lg font-bold text-black">
                                
                            </span>
                        )}
                    </div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 transition-colors rounded-full hover:bg-white max-w-fit"
            >
            <Menu size={20} style={{ color: 'black' }} /> 
    </motion.button>
            <nav className='flex-grow mt-8'>
                {
                    SIDEBAR_ITEMS.map((item)=>(
                        <Link key={item.href} to= {item.href}>
                            <motion.div
                            className='flex items-center p-4 mb-2 text-sm font-medium rounded-lg hover:bg-white transitions-colors '
                            whileHover={{ scale: 1.05 }} // Scale effect on hover
                            transition={{ type: "tween", stiffness: 300 }}>
                            <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                            <AnimatePresence>
                                {isSidebarOpen &&(
                                    <motion.span
                                    className='ml-4 text-gray-600 whitespace-nowrap'
                                    initial={{opacity:0, width:0}}
                                    animate={{opacity:1,width:0}}
                                    exit={{opacity:0,width:0}}
                                    transition={{duration:0.2, delay:0.3}}>
                                        {item.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            </motion.div>
                        </Link>
                    ))
                }
            </nav>
            </div>
        </motion.div>
        );
    };
    
    export default Sidebar;
    
