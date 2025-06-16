"use client"

import React from "react"
import "./modal.css"

interface Visit {
    clinic: string
    address?: string
    date: string
    smsSent: number
    smsClicked: number
    review: number
    bonus: number
    phone?: string
}

interface Patient {
    name: string
    phone: string
    visits: Visit[]
}

interface VisitInfoModalProps {
    patient: Patient
    onClose: () => void
}

const VisitInfoModal: React.FC<VisitInfoModalProps> = ({ patient, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content large" style={{ maxWidth: 900, padding: 0 }} onClick={e => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', padding: '40px 40px 0 40px' }}>
                    <div style={{ fontSize: 32, fontWeight: 700, color: '#111827', marginBottom: 32 }}>Информация по визитам</div>
                    <button className="close-btn" style={{ fontSize: 32, color: '#6b7280', background: 'none', border: 'none', padding: 0, marginLeft: 24 }} onClick={onClose}>
                        ×
                    </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '32px 40px 0 40px' }}>
                    <div style={{ width: 48, height: 48, background: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 24 }}>
                        {patient.name.charAt(0)}
                    </div>
                    <div>
                        <div style={{ fontWeight: 600, fontSize: 18, color: '#111827' }}>{patient.name}</div>
                        <div style={{ fontSize: 15, color: '#6b7280', marginTop: 2 }}>{patient.phone}</div>
                    </div>
                </div>
                <div style={{ padding: '32px 40px 40px 40px' }}>
                    <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid #e5e7eb', background: '#fff' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
                            <thead>
                                <tr style={{ background: '#f9fafb', color: '#6b7280', fontSize: 13, fontWeight: 500, textTransform: 'uppercase' }}>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: 500 }}>КЛИНИКА</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: 500 }}>ДАТА ВИЗИТА</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: 500 }}>ОТПРАВЛЕНО СМС</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: 500 }}>ПЕРЕХОД ПО СМС</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: 500 }}>ОТЗЫВ</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: 500 }}>БОНУСЫ</th>
                                </tr>
                            </thead>
                            <tbody>
                            {(patient.visits || []).map((visit, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '12px 16px', minWidth: 200 }}>
                                            <div style={{ fontWeight: 600, color: '#111827', fontSize: 15 }}>{visit.clinic}</div>
                                            <div style={{ color: '#6b7280', fontSize: 14 }}>{visit.address || visit.phone || ''}</div>
                                        </td>
                                        <td style={{ padding: '12px 16px', color: '#111827', fontSize: 15 }}>{visit.date}</td>
                                        <td style={{ padding: '12px 16px', color: '#111827', fontSize: 15 }}>{visit.smsSent}</td>
                                        <td style={{ padding: '12px 16px', color: '#111827', fontSize: 15 }}>{visit.smsClicked}</td>
                                        <td style={{ padding: '12px 16px', color: '#111827', fontSize: 15 }}>{visit.review}</td>
                                        <td style={{ padding: '12px 16px', color: '#111827', fontSize: 15 }}>{visit.bonus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitInfoModal
