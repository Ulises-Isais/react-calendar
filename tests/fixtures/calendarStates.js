export const events = [
  {
    id: "1",
    start: new Date("2023-08-18 13:00:00"),
    end: new Date("2023-08-18 15:00:00"),
    title: "Testing cumpleaños",
    notes: "Probando",
  },
  {
    id: "2",
    start: new Date("2023-08-19 13:00:00"),
    end: new Date("2023-08-19 15:00:00"),
    title: "Leo probando",
    notes: "notas de prueba",
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};
export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};
export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
