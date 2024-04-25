import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdOutlineChat,
  MdNotifications,
  MdPublic,
  MdPlayCircleFilled,
  MdReadMore,
} from "react-icons/md";

export const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export const navItems = [
  { id: 1, icon: <MdOutlineChat size={20} /> },
  { id: 2, icon: <MdNotifications size={20} /> },
  { id: 3, icon: <MdPublic size={20} /> },
];

export const dashboardCards = [
  {
    id: 1,
    icon: <MdSupervisedUserCircle size={24} />,
    title: "Total Users",
    users: "10.928",
    percentage: "12",
    description: "more than previous work",
  },
  {
    id: 2,
    icon: <MdSupervisedUserCircle size={24} />,
    title: "Stock",
    users: "8.236",
    percentage: "2",
    description: "more than previous work",
  },
  {
    id: 3,
    icon: <MdSupervisedUserCircle size={24} />,
    title: "Revenue",
    users: "6.642",
    percentage: "18",
    description: "more than previous work",
  },
];

export const tableHeadings = ["Name", "Status", "Date", "Amount"];
export const usersTableHeadings = [
  "Name",
  "Email",
  "Created At",
  "Role",
  "status",
  "Action",
];
export const productsTableHeadings = [
  "Title",
  "Description",
  "Price",
  "Created At",
  "Stock",
  "Action",
];

export const transactions = [
  {
    id: "1",
    name: "Josiphie Zimemmerman",
    status: "pending",
    date: "14.01.2024",
    amount: "3.200",
  },
  {
    id: "2",
    name: "Rahul Sharma",
    status: "done",
    date: "14.01.2024",
    amount: "3.400",
  },
  {
    id: "3",
    name: "Karishma Garg",
    status: "cancelled",
    date: "14.01.2024",
    amount: "3.600",
  },
  {
    id: "4",
    name: "Mudit Goswami",
    status: "pending",
    date: "14.01.2024",
    amount: "3.980",
  },
  {
    id: "5",
    name: "Kanak Saraswart",
    status: "done",
    date: "14.01.2024",
    amount: "4.200",
  },
];

//Charts Data
export const chartData = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];

export const rightBar = [
  {
    id: 1,
    title: "🔥 Available Now",
    purpose: "How to use the new version of the admin dashboard ?",
    time: "Takes 4 minutes to learn",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <MdPlayCircleFilled />,
    button: "Watch",
  },
  {
    id: 2,
    title: "🚀 Coming Soon",
    purpose:
      "New Server actions are available partial pre-rendering is coming upl",
    time: "Boost your productivity",
    description: "Reprehenderit eius libero perspiciatis recusandae possimus.",
    icon: <MdReadMore />,
    button: "Learn",
  },
];
