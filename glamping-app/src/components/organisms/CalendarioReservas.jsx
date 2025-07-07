import React, { useState } from 'react';

const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

const CalendarioReservas = ({ reservas }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  // Construir la matriz de días para el calendario
  const calendar = [];
  let week = [];
  let dayCounter = 1 - firstDay;

  for (let i = 0; i < 6; i++) { // 6 filas (semanas)
    week = [];
    for (let j = 0; j < 7; j++) { // 7 columnas (días)
      if (dayCounter > 0 && dayCounter <= daysInMonth) {
        week.push(dayCounter);
      } else {
        week.push(null);
      }
      dayCounter++;
    }
    calendar.push(week);
  }

  // Función para cambiar de mes
  const changeMonth = (offset) => {
    let newMonth = currentMonth + offset;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // Función para mostrar reservas en cada día
  const reservasPorDia = (dia) => {
    const fecha = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
    return reservas.filter(r => r.fechaInicio === fecha || r.fechaFin === fecha);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2 mt-6">Calendario de Reservas</h2>
      <div className="flex justify-center items-center mb-2">
        <button onClick={() => changeMonth(-1)} className="bg-blue-500 text-white px-3 py-1 rounded mx-1">{'<'}</button>
        <span className="font-bold text-lg mx-2">
          {today.toLocaleString('default', { month: 'long' , year: 'numeric' }).charAt(0).toUpperCase() +
            today.toLocaleString('default', { month: 'long', year: 'numeric' }).slice(1)}
        </span>
        <button onClick={() => { setCurrentMonth(today.getMonth()); setCurrentYear(today.getFullYear()); }} className="bg-blue-500 text-white px-3 py-1 rounded mx-1">Hoy</button>
        <button onClick={() => changeMonth(1)} className="bg-blue-500 text-white px-3 py-1 rounded mx-1">{'>'}</button>
      </div>
      <table className="w-full border">
        <thead>
          <tr>
            {diasSemana.map(dia => (
              <th key={dia} className="border p-2">{dia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={i}>
              {week.map((dia, j) => (
                <td key={j} className="border h-20 align-top p-1">
                  {dia && (
                    <div>
                      <div className="font-bold">{dia}</div>
                      {/* Mostrar reservas de ese día */}
                      {reservasPorDia(dia).map((res, idx) => (
                        <div key={idx} className="text-xs bg-green-200 rounded mt-1 px-1">
                          {res.clienteNombre} ({res.glampingNombre})
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarioReservas;