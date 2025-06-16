import React, { useState, useRef } from 'react';
import { Search, Download, Star, MessageSquare, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import './crm-style.css';
import Sidebar from "./components/sidebar.tsx";
import ReviewTable from "./components/table.jsx";

const clinicsList = [
  'Джимед',
  'Стоматология "здоровье"',
  'Стоматология "SimClinic"',
  'Стоматология "Улыбка"',
  'Екатерининская',
  'Армед',
  'GB',
  '4 больница',
  '2 больница',
  'Морару Клиник',
  'Option 1',
];

function ClinicSelector() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([clinicsList[1], clinicsList[2]]);
  const ref = useRef();

  const filtered = clinicsList.filter(c => c.toLowerCase().includes(search.toLowerCase()));
  const handleToggle = (clinic) => {
    setSelected(sel => sel.includes(clinic) ? sel.filter(c => c !== clinic) : [...sel, clinic]);
  };
  React.useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);
  return (
    <div className="clinic-selector">
      <span className="clinic-selector__label">Клиники</span>
      <div className="clinic-selector__dropdown" ref={ref} tabIndex={0} onClick={() => setOpen(v => !v)} style={{borderColor: open ? '#10b981' : '#00b360'}}>
        <span className="clinic-selector__selected">{selected.length > 1 ? `Выбрано ${selected.length}` : selected[0] || 'Выбрать'}</span>
        <svg className="clinic-selector__arrow" width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M1 1L7 7L13 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {open && (
          <div className="clinic-selector__menu" style={{display:'block'}} onClick={e => e.stopPropagation()}>
            <input className="clinic-selector__search" placeholder="Поиск..." value={search} onChange={e => setSearch(e.target.value)} />
            {filtered.map(clinic => (
              <label key={clinic} style={{display:'flex',alignItems:'center',gap:8,padding:'4px 0'}}>
                <input type="checkbox" checked={selected.includes(clinic)} onChange={() => handleToggle(clinic)} /> {clinic}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MedicalCRM() {
    const [currentPage, setCurrentPage] = useState(1);

    const reviews = [
        {
            id: 1,
            name: 'Морару Валентин',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: [],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 2,
            name: 'Светлана Камаева',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Готово!',
            badges: ['PRO', 'Яндекс'],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 3,
            name: 'Вероника Калугарь',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: ['PRO'],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 4,
            name: 'Никита Белкин',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: ['Яндекс'],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 5,
            name: 'Кирилл должнеков',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: [],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 6,
            name: 'Самвел Шекоян',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: ['PRO'],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 7,
            name: 'Эрик Шекоян',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: ['Яндекс'],
            sms: 'none',
            reviewDate: '14 марта 2025'
        },
        {
            id: 8,
            name: 'Тагавик Барышникова',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: ['Яндекс'],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 9,
            name: 'Андрей Рабей',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: ['Яндекс'],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 10,
            name: 'Михаил Супрунов',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: ['PRO', 'Яндекс'],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 11,
            name: 'Иван Левых',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: ['PRO', 'Яндекс'],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 12,
            name: 'Морару Валентин',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: ['PRO', 'Яндекс'],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        },
        {
            id: 13,
            name: 'Никита Белкин',
            phone: '+8(988)184-25-74',
            date: '14 февраля 2025',
            rating: 5,
            status: 'Отправить',
            badges: ['PRO', 'Яндекс'],
            sms: 'sent',
            reviewDate: '14 марта 2025'
        }
    ];

    const renderStars = (rating) => {
        return Array.from({length: 5}, (_, i) => (
            <Star key={i} className="star-icon"/>
        ));
    };

    const renderBadge = (badge) => {
        if (badge === 'PRO') {
            return (
                <span className="badge badge--pro">
          PRO
        </span>
            );
        }
        if (badge === 'Яндекс') {
            return (
                <span className="badge badge--yandex">
          Я Яндекс
        </span>
            );
        }
    };

    const getSMSIcon = (smsStatus) => {
        if (smsStatus === 'sent') {
            return <MessageSquare className="sms-icon sms-icon--sent"/>;
        }
        return <MessageSquare className="sms-icon sms-icon--unsent"/>;
    };

    return (
        <div className="medical-crm">
            {/* Header */}
            <div className="main-container">
                <div className="layout">
                    {/* Sidebar */}
                    <Sidebar activeItem="reviews" />

                    {/* Main Content */}
                    <main className="content">
                        <div className="reviews-panel">
                            {/* Panel Header */}
                            <div className="panel-header">
                                <div className="panel-header__left">
                                    <h1 className="panel-title">Отзывы</h1>
                                    <ClinicSelector />
                                </div>

                                <div className="panel-header__right">
                                    <div className="search-box">
                                        <input type="text" placeholder="Поиск..."/>
                                        <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16">
                                            <circle cx="7" cy="7" r="6" stroke="#888" strokeWidth="2" fill="none"/>
                                            <line x1="11" y1="11" x2="15" y2="15" stroke="#888" strokeWidth="2"/>
                                        </svg>
                                    </div>

                                    <button className="xls-button">
                                        <span>XLS</span>
                                        <Download className="xls-button__icon"/>
                                    </button>
                                </div>
                            </div>

                            {/* Table Header */}
                            <ReviewTable reviews={reviews} renderStars={renderStars} renderBadge={renderBadge}
                                         getSMSIcon={getSMSIcon}/>


                            {/* Footer with Pagination */}
                            <div className="panel-footer">
                                <div className="footer-content">
                                    <div className="user-info">
                                        <div className="user-avatar">
                                            <span>В</span>
                                        </div>
                                        <span className="user-name">Морару Валентин</span>
                                    </div>

                                    <div className="pagination-section">
                                        <div className="pagination">
                                            <button
                                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                                className="pagination__nav"
                                            >
                                                <ChevronLeft className="pagination__nav-icon"/>
                                            </button>

                                            <div className="pagination__pages">
                                                {[1, 2, 3, 4, 5, 6].map((page) => (
                                                    <button
                                                        key={page}
                                                        onClick={() => setCurrentPage(page)}
                                                        className={`pagination__page ${currentPage === page ? 'pagination__page--active' : ''}`}
                                                    >
                                                        {page}
                                                    </button>
                                                ))}
                                                <span className="pagination__ellipsis">...</span>
                                                <button className="pagination__page">99</button>
                                            </div>

                                            <button
                                                onClick={() => setCurrentPage(currentPage + 1)}
                                                className="pagination__nav"
                                            >
                                                <ChevronRight className="pagination__nav-icon"/>
                                            </button>
                                        </div>

                                        <div className="pagination-info">
                                            <span className="pagination-info__text">1–50 из 21 149</span>
                                            <div className="page-jump">
                                                <span className="page-jump__label">Перейти к странице:</span>
                                                <input
                                                    type="number"
                                                    className="page-jump__input"
                                                    defaultValue="3"
                                                />
                                                <ChevronRight size={16} className="jump-icon"/>
                                            </div>
                                            <button className="show-more">Показать еще</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}