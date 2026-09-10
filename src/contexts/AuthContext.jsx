import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import{getMockData} from "../services/mockDataService.js"

// Create the AuthContext
const AuthContext = createContext(null);

// UseState syntax: const [initialValue, methodThatChangesInitialValueToNewValue] = useState(initialValue)
export function AuthProvider({ children }) {
    const [mockUsers, setMockUsers] = useState(() => getMockData().mock_auth_users);
    const [currentUser, setCurrentUser] = useState(null);

    // useMemo - signin
    const value = useMemo(() => ({
        currentUser,
        isAuthenticated: Boolean(currentUser),
        signIn(email, password) {
            const matchingUser = mockUsers.find(
                (user) => user.email.toLowerCase() === email.trim().toLowerCase() && user.password === password,
            );

            // If not the user entered then validate.
            if (!matchingUser) {
                return {
                    success: false,
                    message: "Invalid email or password",
                };
            }

            // If its the user entered then use the changer method to change the value of current user from null to the user entered.
            setCurrentUser(matchingUser);
            return {
                success: true,
                message: "Sign in successful",
                user: matchingUser,
            };
        },
        // signUp method
        signUp({ displayName, email, password }) {
            const normalizedEmail = email.trim().toLowerCase();
            const emailInUse = mockUsers.some((user) => user.email.toLowerCase() === normalizedEmail);

            if (emailInUse) {
                return {
                    success: false,
                    message: "Email already in use",
                };
            }

            // Create a new user.
            const newUser = {
                id: crypto.randomUUID(),
                display_name: displayName,
                email: normalizedEmail,
                password,
                plan: "free",
                time_zone: "UTC",
            };
            setMockUsers((users) => [...users, newUser]);
            setCurrentUser(newUser);
            return {
                success: true,
                message: "Sign up successful",
                user: newUser,
            };
        },
        // signOut method
        signOut() {
            setCurrentUser(null);
        },
    }), [currentUser, mockUsers]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
// To ensure data integrity, we can use PropTypes to validate the props passed to the AuthProvider component. In this case, we expect the children prop to be a React node (which can be any valid React element or component).
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export {AuthContext};

