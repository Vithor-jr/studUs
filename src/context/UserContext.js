import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [selectDates, setSelectedDates] = useState(null);
  const [activitys, setActivitys] = useState([])
  const [activitiesToday, setActiviesToday] = useState([])
  const [activitiesWeek, setActiviesWeek] = useState([])
  const [categories, setCategories] = useState([])

  return (
    <UserContext.Provider 
      value={{ 
        userData,
        setUserData,
        selectDates,
        setSelectedDates,
        activitys,
        setActivitys,
        activitiesToday,
        setActiviesToday,
        activitiesWeek,
        setActiviesWeek,
        categories,
        setCategories
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
