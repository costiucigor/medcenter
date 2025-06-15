import type React from "react"
import "./sidebar.css"

interface SidebarProps {
    activeItem?: string
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = "visits" }) => {
    const menuItems = [
        {
            id: "clinics",
            label: "Клиники",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4v18" />
                    <path d="M19 21V11l-6-4" />
                </svg>
            ),
        },
        {
            id: "reviews",
            label: "Отзывы",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
            ),
        },
        {
            id: "visits",
            label: "Визиты",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                </svg>
            ),
        },
        {
            id: "analytics",
            label: "Аналитика",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                </svg>
            ),
        },
        {
            id: "medods",
            label: "MEDODS",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
            ),
        },
    ]

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="logo-container">
                    <div className="logo-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                    </div>
                    <div className="logo-text">
                        <div className="brand-name">Respect</div>
                        <div className="brand-subtitle">medical</div>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <div key={item.id} className={`nav-item ${activeItem === item.id ? "active" : ""}`}>
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </div>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="user-avatar">B</div>
                    <span className="user-name">Морару Валентин</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
