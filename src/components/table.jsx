import React from 'react';
import { Trash2 } from 'lucide-react'; // Ensure you have lucide-react installed

const ReviewTable = ({ reviews, renderStars, renderBadge, getSMSIcon }) => {
    const SortIcon = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M2.66699 4H7.33366" stroke="#1E1E1E" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.66699 8H7.33366" stroke="#1E1E1E" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.66699 12H8.66699" stroke="#1E1E1E" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6L12 4L14 6" stroke="#1E1E1E" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 4V12" stroke="#1E1E1E" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>
    );

    return (
        <div className="review-table">
            {/* Table Header */}
            <div className="table-header">
                <div className="table-header__grid">
                    <div className="table-header__cell">Пациент</div>
                    <div className="table-header__cell">
                        Дата визита <SortIcon />
                    </div>
                    <div className="table-header__cell">
                        Рейтинг <SortIcon />
                    </div>
                    <div className="table-header__cell">Бонусы</div>
                    <div className="table-header__cell">Отзыв</div>
                    <div className="table-header__cell">СМС</div>
                    <div className="table-header__cell">
                        Дата отзыва <SortIcon />
                    </div>
                    <div className="table-header__cell"></div>
                </div>
            </div>

            {/* Table Body */}
            <div className="table-body">
                {reviews.map((review) => (
                    <div key={review.id} className="table-row">
                        <div className="table-row__grid">
                            {/* Patient */}
                            <div className="table-cell">
                                <div className="patient">
                                    <div className="patient__name">{review.name}</div>
                                    <div className="patient__phone">{review.phone}</div>
                                </div>
                            </div>

                            {/* Visit Date */}
                            <div className="table-cell">
                                <span className="date">{review.date}</span>
                            </div>

                            {/* Rating */}
                            <div className="table-cell">
                                <div className="rating">{renderStars(review.rating)}</div>
                            </div>

                            {/* Bonuses */}
                            <div className="table-cell">
                                {review.status === 'Готово!' ? (
                                    <span className="status-text">Готово!</span>
                                ) : (
                                    <button className="send-button">Отправить</button>
                                )}
                            </div>

                            {/* Review Badges */}
                            <div className="table-cell">
                                <div className="badges">
                                    {review.badges.map((badge, index) => (
                                        <div key={index}>{renderBadge(badge)}</div>
                                    ))}
                                </div>
                            </div>

                            {/* SMS */}
                            <div className="table-cell">{getSMSIcon(review.sms)}</div>

                            {/* Review Date */}
                            <div className="table-cell">
                                <span className="date">{review.reviewDate}</span>
                            </div>

                            {/* Actions */}
                            <div className="table-cell">
                                <div className="actions">
                                    <button className="delete-button">
                                        <Trash2 className="delete-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewTable;