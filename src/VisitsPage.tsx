import React, { useState } from 'react';
import { Search, Plus, MessageSquare, Calendar, User, Trash2, Edit, Phone } from 'lucide-react';
import Sidebar from "./components/sidebar";
import AddPatientModal from "./components/add-patients-modal";
import VisitInfoModal from "./components/visit-info-modal";

const MedicalVisitsInterface = () => {
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showVisitModal, setShowVisitModal] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [patients, setPatients] = useState([
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
    ]);

    const dummyPatient = {
        name: "Test Patient",
        phone: "+40 770 123 456",
        visits: [
            {
                clinic: "Dental Lux",
                address: "ул. Победы 10",
                date: "2025-06-15",
                smsSent: 1,
                smsClicked: 1,
                review: 5,
                bonus: 100,
                phone: "+40 770 123 456"
            },
            {
                clinic: "SmileCare",
                date: "2025-05-28",
                smsSent: 1,
                smsClicked: 0,
                review: 4,
                bonus: 75
            }
        ]
    }

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

    const handleAddPatient = (patient) => {
        setPatients([
            ...patients,
            {
                ...patient,
                id: Math.max(0, ...patients.map(p => p.id)) + 1,
                doctor: '',
                specialty: '',
                comment: '',
                hasCall: false,
                hasMessage: false,
            }
        ]);
        setShowAddModal(false);
    };

    const handlePatientClick = (patient) => {
        setSelectedPatient(patient);
        setShowVisitModal(true);
    };

    return (
        <div className="medical-crm">
            <div className="main-container">
                <div className="layout">
                    <Sidebar activeItem="reviews" />
                    <div className="visits-container">
                        <div className="visits-card">
                            {/* Header */}
                            <div className="visits-header">
                                <div className="visits-header__left">
                                    <h1 className="visits-title">Визиты</h1>
                                    <div className="visits-calendar">
                                        <Calendar style={{width: '16px', height: '16px'}}/>
                                        <span>Календарь</span>
                                        <div className="visits-calendar__date">
                                            <span>31 мая 2025</span>
                                            <Calendar style={{width: '16px', height: '16px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="visits-header__right">
                                    <div className="search-box">
                                        <Search className="visits-search__icon"/>
                                        <input
                                            type="text"
                                            placeholder="Поиск..."
                                            className="visits-search__input"
                                        />
                                    </div>
                                    <button className="visits-add-button" onClick={() => setShowAddModal(true)}>
                                        <Plus style={{width: '16px', height: '16px'}}/>
                                        <span>Добавить пациента</span>
                                    </button>
                                </div>
                            </div>

                            {/* Filters */}
                            <div className="visits-filters">
                                <div className="visits-filter-group">
                                    <span className="visits-filter-label">Клиника</span>
                                    <select className="visits-filter-select">
                                        <option>Медицинский центр "биомеханика"</option>
                                    </select>
                                </div>
                                <div className="visits-filter-group">
                                    <span className="visits-filter-label">Оператор</span>
                                    <select className="visits-filter-select">
                                        <option>Выберите оператора</option>
                                    </select>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="visits-table-container">
                                <table className="visits-table">
                                    <thead className="visits-table-header">
                                    <tr>
                                        <th className="visits-table-header-cell">
                                            <input
                                                type="checkbox"
                                                checked={selectedRows.size === patients.length}
                                                onChange={handleSelectAll}
                                                className="visits-checkbox"
                                            />
                                        </th>
                                        <th className="visits-table-header-cell">ПАЦИЕНТ</th>
                                        <th className="visits-table-header-cell">ДОКТОР</th>
                                        <th className="visits-table-header-cell">КОММЕНТАРИЙ</th>
                                        <th className="visits-table-header-cell"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {patients.map((patient) => (
                                        <tr
                                            key={patient.id}
                                            className="visits-table-row"
                                            onClick={() => handlePatientClick(patient)}
                                        >
                                            <td className="visits-table-cell" onClick={e => e.stopPropagation()}>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedRows.has(patient.id)}
                                                    onChange={() => handleRowSelect(patient.id)}
                                                    className="visits-checkbox"
                                                />
                                            </td>
                                            <td className="visits-table-cell">
                                                <div className="visits-patient-info">
                                                    <div className="visits-patient-name">{patient.name}</div>
                                                    <div className="visits-patient-phone">{patient.phone}</div>
                                                </div>
                                            </td>
                                            <td className="visits-table-cell">
                                                <div className="visits-doctor-info">
                                                    <div className="visits-doctor-name">{patient.doctor}</div>
                                                    <div className="visits-doctor-specialty">{patient.specialty}</div>
                                                </div>
                                            </td>
                                            <td className="visits-table-cell">
                                                {patient.comment && (
                                                    <div className="visits-comment">
                                                        {patient.comment}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="visits-table-cell" onClick={e => e.stopPropagation()}>
                                                <div className="visits-actions">
                                                    {patient.hasCall && (
                                                        <button className="visits-action-button visits-action-button--phone">
                                                            <Phone style={{width: '16px', height: '16px'}}/>
                                                        </button>
                                                    )}
                                                    {patient.hasMessage && (
                                                        <button className="visits-action-button visits-action-button--message">
                                                            <MessageSquare style={{width: '16px', height: '16px'}}/>
                                                        </button>
                                                    )}
                                                    <button className="visits-action-button visits-action-button--edit">
                                                        <Edit style={{width: '16px', height: '16px'}}/>
                                                    </button>
                                                    <button className="visits-action-button visits-action-button--delete">
                                                        <Trash2 style={{width: '16px', height: '16px'}}/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Footer */}
                            <div className="visits-footer">
                                <div className="visits-footer__left">
                                    <button className="visits-sms-button">Отправить СМС</button>
                                    <span className="visits-sms-counter">Отправлено смс: 106 /100</span>
                                </div>
                                <div className="visits-footer__right">
                                    <div className="visits-pagination">
                                        <button
                                            className="visits-page-button visits-page-button--inactive"
                                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                        >
                                            ‹
                                        </button>
                                        {[1, 2, 3, 4, 5, 6, "...", 99].map((page, index) => (
                                            <button
                                                key={index}
                                                className={`visits-page-button ${page === currentPage ? 'visits-page-button--active' : 'visits-page-button--inactive'}`}
                                                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                        <button
                                            className="visits-page-button visits-page-button--inactive"
                                            onClick={() => setCurrentPage(currentPage + 1)}
                                        >
                                            ›
                                        </button>
                                    </div>
                                    <div className="visits-results-counter">1-50 из 21 149</div>
                                    <div className="visits-page-jump">
                                        <span>Перейти к странице:</span>
                                        <input
                                            type="number"
                                            defaultValue="3"
                                            className="visits-page-input"
                                        />
                                    </div>
                                    <a href="#" className="visits-show-more">Показать еще</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showAddModal && (
                <AddPatientModal onClose={() => setShowAddModal(false)} onAdd={handleAddPatient} />
            )}
            {showVisitModal && selectedPatient && (
                <VisitInfoModal  patient={dummyPatient} onClose={() => setShowVisitModal(false)} />
            )}
        </div>
    );
};

export default MedicalVisitsInterface;