"use client"

import type React from "react"
import { useState } from "react"
import Sidebar from "./sidebar"
import AddPatientModal from "./add-patients-modal"
import VisitInfoModal from "./visit-info-modal"
import "./patient-list.css"

interface Patient {
    id: number
    name: string
    phone: string
    hasVisits: boolean
}

const PatientList: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([
        { id: 1, name: "Морару Валентин", phone: "+8(988)184-25-7", hasVisits: true },
        { id: 2, name: "Светлана Камалова", phone: "+8(988)184-25-7", hasVisits: true },
        { id: 3, name: "Вероника Калугина", phone: "+8(988)184-25-7", hasVisits: true },
        { id: 4, name: "Никита Белкин", phone: "+8(988)184-25-7", hasVisits: true },
        { id: 5, name: "Кирилл должен быть", phone: "+8(988)184-25-7", hasVisits: true },
        { id: 6, name: "Самвел Шекоян", phone: "+8(988)184-25-7", hasVisits: true },
        { id: 7, name: "Эрик Шекоян", phone: "+8(988)184-25-7", hasVisits: true },
        { id: 8, name: "Татэвик Барышникова", phone: "+8(988)184-25-7", hasVisits: true },
        { id: 9, name: "Андрей Рабей", phone: "+8(988)184-25-7", hasVisits: true },
        { id: 10, name: "Михаил Супрун", phone: "+8(988)184-25-7", hasVisits: true },
        { id: 11, name: "Иван Левых", phone: "+8(988)184-25-7", hasVisits: true },
    ])

    const [showAddModal, setShowAddModal] = useState(false)
    const [showVisitModal, setShowVisitModal] = useState(false)
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
    const [searchTerm, setSearchTerm] = useState("")

    const filteredPatients = patients.filter(
        (patient) => patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || patient.phone.includes(searchTerm),
    )

    const handleAddPatient = (newPatient: Omit<Patient, "id">) => {
        const patient: Patient = {
            ...newPatient,
            id: Math.max(...patients.map((p) => p.id), 0) + 1,
        }
        setPatients([...patients, patient])
        setShowAddModal(false)
    }

    const handlePatientClick = (patient: Patient) => {
        setSelectedPatient(patient)
        setShowVisitModal(true)
    }

    return (
        <div className="app-container">
            <Sidebar activeItem="visits" />

            <main className="main-content">
                <div className="content-header">
                    <h1>Отзывы</h1>
                    <div className="header-actions">
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Поиск пациента..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        <button className="add-patient-btn" onClick={() => setShowAddModal(true)}>
                            + Добавить пациента
                        </button>
                    </div>
                </div>

                <div className="patients-section">
                    <div className="section-header">
                        <h2>ПАЦИЕНТ</h2>
                    </div>

                    {filteredPatients.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">👥</div>
                            <p>Пациенты не найдены</p>
                        </div>
                    ) : (
                        <div className="patients-list">
                            {filteredPatients.map((patient) => (
                                <div key={patient.id} className="patient-item" onClick={() => handlePatientClick(patient)}>
                                    <div className="patient-info">
                                        <div className="patient-name">{patient.name}</div>
                                        <div className="patient-phone">{patient.phone}</div>
                                    </div>
                                    {patient.hasVisits && (
                                        <div className="visit-indicator">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M20 6L9 17l-5-5"
                                                    stroke="#22c55e"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="pagination">
                        <button className="pagination-btn active">1</button>
                        <button className="pagination-btn">2</button>
                    </div>
                </div>
            </main>

            {showAddModal && <AddPatientModal onClose={() => setShowAddModal(false)} onAdd={handleAddPatient} />}

            {showVisitModal && selectedPatient && (
                <VisitInfoModal
                    patient={selectedPatient}
                    onClose={() => {
                        setShowVisitModal(false)
                        setSelectedPatient(null)
                    }}
                />
            )}
        </div>
    )
}

export default PatientList
