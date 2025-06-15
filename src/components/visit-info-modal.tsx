"use client"

import type React from "react"
import "./modal.css"

interface Patient {
    id: number
    name: string
    phone: string
    hasVisits: boolean
}

interface VisitInfoModalProps {
    patient: Patient
    onClose: () => void
}

const VisitInfoModal: React.FC<VisitInfoModalProps> = ({ patient, onClose }) => {
    const visitData = [
        { date: "15.06.2024", service: "Консультация терапевта", doctor: "Иванов И.И.", status: "Завершен" },
        { date: "10.06.2024", service: "Анализ крови", doctor: "Петрова А.С.", status: "Завершен" },
        { date: "05.06.2024", service: "УЗИ брюшной полости", doctor: "Сидоров П.П.", status: "Завершен" },
        { date: "01.06.2024", service: "Кардиограмма", doctor: "Козлова М.В.", status: "Завершен" },
    ]

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Информация по визитам</h2>
                    <button className="close-btn" onClick={onClose}>
                        ×
                    </button>
                </div>

                <div className="patient-details">
                    <div className="patient-summary">
                        <div className="patient-avatar">{patient.name.charAt(0)}</div>
                        <div className="patient-meta">
                            <h3>{patient.name}</h3>
                            <p>{patient.phone}</p>
                        </div>
                    </div>
                </div>

                <div className="visits-section">
                    <h3>История визитов</h3>
                    <div className="visits-table">
                        <div className="table-header">
                            <div className="col">Дата</div>
                            <div className="col">Услуга</div>
                            <div className="col">Врач</div>
                            <div className="col">Статус</div>
                        </div>
                        {visitData.map((visit, index) => (
                            <div key={index} className="table-row">
                                <div className="col">{visit.date}</div>
                                <div className="col">{visit.service}</div>
                                <div className="col">{visit.doctor}</div>
                                <div className="col">
                                    <span className="status-badge completed">{visit.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="modal-actions">
                    <button className="cancel-btn" onClick={onClose}>
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VisitInfoModal
