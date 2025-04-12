import React, { createContext, useState, useContext } from 'react';

const ActivitysContext = createContext(null);

export const ActivitysProvider = ({ children }) => {
  const [activitys, setActivitys] = useState([])
  const [atribuidas, setAtribuidas] = useState([])
  const [activitiesToday, setActiviesToday] = useState([])
  const [activitysImportant, setActivitysImportant] = useState([])
  const [activitysNotCompletedToday, setActivitysNotCompletedToday] = useState([])
 
  const [activitysWeek, setActivitysWeek] = useState([])
  const [activitysNextWeek, setActivtysNextWeek] = useState([])
  const [activitysAfterNextWeek, setActivtysAfterNextWeek] = useState([])
  
  const [allActivitysToday, setAllActivitysToday] = useState()
  const [completedActivitiesCountToday, setCompletedActivitiesCountToday] = useState(0);

  const [activitysNotCompletedWeek, setActivtysNotCompletedWeek] = useState([])
  const [activitysNotCompletedLastWeek, setActivtysNotCompletedLastWeek] = useState([])
  const [activitysNotCompletedBeforeLastWeek, setActivtysNotCompletedBeforeLastWeek] = useState([])

  const [activitysCompleteWeek, setActivitysCompleteWeek] = useState([])
  const [activitysLastWeek, setActivtysLastWeek] = useState([])
  const [activitysBefore, setActivtyBefore] = useState([])
  const [activitysEarly, setActivtyEarly] = useState([])

  const [categories, setCategories] = useState()

  return (
    <ActivitysContext.Provider 
      value={{ 
        atribuidas, setAtribuidas,
        allActivitysToday, setAllActivitysToday,
        completedActivitiesCountToday, setCompletedActivitiesCountToday,
        activitys, setActivitys,
        activitiesToday, setActiviesToday,
        activitysNotCompletedToday, setActivitysNotCompletedToday,
        activitysWeek, setActivitysWeek,
        activitysNextWeek, setActivtysNextWeek,
        activitysAfterNextWeek, setActivtysAfterNextWeek,
        activitysNotCompletedWeek, setActivtysNotCompletedWeek,
        activitysNotCompletedLastWeek, setActivtysNotCompletedLastWeek,
        activitysNotCompletedBeforeLastWeek, setActivtysNotCompletedBeforeLastWeek,
        activitysLastWeek, setActivtysLastWeek,
        activitysCompleteWeek, setActivitysCompleteWeek,
        activitysBefore, setActivtyBefore,
        activitysEarly, setActivtyEarly,
        categories, setCategories,
        activitysImportant, setActivitysImportant
    }}>
      {children}
    </ActivitysContext.Provider>
  );
};

export const useActivityContext = () => useContext(ActivitysContext);
