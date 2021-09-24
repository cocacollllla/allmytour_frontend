import React, { useState, useEffect } from 'react';
import '../../../styles/page/_Language.scss';
import Delete from '../../../assets/delete.svg';
export default function Language() {
  return (
    <div className="chosen_language_wrap">
      {selected.map((lan, id) => (
        <div
          className="chosen_language_category"
          key={id}
          onRemove={handleRemove}
        >
          <div className="chosen_language">
            {lan}
            <button
              className="remove_lan_option"
              onClick={() => {
                handleRemove(lan.id);
              }}
            >
              <img className="delete_mark" src={Delete} alt="delete" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
