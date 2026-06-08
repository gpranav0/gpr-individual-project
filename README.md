# Settings and Configuration Management UI

A comprehensive Single Page Application (SPA) built to manage application settings, meeting all course requirements for the Frontend Development Frameworks and UI Engineering course.

## Syllabus Concepts Implementation Mapping

### 1. Controlled Components (useState)
- **Location**: `src/pages/General.jsx`
- **Implementation**: The General settings form (Username, Email, Language) utilizes `useState` to control input values.

### 2. Uncontrolled Components (useRef)
- **Location**: `src/pages/Account.jsx`
- **Implementation**: The Change Password form uses `useRef` hooks (`oldPasswordRef`, `newPasswordRef`, `confirmPasswordRef`) to read values directly from the DOM upon submission.

### 3. Form Validation
- **Location**: `src/utils/validation.js` and `src/pages/General.jsx`, `src/pages/Account.jsx`
- **Implementation**: Real-time validation is performed on Username (min 3 chars), Email (regex matching), and Password (min 8 chars) showing error messages immediately below inputs.

### 4. Component Architecture
- **Location**: `src/containers/SettingsContainer.jsx` (Smart) & `src/components/common/ToggleSwitch.jsx` (Dumb)
- **Implementation**: The Container-Presenter pattern is strictly followed. Containers handle state, API simulation, and routing logic, while Presenters strictly render UI based on props.

### 5. Error Boundary
- **Location**: `src/components/common/ErrorBoundary.jsx` & `src/routes/AppRoutes.jsx`
- **Implementation**: A class component catches rendering errors and displays a fallback UI with a retry mechanism. It wraps the `MainLayout` to protect major routes.

### 6. Browser Storage
- **Location**: `src/hooks/useLocalStorage.js`
- **Implementation**: A custom hook utilizes `localStorage` and `useEffect` to automatically save and restore settings upon page refresh.

### 7. State Management
- **Location**: `src/context/SettingsContext.jsx`
- **Implementation**: Context API is used to store Theme, Notifications, Privacy settings, and Language, providing global access without prop drilling.

### 8. Derived State
- **Location**: `src/containers/SettingsContainer.jsx`
- **Implementation**: The "Total Enabled Notifications" value is derived from the actual settings state using `useMemo` to prevent unnecessary recalculations.

### 9. State Colocation
- **Location**: `src/pages/Account.jsx` & `src/pages/General.jsx`
- **Implementation**: Local error and success states are kept strictly within the components that need them (e.g., form validation states), rather than cluttering global context.

### 10. SPA Routing
- **Location**: `src/routes/AppRoutes.jsx` & `src/routes/PrivateRoute.jsx`
- **Implementation**: Uses React Router DOM for Basic Routing, Dynamic Routing (`/settings/:category`), Nested Routing (`/settings/account/profile`), and Protected Routing (`PrivateRoute` requiring login for Account).

### Testing
- **Unit Tests**: Found in `src/tests/` verifying `ToggleSwitch` state and `validation` functions.
- **Integration Test**: Validates the complete flow from changing a setting to it being saved in `localStorage`.

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Run tests: `npm run test`
