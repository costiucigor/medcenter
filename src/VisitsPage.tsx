import React, { useState } from 'react';
import { Search, Plus, MessageSquare, Calendar, User, Trash2, Edit, Phone } from 'lucide-react';
import Sidebar from "./components/sidebar";

const MedicalVisitsInterface = () => {
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);

    const patients = [
        {
            id: 1,
            name: "Моллау Валентин",
            phone: "+3(888)184-25-74",
            doctor: "Романова Надхжда Александровна",
            specialty: "Травматолог, врач ЛФК, ортопед",
            comment: "С первых дней использования сервиса мы отметили его функциональность, удобный интерфейс и мощные возможности для анализа данных. Визуализация информации позволяет нам быстро выявлять ключевые тренды и закономерности, что значительно ускоряет процесс принятия решений. Особенно полезными оказались аналитические инструменты, которые предоставляют нам точное представление о состоянии различных бизнес-процессов.",
            hasCall: true,
            hasMessage: true
        },
        {
            id: 2,
            name: "Светлана Камаева",
            phone: "+3(888)184-25-74",
            doctor: "Яручина Татьяна Александровна",
            specialty: "Травматолог, врач ЛФК, ортопед",
            comment: "",
            hasCall: true,
            hasMessage: false
        },
        {
            id: 3,
            name: "Вероника Калитарь",
            phone: "+3(888)184-25-74",
            doctor: "Романова Надхжда Александровна",
            specialty: "Травматолог, врач ЛФК, ортопед",
            comment: "",
            hasCall: true,
            hasMessage: true
        },
        {
            id: 4,
            name: "Никита Белькин",
            phone: "+3(888)184-25-74",
            doctor: "Яручина Татьяна Александровна",
            specialty: "Травматолог, врач ЛФК, ортопед",
            comment: "",
            hasCall: true,
            hasMessage: true
        },
        {
            id: 5,
            name: "Кирилл должников",
            phone: "+3(888)184-25-74",
            doctor: "Романова Надхжда Александровна",
            specialty: "Травматолог, врач ЛФК, ортопед",
            comment: "",
            hasCall: true,
            hasMessage: true
        },
        {
            id: 6,
            name: "Семён Шаганин",
            phone: "+3(888)184-25-74",
            doctor: "Яручина Татьяна Александровна",
            specialty: "Травматолог, врач ЛФК, ортопед",
            comment: "",
            hasCall: true,
            hasMessage: true
        },
        {
            id: 7,
            name: "Эрик Шаганил",
            phone: "+3(888)184-25-74",
            doctor: "Романова Надхжда Александровна",
            specialty: "Травматолог, врач ЛФК, ортопед",
            comment: "",
            hasCall: true,
            hasMessage: true
        },
        {
            id: 8,
            name: "Татьяна Барышникова",
            phone: "+3(888)184-25-74",
            doctor: "Яручина Татьяна Александровна",
            specialty: "Травматолог, врач ЛФК, ортопед",
            comment: "",
            hasCall: true,
            hasMessage: false
        },
        {
            id: 9,
            name: "Андрей Рябай",
            phone: "+3(888)184-25-74",
            doctor: "Романова Надхжда Александровна",
            specialty: "Травматолог, врач ЛФК, ортопед",
            comment: "",
            hasCall: true,
            hasMessage: true
        },
        {
            id: 10,
            name: "Михаил Султанов",
            phone: "+3(888)184-25-74",
            doctor: "Яручина Татьяна Александровна",
            specialty: "Травматолог, врач ЛФК, ортопед",
            comment: "",
            hasCall: true,
            hasMessage: true
        }
    ];

    const handleRowSelect = (id) => {
        const newSelection = new Set(selectedRows);
        if (newSelection.has(id)) {
            newSelection.delete(id);
        } else {
            newSelection.add(id);
        }
        setSelectedRows(newSelection);
    };

    const handleSelectAll = () => {
        if (selectedRows.size === patients.length) {
            setSelectedRows(new Set());
        } else {
            setSelectedRows(new Set(patients.map(p => p.id)));
        }
    };

    const styles = {
        container: {
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            padding: '16px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        },
        mainCard: {
            maxWidth: '1400px',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
        },
        header: {
            padding: '16px 24px',
            borderBottom: '1px solid #d1d5db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        headerLeft: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        title: {
            fontSize: '24px',
            fontWeight: '500',
            color: '#111827',
            margin: 0
        },
        calendarSection: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            color: '#6b7280'
        },
        headerRight: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        searchContainer: {
            position: 'relative'
        },
        searchInput: {
            paddingLeft: '40px',
            paddingRight: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
            outline: 'none',
            width: '250px'
        },
        searchIcon: {
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9ca3af',
            width: '16px',
            height: '16px'
        },
        addButton: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#10b981',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
        },
        filtersSection: {
            padding: '12px 24px',
            backgroundColor: '#f9fafb',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
        },
        filterGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
        },
        filterLabel: {
            fontSize: '12px',
            color: '#6b7280',
            fontWeight: '500'
        },
        filterSelect: {
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            padding: '4px 8px',
            fontSize: '13px',
            backgroundColor: 'white',
            minWidth: '200px'
        },
        tableContainer: {
            overflowX: 'auto'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse'
        },
        tableHeader: {
            backgroundColor: '#f9fafb'
        },
        tableHeaderCell: {
            padding: '12px 24px',
            textAlign: 'left',
            fontSize: '11px',
            fontWeight: '500',
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            borderBottom: '1px solid #e5e7eb'
        },
        tableRow: {
            borderBottom: '1px solid #e5e7eb',
            cursor: 'pointer'
        },
        tableRowHover: {
            backgroundColor: '#f9fafb'
        },
        tableCell: {
            padding: '16px 24px',
            verticalAlign: 'top'
        },
        patientInfo: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
        },
        patientName: {
            fontSize: '14px',
            fontWeight: '500',
            color: '#111827'
        },
        patientPhone: {
            fontSize: '13px',
            color: '#6b7280'
        },
        doctorInfo: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
        },
        doctorName: {
            fontSize: '14px',
            fontWeight: '500',
            color: '#111827'
        },
        doctorSpecialty: {
            fontSize: '13px',
            color: '#6b7280'
        },
        comment: {
            fontSize: '13px',
            color: '#111827',
            maxWidth: '400px',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
        },
        actionsContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        actionButton: {
            padding: '4px',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        phoneButton: {
            color: '#10b981'
        },
        messageButton: {
            color: '#3b82f6'
        },
        editButton: {
            color: '#6b7280'
        },
        deleteButton: {
            color: '#ef4444'
        },
        footer: {
            padding: '16px 24px',
            backgroundColor: '#f9fafb',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        footerLeft: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        smsButton: {
            padding: '8px 16px',
            backgroundColor: '#d1d5db',
            color: '#374151',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
        },
        smsCounter: {
            fontSize: '13px',
            color: '#6b7280'
        },
        footerRight: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        pagination: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        pageButton: {
            padding: '4px 8px',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '14px',
            minWidth: '32px',
            textAlign: 'center'
        },
        pageButtonActive: {
            backgroundColor: '#3b82f6',
            color: 'white'
        },
        pageButtonInactive: {
            color: '#6b7280'
        },
        resultsCounter: {
            fontSize: '13px',
            color: '#6b7280'
        },
        pageJump: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: '#6b7280'
        },
        pageInput: {
            width: '60px',
            padding: '4px 8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            fontSize: '13px',
            textAlign: 'center'
        },
        showMoreLink: {
            fontSize: '13px',
            color: '#3b82f6',
            textDecoration: 'none',
            cursor: 'pointer'
        },
        checkbox: {
            width: '16px',
            height: '16px',
            accentColor: '#3b82f6'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.mainCard}>
                {/* Header */}
                <div style={styles.header}>
                    <div style={styles.headerLeft}>
                        <h1 style={styles.title}>Визиты</h1>
                        <div style={styles.calendarSection}>
                            <Calendar style={{ width: '16px', height: '16px' }} />
                            <span>Календарь</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '16px' }}>
                                <span>31 мая 2025</span>
                                <Calendar style={{ width: '16px', height: '16px' }} />
                            </div>
                        </div>
                    </div>
                    <div style={styles.headerRight}>
                        <div style={styles.searchContainer}>
                            <Search style={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Поиск..."
                                style={styles.searchInput}
                            />
                        </div>
                        <button style={styles.addButton}>
                            <Plus style={{ width: '16px', height: '16px' }} />
                            <span>Добавить пациента</span>
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div style={styles.filtersSection}>
                    <div style={styles.filterGroup}>
                        <span style={styles.filterLabel}>Клиника</span>
                        <select style={styles.filterSelect}>
                            <option>Медицинский центр "биомеханика"</option>
                        </select>
                    </div>
                    <div style={styles.filterGroup}>
                        <span style={styles.filterLabel}>Оператор</span>
                        <select style={styles.filterSelect}>
                            <option>Выберите оператора</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead style={styles.tableHeader}>
                        <tr>
                            <th style={styles.tableHeaderCell}>
                                <input
                                    type="checkbox"
                                    checked={selectedRows.size === patients.length}
                                    onChange={handleSelectAll}
                                    style={styles.checkbox}
                                />
                            </th>
                            <th style={styles.tableHeaderCell}>ПАЦИЕНТ</th>
                            <th style={styles.tableHeaderCell}>ДОКТОР</th>
                            <th style={styles.tableHeaderCell}>КОММЕНТАРИЙ</th>
                            <th style={styles.tableHeaderCell}></th>
                        </tr>
                        </thead>
                        <tbody>
                        {patients.map((patient) => (
                            <tr
                                key={patient.id}
                                style={styles.tableRow}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                <td style={styles.tableCell}>
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.has(patient.id)}
                                        onChange={() => handleRowSelect(patient.id)}
                                        style={styles.checkbox}
                                    />
                                </td>
                                <td style={styles.tableCell}>
                                    <div style={styles.patientInfo}>
                                        <div style={styles.patientName}>{patient.name}</div>
                                        <div style={styles.patientPhone}>{patient.phone}</div>
                                    </div>
                                </td>
                                <td style={styles.tableCell}>
                                    <div style={styles.doctorInfo}>
                                        <div style={styles.doctorName}>{patient.doctor}</div>
                                        <div style={styles.doctorSpecialty}>{patient.specialty}</div>
                                    </div>
                                </td>
                                <td style={styles.tableCell}>
                                    {patient.comment && (
                                        <div style={styles.comment}>
                                            {patient.comment}
                                        </div>
                                    )}
                                </td>
                                <td style={styles.tableCell}>
                                    <div style={styles.actionsContainer}>
                                        {patient.hasCall && (
                                            <button style={{...styles.actionButton, ...styles.phoneButton}}>
                                                <Phone style={{ width: '16px', height: '16px' }} />
                                            </button>
                                        )}
                                        {patient.hasMessage && (
                                            <button style={{...styles.actionButton, ...styles.messageButton}}>
                                                <MessageSquare style={{ width: '16px', height: '16px' }} />
                                            </button>
                                        )}
                                        <button style={{...styles.actionButton, ...styles.editButton}}>
                                            <Edit style={{ width: '16px', height: '16px' }} />
                                        </button>
                                        <button style={{...styles.actionButton, ...styles.deleteButton}}>
                                            <Trash2 style={{ width: '16px', height: '16px' }} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div style={styles.footer}>
                    <div style={styles.footerLeft}>
                        <button style={styles.smsButton}>Отправить СМС</button>
                        <span style={styles.smsCounter}>Отправлено смс: 106 /100</span>
                    </div>
                    <div style={styles.footerRight}>
                        <div style={styles.pagination}>
                            <button
                                style={{...styles.pageButton, ...styles.pageButtonInactive}}
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            >
                                ‹
                            </button>
                            {[1, 2, 3, 4, 5, 6, "...", 99].map((page, index) => (
                                <button
                                    key={index}
                                    style={{
                                        ...styles.pageButton,
                                        ...(page === currentPage ? styles.pageButtonActive : styles.pageButtonInactive)
                                    }}
                                    onClick={() => typeof page === 'number' && setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                style={{...styles.pageButton, ...styles.pageButtonInactive}}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                ›
                            </button>
                        </div>
                        <div style={styles.resultsCounter}>1-50 из 21 149</div>
                        <div style={styles.pageJump}>
                            <span>Перейти к странице:</span>
                            <input
                                type="number"
                                defaultValue="3"
                                style={styles.pageInput}
                            />
                        </div>
                        <a href="#" style={styles.showMoreLink}>Показать еще</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalVisitsInterface;