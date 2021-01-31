import React from 'react';

export default function Modal({ title, message, dismissLabel, onDismiss }) {
    return (
        <div className="modal fade show" style={{ display: 'block', background: 'rgb(0,0,0, 0.8)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onDismiss}>{dismissLabel}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}