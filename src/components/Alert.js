import { X } from 'lucide-react';
import React from 'react';

const Alert = ({ alert, onClose }) => {
    if (!alert ) return null;

    return (
        <div className={`fixed z-10 bottom-4 right-4 mb-4 mr-4 px-6 py-4 shadow-lg transition-opacity duration-300 ${alert.type === 'success' ? 'bg-zinc-50 border border-green-400 text-green-700' : 'bg-zinc-50 border border-red-400 text-red-700'}`}>
            <span>{alert.message}</span>
            <button onClick={onClose} className="ml-4 text-zinc-950">
            <X className="w-4 h-4" />
            </button>
        </div>
    );
};



export default Alert;
