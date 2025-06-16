"use client"

import React, { useState } from "react"
import "./modal.css"

interface AddPatientModalProps {
    onClose: () => void
    onAdd: (patient: {
        name: string
        phone: string
        doctor: string
        comment: string
        visits: {
            clinic: string
            address: string
            date: string
            smsSent: number
            smsClicked: number
            review: number
            bonus: number
            phone: string
        }[]
    }) => void
}

const DOCTORS = [
    "Романова Надежда Александровна",
    "Яручина Татьяна Александровна",
    "Другой доктор"
]

const AddPatientModal: React.FC<AddPatientModalProps> = ({ onClose, onAdd }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [doctor, setDoctor] = useState("")
    const [comment, setComment] = useState("")
    const [visits, setVisits] = useState([
        {
            clinic: "",
            address: "",
            date: "",
            smsSent: 0,
            smsClicked: 0,
            review: 0,
            bonus: 0,
            phone: ""
        }
    ])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim() && phone.trim() && doctor.trim()) {
            onAdd({ name: name.trim(), phone: phone.trim(), doctor: doctor.trim(), comment: comment.trim(), visits })
            onClose()
        }
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" style={{ maxWidth: 420, padding: 0 }} onClick={e => e.stopPropagation()}>
                <div style={{ padding: "40px", textAlign: "center" }}>
                    <div style={{ fontSize: 32, fontWeight: 700, color: "#111827", marginBottom: 32 }}>Добавить пациента</div>
                    <form style={{overflow: "hidden"}} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="ФИО"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            style={{
                                width: "100%",
                                marginBottom: 16,
                                padding: "16px 20px",
                                borderRadius: 12,
                                background: "#f5f5f5",
                                border: "none",
                                fontSize: 17,
                                fontWeight: 500,
                                outline: "none"
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Телефон"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            style={{
                                width: "100%",
                                marginBottom: 16,
                                padding: "16px 20px",
                                borderRadius: 12,
                                background: "#f5f5f5",
                                border: "none",
                                fontSize: 17,
                                fontWeight: 500,
                                outline: "none"
                            }}
                        />
                        <div style={{ position: "relative", marginBottom: 16 }}>
                            <select
                                value={doctor}
                                onChange={e => setDoctor(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "16px 20px",
                                    borderRadius: 12,
                                    background: "#f5f5f5",
                                    border: "none",
                                    fontSize: 17,
                                    fontWeight: 500,
                                    appearance: "none",
                                    outline: "none",
                                    color: doctor ? "#111827" : "#9ca3af"
                                }}
                            >
                                <option value="" disabled hidden>Доктор</option>
                                {DOCTORS.map((d, i) => (
                                    <option key={i} value={d}>{d}</option>
                                ))}
                            </select>
                            <span style={{
                                position: "absolute",
                                right: 20,
                                top: "50%",
                                transform: "translateY(-50%)",
                                pointerEvents: "none",
                                fontSize: 18,
                                color: "#9ca3af"
                            }}>▼</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Комментарий"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            style={{
                                width: "100%",
                                marginBottom: 32,
                                padding: "16px 20px",
                                borderRadius: 12,
                                background: "#f5f5f5",
                                border: "none",
                                fontSize: 17,
                                fontWeight: 500,
                                outline: "none"
                            }}
                        />
                        <div style={{ display: "flex", gap: 16, marginBottom: 0 }}>
                            <button
                                type="button"
                                onClick={onClose}
                                style={{
                                    flex: 1,
                                    background: "#111827",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 12,
                                    fontSize: 18,
                                    fontWeight: 600,
                                    padding: "16px 0",
                                    cursor: "pointer"
                                }}
                            >
                                Отмена
                            </button>
                            <button
                                type="submit"
                                style={{
                                    flex: 1,
                                    background: "#10b981",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 12,
                                    fontSize: 18,
                                    fontWeight: 600,
                                    padding: "16px 0",
                                    cursor: "pointer"
                                }}
                                disabled={!(name && phone && doctor)}
                            >
                                Добавить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPatientModal
