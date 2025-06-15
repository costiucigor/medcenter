"use client"

import type React from "react"
import { useState } from "react"
import "./modal.css"

interface Patient {
    name: string
    phone: string
    hasVisits: boolean
}

interface AddPatientModalProps {
    onClose: () => void
        onAdd: (patient: Patient) => void
}

const AddPatientModal: React.FC<AddPatientModalProps> = ({ onClose, onAdd }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim() && phone.trim()) {
            onAdd({
                name: name.trim(),
                phone: phone.trim(),
                hasVisits: false,
            })
        }
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Добавить пациента</h2>
                    <button className="close-btn" onClick={onClose}>
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                        <label htmlFor="name">Имя пациента</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Введите имя пациента"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+8(988)184-25-7"
                            required
                        />
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="cancel-btn" onClick={onClose}>
                            Отмена
                        </button>
                        <button type="submit" className="submit-btn">
                            Добавить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPatientModal
