# Project Explanation & Code Walkthrough

This document provides a detailed breakdown of the frameworks, libraries, architectural decisions, and specific code implementations used in the Settings and Configuration Management UI project.

## 🛠 Frameworks and Libraries Used

| Technology | Purpose in Project |
| :--- | :--- |
| **React (v19)** | The core UI library used to build the entire Single Page Application (SPA). We utilized React Hooks (`useState`, `useEffect`, `useContext`, `useRef`, `useMemo`) extensively. |
| **React Router DOM (v7)** | Used for handling all client-side routing. It enables seamless navigation between settings categories without reloading the page, and allows us to implement Protected Routes and Nested Routes. |
| **Vite (v5)** | The build tool and development server. Chosen over Create React App (which is deprecated) for its lightning-fast Hot Module Replacement (HMR) and modern ES module support. |
| **Jest & React Testing Library** | The testing framework suite used to write our Unit and Integration tests. Jest provides the test runner and assertions, while React Testing Library provides tools to test components exactly as users interact with them. |

---

## 🏗 Component Architecture Explained

The project strictly follows the **Container-Presenter Pattern** (also known as Smart and Dumb components) to separate business logic from UI rendering.

### 1. Presentational (Dumb) Components
*Location: `src/components/common/`*
These components have no business logic and no side effects. They receive data via `props` and emit events back up to their parents.
- `ToggleSwitch.jsx`: A custom, accessible toggle UI.
- `TextInput.jsx`: A reusable input field that handles its own error styling.
- `Dropdown.jsx`: A standard HTML `<select>` styled to match the premium theme.
- `SaveButton.jsx`: A button that changes state to "Saving..." when active.
- `ErrorBoundary.jsx`: A Class Component that wraps the app to catch runtime JavaScript errors anywhere in the component tree and displays a fallback UI instead of crashing the app.

### 2. Container (Smart) Components
*Location: `src/containers/`*
These components manage state, simulate API calls, and interact with the Context API.
- `SettingsContainer.jsx`: The heart of the app. It reads the `:category` dynamic route parameter and renders the appropriate Page component (General, Notifications, etc.). It also passes down the `handleSave` function to simulate an API request before committing changes to global state.
- `AccountContainer.jsx`: A simple layout container for nested Account routes (`profile` and `security`).

### 3. Pages
*Location: `src/pages/`*
Pages act as the structural body for each category. They maintain local form state before saving.
- `General.jsx`: Uses **Controlled Components** (`useState`) to track the Username and Email as the user types.
- `Notifications.jsx`: Renders multiple `ToggleSwitch` components.
- `Privacy.jsx` & `Appearance.jsx`: Standard preference forms.
- `Account.jsx`: Uses **Uncontrolled Components** (`useRef`). It reads the password values directly from the DOM only when the form is submitted.
- `Login.jsx`: A simulated login screen to test the Protected Route.

---

## 🧠 Code Explanation & Key Concepts

### Context API & State Persistence
We used React's `createContext` to build `SettingsContext.jsx`. This avoids "prop drilling" (passing data down through many layers of components). 
To meet the requirement of saving settings automatically, we created a custom hook: `useLocalStorage.js`. 
- **How it works**: The `SettingsContext` uses `useLocalStorage` to initialize its state. Whenever `SettingsContext` updates, the `useEffect` inside `useLocalStorage` automatically serializes the data to a JSON string and saves it to the browser's `window.localStorage`. When the user refreshes, the hook reads from `localStorage` to restore the UI.

### Form Validation
Validation logic is extracted into a pure utility file `src/utils/validation.js`. 
- In `General.jsx`, validation runs in "real-time". The `onChange` handler fires the validation functions on every keystroke, immediately updating the `errors` state object and displaying red warnings if rules are broken (e.g., minimum length, regex email patterns).

### Routing Logic
In `src/routes/AppRoutes.jsx`, we use several advanced routing concepts:
- **Dynamic Routing**: `<Route path=":category" element={<SettingsContainer />} />` captures any category in the URL and passes it to the container to render the correct view dynamically.
- **Nested Routing**: `<Route path="account"> <Route path="profile" /> </Route>` allows rendering sub-views inside the Account page using the `<Outlet />` component.
- **Protected Routing**: The `<PrivateRoute />` component intercepts requests to the Account page. It checks the `AuthContext` to see if `isAuthenticated` is true. If false, it uses `<Navigate to="/login" />` to force a redirect.

### Derived State
`useMemo` is used in `SettingsContainer.jsx` to calculate `totalEnabledNotifications`. This means the array filtering logic only executes when the `notifications` object actually changes, demonstrating the concept of derived state.
