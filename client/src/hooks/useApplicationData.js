import { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  const setDay = (day) => setState({ ...state, day });
  
  useEffect(() => {
    Promise.all([
      axios.get("https://tripadvisor1.p.rapidapi.com/attractions/get-details"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);

  const remainingSpots = (day, appointments) => {
    return day.appointments.filter(id => appointments[id].interview === null).length
  }
  
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = [...state.days];
    const today = state.days.find(day => day.appointments.includes(id));
    const numberOfSpots = remainingSpots(today, appointments);
    today.spots = numberOfSpots;

    const updateDays = state.days.map(day => {
      if (day.id === today.id) {
        return today
      } else {
        return day
      }
    });

    return axios.put(`/api/appointments/${id}`, appointment)
    .then((res) => {
      setState(
        {
          ...state,
          appointments,
          days: [...updateDays]
        });
    });
  };
  
  const cancelInterview = (id) => {

    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
  
    const today = state.days.find(day => day.appointments.includes(id))
    today.spots = remainingSpots(today, appointments)

    const updateDays = state.days.map(day => {
      if (day.id === today.id) {
        return today
      } else {
        return day
      }
    })
  
    return axios.delete(`/api/appointments/${id}`)
    .then((res) => {
      setState(
        {
          ...state,
          appointments,
          days: [...updateDays]
        },
        []
      );
    });
  };

  return { state, setDay, bookInterview, cancelInterview };
};