import React from 'react';
import GlampingCard from './GlampingCards';

const GlampingCardList = ({ glampings, onEdit, onDelete, onView }) => {
  return (
    <>
      <h3 className="mb-3">Lista de Glampings</h3>
      <div className="glamping-cards">
        {glampings.map((glamping) => (
          <GlampingCard
            key={glamping.id}
            glamping={glamping}
            onEdit={onEdit}
            onDelete={onDelete}
            onView={onView}
          />
        ))}
      </div>
    </>
  );
};

export default GlampingCardList;
