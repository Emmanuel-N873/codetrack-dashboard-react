import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { getMockData } from "../services/mockDataService.js";

const DashboardContext = createContext(null);

export function DashboardProvider({ children }) {
    const [profiles] = useState(() => getMockData().profiles);
    const [learningLogs, setLearningLogs] = useState(() => getMockData().learning_logs);
    const [goals, setGoals] = useState(() => getMockData().goals);
    const [dashboardAsOf] = useState(() => getMockData().simulation_context.dashboard_as_of);

    const value = useMemo(() => ({
        profiles,
        learningLogs,
        goals,
        dashboardAsOf,
        addLearningLog({ profileId, title, tag, durationMinutes, loggedAt = new Date().toISOString() }) {
            const newLog = {
                id: crypto.randomUUID(),
                profile_id: profileId,
                title,
                tag,
                duration_minutes: durationMinutes,
                logged_at: loggedAt,
            };

            setLearningLogs((logs) => [...logs, newLog]);
            return newLog;
        },
        updateGoal(goalId, updates) {
            setGoals((currentGoals) => currentGoals.map((goal) => (
                goal.id === goalId ? { ...goal, ...updates, id: goal.id } : goal
            )));
        },
    }), [dashboardAsOf, goals, learningLogs, profiles]);

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

DashboardProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { DashboardContext };
