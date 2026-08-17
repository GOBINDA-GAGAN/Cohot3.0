# React Master Interview Questions

## 24-Hour Interview Revision | Question-Only Sheet

> **Rule:** Don't memorize sentences. Try to explain each answer in your own words with a small example.

---

# 1. React Fundamentals

* [ ] What is React?
* [ ] Why was React created?
* [ ] What problem does React solve?
* [ ] What are the main features of React?
* [ ] Why is React called a library and not a framework?
* [ ] What is a component in React?
* [ ] What is JSX?
* [ ] Why do we use JSX?
* [ ] Is JSX mandatory in React?
* [ ] How does JSX get converted into JavaScript?
* [ ] What is the difference between JSX and HTML?
* [ ] What is a React element?
* [ ] What is the difference between a React element and a React component?
* [ ] What is the difference between functional and class components?
* [ ] Why are functional components preferred today?
* [ ] What is declarative programming?
* [ ] Why is React declarative?
* [ ] What does component-based architecture mean?
* [ ] What is one-way data flow in React?
* [ ] Why does React follow one-way data flow?
* [ ] What happens when a React component renders?

---

# 2. React Rendering

* [ ] What happens internally when a component renders?
* [ ] What causes a React component to re-render?
* [ ] Does a parent re-render always cause a child to re-render?
* [ ] What is reconciliation?
* [ ] What is the Virtual DOM?
* [ ] Why does React use a Virtual DOM?
* [ ] Is Virtual DOM always faster than direct DOM manipulation?
* [ ] What is the difference between Virtual DOM and real DOM?
* [ ] How does React compare the previous and next Virtual DOM?
* [ ] What is diffing?
* [ ] What is the React rendering phase?
* [ ] What is the commit phase?
* [ ] What happens during the render phase?
* [ ] What happens during the commit phase?
* [ ] Can React render a component without updating the DOM?
* [ ] What is batching in React?
* [ ] What is automatic batching?
* [ ] What changed about batching in React 18?
* [ ] What is concurrent rendering?
* [ ] What problem does concurrent rendering solve?

---

# 3. Props

* [ ] What are props?
* [ ] Why are props read-only?
* [ ] Can a child modify its parent's props?
* [ ] What is prop drilling?
* [ ] Why is prop drilling considered a problem?
* [ ] How can prop drilling be avoided?
* [ ] What is the difference between props and state?
* [ ] Can props contain functions?
* [ ] Why do we pass functions through props?
* [ ] What are children props?
* [ ] What is the `children` prop?
* [ ] How does React handle nested JSX?
* [ ] What is the difference between `props.children` and normal props?

---

# 4. State

* [ ] What is state?
* [ ] Why do we need state?
* [ ] What is the difference between state and a normal variable?
* [ ] Why doesn't changing a normal variable trigger a re-render?
* [ ] How does `useState` work?
* [ ] What does `useState` return?
* [ ] Why should state not be mutated directly?
* [ ] What happens when a state setter is called?
* [ ] Are state updates synchronous or asynchronous?
* [ ] Why can state appear to have an old value immediately after calling the setter?
* [ ] What is a functional state update?
* [ ] When should you use functional state updates?
* [ ] What happens when multiple state updates occur together?
* [ ] Why should state updates be immutable?
* [ ] How do you update an object stored in state?
* [ ] How do you update an array stored in state?
* [ ] What is derived state?
* [ ] Why should unnecessary derived state be avoided?
* [ ] How do you decide whether something should be state?

---

# 5. Hooks

* [ ] What are React Hooks?
* [ ] Why were Hooks introduced?
* [ ] What are the Rules of Hooks?
* [ ] Why can't Hooks be called conditionally?
* [ ] Why can't Hooks be called inside loops?
* [ ] Why must Hooks be called at the top level?
* [ ] What is `useState`?
* [ ] What is `useEffect`?
* [ ] What is `useContext`?
* [ ] What is `useReducer`?
* [ ] What is `useMemo`?
* [ ] What is `useCallback`?
* [ ] What is `useRef`?
* [ ] What is `useLayoutEffect`?
* [ ] What is `useImperativeHandle`?
* [ ] What is `useId`?
* [ ] What is `useTransition`?
* [ ] What is `useDeferredValue`?
* [ ] What is `useSyncExternalStore`?
* [ ] What is a custom Hook?
* [ ] Why should custom Hooks start with `use`?
* [ ] What is the difference between a Hook and a utility function?

---

# 6. useEffect

* [ ] What problem does `useEffect` solve?
* [ ] When does `useEffect` run?
* [ ] What is the dependency array?
* [ ] What happens when the dependency array is empty?
* [ ] What happens when there is no dependency array?
* [ ] What happens when dependencies change?
* [ ] When does the cleanup function run?
* [ ] Why is cleanup important?
* [ ] How do you clean up an event listener?
* [ ] How do you clean up a timer?
* [ ] How do you cancel an API request?
* [ ] Why can `useEffect` cause infinite loops?
* [ ] What happens if you put an object in the dependency array?
* [ ] What happens if you put a function in the dependency array?
* [ ] Why can functions cause unnecessary `useEffect` executions?
* [ ] When should you NOT use `useEffect`?
* [ ] Can derived values be calculated without `useEffect`?
* [ ] Can API calls be performed inside `useEffect`?
* [ ] What are common mistakes developers make with `useEffect`?
* [ ] What is the difference between an effect and an event handler?
* [ ] Why should user actions usually be handled in event handlers rather than effects?

---

# 7. useRef

* [ ] What is `useRef`?
* [ ] How is `useRef` different from `useState`?
* [ ] Does changing `ref.current` trigger a re-render?
* [ ] When should you use `useRef`?
* [ ] How can `useRef` access a DOM element?
* [ ] How can `useRef` store a previous value?
* [ ] Can `useRef` store mutable values?
* [ ] Why doesn't changing `useRef` trigger rendering?
* [ ] What is the difference between `useRef` and a normal variable?
* [ ] What is the difference between `useRef` and `useState` for storing values?
* [ ] What are common real-world uses of `useRef`?

---

# 8. useMemo and useCallback

* [ ] What is `useMemo`?
* [ ] What problem does `useMemo` solve?
* [ ] What is `useCallback`?
* [ ] What problem does `useCallback` solve?
* [ ] What is the difference between `useMemo` and `useCallback`?
* [ ] Does `useMemo` always improve performance?
* [ ] Can `useMemo` make an application slower?
* [ ] When should you use `useMemo`?
* [ ] When should you use `useCallback`?
* [ ] Why shouldn't every function be wrapped in `useCallback`?
* [ ] How does referential equality relate to `useMemo`?
* [ ] How does referential equality relate to `useCallback`?
* [ ] How does `React.memo` work with `useCallback`?
* [ ] Can `useCallback` prevent a component from rendering?
* [ ] What is premature optimization in React?

---

# 9. React.memo

* [ ] What is `React.memo`?
* [ ] What problem does `React.memo` solve?
* [ ] When does a memoized component re-render?
* [ ] What is shallow comparison?
* [ ] Why can objects cause `React.memo` to fail to prevent re-renders?
* [ ] Why can functions cause `React.memo` to fail to prevent re-renders?
* [ ] When should you use `React.memo`?
* [ ] When should you avoid `React.memo`?
* [ ] What is the relationship between `React.memo`, `useMemo`, and `useCallback`?
* [ ] Can `React.memo` prevent re-renders caused by state inside the component?
* [ ] Can `React.memo` prevent re-renders caused by context?

---

# 10. React Performance Optimization

* [ ] How do you optimize a React application?
* [ ] How do you identify unnecessary re-renders?
* [ ] What causes unnecessary re-renders?
* [ ] How can you reduce unnecessary re-renders?
* [ ] What is component memoization?
* [ ] What is code splitting?
* [ ] What is lazy loading?
* [ ] What is `React.lazy`?
* [ ] What is `Suspense`?
* [ ] How does lazy loading improve performance?
* [ ] What is bundle size?
* [ ] How can bundle size be reduced?
* [ ] What is tree shaking?
* [ ] What is dynamic import?
* [ ] What is route-based code splitting?
* [ ] What is list virtualization?
* [ ] When should list virtualization be used?
* [ ] How would you optimize rendering 10,000 items?
* [ ] How would you optimize a slow React page?
* [ ] How would you debug a component that renders too many times?
* [ ] How do you optimize expensive calculations?
* [ ] How do you optimize API-heavy components?
* [ ] How do you optimize images in React applications?
* [ ] How do you optimize initial page load?
* [ ] What is Core Web Vitals?
* [ ] Which React optimizations can actually hurt performance?

---

# 11. Keys

* [ ] What are keys in React?
* [ ] Why does React need keys?
* [ ] Why is using array index as a key sometimes dangerous?
* [ ] When is using array index as a key acceptable?
* [ ] What happens when keys are duplicated?
* [ ] How do keys affect reconciliation?
* [ ] Can changing a component's key force it to remount?
* [ ] What is the difference between re-rendering and remounting?
* [ ] Why is a stable key important?

---

# 12. Controlled and Uncontrolled Components

* [ ] What is a controlled component?
* [ ] What is an uncontrolled component?
* [ ] What is the difference between controlled and uncontrolled inputs?
* [ ] When should you use controlled inputs?
* [ ] When should you use uncontrolled inputs?
* [ ] How does `ref` work with uncontrolled inputs?
* [ ] What are the advantages of controlled components?
* [ ] What are the disadvantages of controlled components?
* [ ] How would you build a large form efficiently?
* [ ] Why can controlled forms become expensive?

---

# 13. Forms and Events

* [ ] How does event handling work in React?
* [ ] What is a React event?
* [ ] What is event delegation?
* [ ] What is the difference between `onClick={fn}` and `onClick={fn()}`?
* [ ] How do you prevent default form submission?
* [ ] How do you handle form validation?
* [ ] How do you handle multiple form fields with one handler?
* [ ] How do you handle file uploads in React?
* [ ] How do you debounce a search input?
* [ ] What is debouncing?
* [ ] What is throttling?
* [ ] What is the difference between debouncing and throttling?

---

# 14. Context API

* [ ] What is Context API?
* [ ] Why was Context API introduced?
* [ ] How does Context API work?
* [ ] What is a Provider?
* [ ] What is a Consumer?
* [ ] How does `useContext` work?
* [ ] When should you use Context?
* [ ] When should you avoid Context?
* [ ] Does Context cause re-renders?
* [ ] Why can Context become a performance problem?
* [ ] How can Context performance be optimized?
* [ ] Should Context be used as a replacement for Redux?
* [ ] What type of data is suitable for Context?
* [ ] How would you design authentication using Context?

---

# 15. State Management

* [ ] When should state be local?
* [ ] When should state be global?
* [ ] What is global state?
* [ ] What is server state?
* [ ] What is client state?
* [ ] What is the difference between server state and client state?
* [ ] What is Redux?
* [ ] Why was Redux created?
* [ ] What are the core principles of Redux?
* [ ] What is a store?
* [ ] What is an action?
* [ ] What is a reducer?
* [ ] What is dispatch?
* [ ] What is middleware?
* [ ] What is Redux Toolkit?
* [ ] Why is Redux Toolkit preferred over old Redux patterns?
* [ ] What is the difference between Redux and Context API?
* [ ] When would you choose Redux?
* [ ] When would you choose Context?
* [ ] What is Zustand?
* [ ] How does Zustand differ from Redux?

---

# 16. Server State / React Query

* [ ] What is server state?
* [ ] Why is server state different from client state?
* [ ] What problem does TanStack Query solve?
* [ ] What is a query?
* [ ] What is a mutation?
* [ ] What is query caching?
* [ ] What is stale data?
* [ ] What is cache invalidation?
* [ ] What is refetching?
* [ ] What is optimistic updating?
* [ ] What is pagination?
* [ ] What is infinite querying?
* [ ] How does TanStack Query reduce unnecessary API requests?
* [ ] When should React Query be used instead of Redux?

---

# 17. API and Data Fetching

* [ ] How do you fetch API data in React?
* [ ] Where should API calls be placed?
* [ ] How do you handle loading states?
* [ ] How do you handle error states?
* [ ] How do you handle empty states?
* [ ] How do you cancel an API request?
* [ ] What is request race condition?
* [ ] How do you prevent stale API responses from updating the UI?
* [ ] How do you handle authentication tokens?
* [ ] Where should access tokens be stored?
* [ ] What are the security concerns around storing tokens?
* [ ] How do you refresh an expired token?
* [ ] How do you handle API retries?
* [ ] How do you prevent duplicate API requests?
* [ ] How do you cache API responses?
* [ ] How would you design a reusable API layer?

---

# 18. Routing

* [ ] What is client-side routing?
* [ ] What is React Router?
* [ ] What is the difference between client-side and server-side routing?
* [ ] What is a route?
* [ ] What are dynamic routes?
* [ ] What are nested routes?
* [ ] What are protected routes?
* [ ] How do you implement authentication-based routing?
* [ ] What is lazy-loaded routing?
* [ ] How do route parameters work?
* [ ] What is the difference between route params and query params?
* [ ] How do you navigate programmatically?
* [ ] How do you handle a 404 page?
* [ ] How do you preserve route state?

---

# 19. Component Architecture

* [ ] What makes a good React component?
* [ ] How small should a component be?
* [ ] What is component composition?
* [ ] What is the difference between composition and inheritance?
* [ ] Why does React favor composition?
* [ ] What is a reusable component?
* [ ] What is a presentational component?
* [ ] What is a container component?
* [ ] What is a smart component?
* [ ] What is a dumb component?
* [ ] What is separation of concerns?
* [ ] How do you organize a large React project?
* [ ] How do you decide where business logic should live?
* [ ] How do you avoid "God components"?
* [ ] How do you design reusable components?
* [ ] How do you make components configurable without making them complicated?

---

# 20. Custom Hooks

* [ ] Why create custom Hooks?
* [ ] How do custom Hooks share logic?
* [ ] Do custom Hooks share state?
* [ ] What is the difference between sharing logic and sharing state?
* [ ] How would you create a `useFetch` Hook?
* [ ] How would you create a `useDebounce` Hook?
* [ ] How would you create a `useLocalStorage` Hook?
* [ ] How would you create an authentication Hook?
* [ ] What problems should a custom Hook solve?
* [ ] What are common mistakes when creating custom Hooks?

---

# 21. Advanced React

* [ ] What is reconciliation?
* [ ] What is Fiber?
* [ ] Why did React introduce Fiber?
* [ ] What problem does React Fiber solve?
* [ ] What is concurrent rendering?
* [ ] What is interruptible rendering?
* [ ] What is priority-based rendering?
* [ ] What is `startTransition`?
* [ ] What is `useTransition`?
* [ ] What is `useDeferredValue`?
* [ ] What is Suspense?
* [ ] What problems can Suspense solve?
* [ ] What is Error Boundary?
* [ ] Why can't Error Boundaries catch every error?
* [ ] What is hydration?
* [ ] What is hydration mismatch?
* [ ] What is server rendering?
* [ ] What is client rendering?
* [ ] What is SSR?
* [ ] What is CSR?
* [ ] What is SSG?
* [ ] What is ISR?
* [ ] What is streaming SSR?

---

# 22. React 18+ Concepts

* [ ] What major features were introduced in React 18?
* [ ] What is automatic batching?
* [ ] What is concurrent rendering?
* [ ] What is `createRoot`?
* [ ] What is `useTransition`?
* [ ] What is `useDeferredValue`?
* [ ] What is Suspense in concurrent React?
* [ ] What is the difference between urgent and non-urgent updates?
* [ ] When should `startTransition` be used?
* [ ] When should `startTransition` NOT be used?

---

# 23. React 19 Concepts

* [ ] What are the important concepts introduced in React 19?
* [ ] What is the React Actions model?
* [ ] What is `useActionState`?
* [ ] What is `useOptimistic`?
* [ ] What is `useFormStatus`?
* [ ] What is the `use` API?
* [ ] How does React 19 improve form handling?
* [ ] How does React 19 handle optimistic UI?
* [ ] What problems does `useActionState` solve?
* [ ] How does the `use` API differ from traditional Hooks?

---

# 24. Performance Debugging

* [ ] How do you find the cause of a slow React application?
* [ ] How do you identify unnecessary component renders?
* [ ] How does React DevTools Profiler help?
* [ ] What is render time?
* [ ] What is commit time?
* [ ] How do you find expensive components?
* [ ] How do you detect unnecessary state updates?
* [ ] How do you detect unnecessary effects?
* [ ] How do you optimize a large table?
* [ ] How do you optimize a large dropdown?
* [ ] How do you optimize a search page?
* [ ] How do you optimize an infinite scrolling page?
* [ ] How do you optimize a dashboard with many charts?
* [ ] How do you optimize a component receiving large props?
* [ ] How do you prevent unnecessary API calls?

---

# 25. Memory and Cleanup

* [ ] What is a memory leak in a React application?
* [ ] What causes memory leaks in React?
* [ ] How can event listeners cause memory leaks?
* [ ] How can timers cause memory leaks?
* [ ] How can subscriptions cause memory leaks?
* [ ] How can API requests create stale updates?
* [ ] How do you clean up effects?
* [ ] What happens when a component unmounts?
* [ ] What is the difference between unmount and re-render?
* [ ] How do you prevent state updates from stale asynchronous operations?

---

# 26. Security

* [ ] What is XSS?
* [ ] How can XSS happen in React?
* [ ] What is `dangerouslySetInnerHTML`?
* [ ] Why is `dangerouslySetInnerHTML` dangerous?
* [ ] How can you safely render HTML?
* [ ] What is CSRF?
* [ ] How does authentication work in a React application?
* [ ] Where should sensitive information NOT be stored?
* [ ] Can environment variables in frontend applications be secret?
* [ ] What frontend security mistakes are common in React applications?

---

# 27. Testing

* [ ] Why should React applications be tested?
* [ ] What is unit testing?
* [ ] What is integration testing?
* [ ] What is end-to-end testing?
* [ ] What is React Testing Library?
* [ ] Why does React Testing Library encourage testing user behavior?
* [ ] What is a mock?
* [ ] What is a test double?
* [ ] How do you test a component?
* [ ] How do you test user interactions?
* [ ] How do you test API calls?
* [ ] What should and shouldn't be mocked?
* [ ] What makes a React test brittle?

---

# 28. TypeScript + React

* [ ] Why use TypeScript with React?
* [ ] How do you type React props?
* [ ] How do you type `children`?
* [ ] How do you type event handlers?
* [ ] How do you type `useState`?
* [ ] How do you type `useRef`?
* [ ] How do you type API responses?
* [ ] What is the difference between `interface` and `type`?
* [ ] How do you type reusable components?
* [ ] How do you type generic components?
* [ ] What are common TypeScript mistakes in React projects?

---

# 29. Accessibility

* [ ] What is web accessibility?
* [ ] Why is accessibility important?
* [ ] What is semantic HTML?
* [ ] Why should semantic HTML be preferred over unnecessary `div` elements?
* [ ] What is ARIA?
* [ ] When should ARIA be used?
* [ ] How do you make a React application keyboard accessible?
* [ ] How do you make forms accessible?
* [ ] How do you make modals accessible?
* [ ] How do you handle focus management?
* [ ] What accessibility mistakes are common in React applications?

---

# 30. React Architecture and Production

* [ ] How would you structure a production React application?
* [ ] How would you structure a large-scale React project?
* [ ] Where should API logic live?
* [ ] Where should reusable components live?
* [ ] Where should business logic live?
* [ ] How would you manage global state?
* [ ] How would you manage server state?
* [ ] How would you implement authentication?
* [ ] How would you implement role-based access control?
* [ ] How would you handle permissions?
* [ ] How would you implement error handling globally?
* [ ] How would you implement loading states globally?
* [ ] How would you implement notifications?
* [ ] How would you implement feature flags?
* [ ] How would you handle environment-specific configuration?
* [ ] How would you handle API versioning from the frontend?
* [ ] How would you design a reusable design system?

---

# 31. Scenario-Based Interview Questions

* [ ] A component is rendering 20 times when you expect it to render twice. How would you debug it?
* [ ] Your page takes 5 seconds to load. How would you investigate the problem?
* [ ] Your API is being called repeatedly. What could be wrong?
* [ ] Your `useEffect` is running infinitely. How would you debug it?
* [ ] A search box makes an API request for every keystroke. How would you optimize it?
* [ ] A list contains 50,000 records. How would you render it efficiently?
* [ ] A child component keeps re-rendering even though its data hasn't changed. Why?
* [ ] `React.memo` isn't preventing a child re-render. Why?
* [ ] A Context Provider causes the entire application to re-render. How would you fix it?
* [ ] A dashboard contains 20 API calls. How would you optimize it?
* [ ] Two API requests return in the wrong order. How would you handle the race condition?
* [ ] A user navigates away while an API request is still running. What should happen?
* [ ] A component has 15 `useState` calls. Would you change the design?
* [ ] A component contains 500 lines of code. How would you refactor it?
* [ ] A React application has a huge JavaScript bundle. How would you reduce it?
* [ ] A page has a huge table and scrolling is slow. What would you do?
* [ ] A form has 100 fields and typing feels slow. How would you optimize it?
* [ ] Images make the application slow. How would you optimize them?
* [ ] Users report that the UI freezes during a search. How would you investigate it?
* [ ] How would you optimize a React e-commerce product listing page?
* [ ] How would you optimize a React admin dashboard?
* [ ] How would you design a reusable modal system?
* [ ] How would you design a reusable form system?
* [ ] How would you design authentication and authorization in React?
* [ ] How would you handle global errors in a production React application?

---

# 32. Frequently Repeated Interview Questions

* [ ] What is React?
* [ ] Why React?
* [ ] What is JSX?
* [ ] What is Virtual DOM?
* [ ] What is reconciliation?
* [ ] What causes a re-render?
* [ ] Props vs state?
* [ ] Controlled vs uncontrolled components?
* [ ] What is `useState`?
* [ ] What is `useEffect`?
* [ ] What is the dependency array?
* [ ] What is cleanup in `useEffect`?
* [ ] What is `useMemo`?
* [ ] What is `useCallback`?
* [ ] `useMemo` vs `useCallback`?
* [ ] What is `useRef`?
* [ ] What is Context API?
* [ ] What is prop drilling?
* [ ] What is Redux?
* [ ] Redux vs Context?
* [ ] What is React Query?
* [ ] What are keys?
* [ ] Why shouldn't index be used as a key?
* [ ] What is `React.memo`?
* [ ] How do you optimize React performance?
* [ ] What is lazy loading?
* [ ] What is code splitting?
* [ ] What is Suspense?
* [ ] What is Error Boundary?
* [ ] What is Fiber?
* [ ] What is concurrent rendering?
* [ ] What is SSR?
* [ ] SSR vs CSR?
* [ ] What is hydration?
* [ ] What causes hydration mismatch?
* [ ] How do you prevent unnecessary re-renders?
* [ ] How do you optimize API calls?
* [ ] How do you optimize a large list?
* [ ] How do you debug React performance?
* [ ] How do you structure a production React application?

---

# 33. Final Confidence Round

## Explain each without looking at notes:

* [ ] Explain React in 60 seconds.
* [ ] Explain Virtual DOM in 60 seconds.
* [ ] Explain reconciliation in 60 seconds.
* [ ] Explain re-rendering in 60 seconds.
* [ ] Explain `useState` in 60 seconds.
* [ ] Explain `useEffect` in 60 seconds.
* [ ] Explain dependency arrays in 60 seconds.
* [ ] Explain cleanup functions in 60 seconds.
* [ ] Explain `useMemo` in 60 seconds.
* [ ] Explain `useCallback` in 60 seconds.
* [ ] Explain `useRef` in 60 seconds.
* [ ] Explain Context API in 60 seconds.
* [ ] Explain Redux in 60 seconds.
* [ ] Explain React Query in 60 seconds.
* [ ] Explain `React.memo` in 60 seconds.
* [ ] Explain React performance optimization in 2 minutes.
* [ ] Explain code splitting in 60 seconds.
* [ ] Explain lazy loading in 60 seconds.
* [ ] Explain Suspense in 60 seconds.
* [ ] Explain Fiber in 60 seconds.
* [ ] Explain concurrent rendering in 60 seconds.
* [ ] Explain SSR vs CSR in 2 minutes.
* [ ] Explain hydration in 60 seconds.
* [ ] Explain how you would optimize a slow React application in 2 minutes.
* [ ] Explain how you would structure a production React application in 2 minutes.

---

# 34. 24-Hour Priority Order

## 🔴 Tier 1: Must Know

* [ ] React fundamentals
* [ ] JSX
* [ ] Components
* [ ] Props
* [ ] State
* [ ] Re-rendering
* [ ] Virtual DOM
* [ ] Reconciliation
* [ ] `useState`
* [ ] `useEffect`
* [ ] Dependency array
* [ ] Cleanup
* [ ] `useRef`
* [ ] `useMemo`
* [ ] `useCallback`
* [ ] `React.memo`
* [ ] Keys
* [ ] Context API
* [ ] Controlled components
* [ ] API handling
* [ ] React Router
* [ ] Performance optimization

## 🟠 Tier 2: Strong Interview Topics

* [ ] Redux
* [ ] Redux Toolkit
* [ ] TanStack Query
* [ ] Custom Hooks
* [ ] Code splitting
* [ ] Lazy loading
* [ ] Suspense
* [ ] Error Boundaries
* [ ] React Fiber
* [ ] Concurrent rendering
* [ ] `useTransition`
* [ ] `useDeferredValue`
* [ ] SSR
* [ ] CSR
* [ ] Hydration
* [ ] Testing
* [ ] Accessibility
* [ ] React + TypeScript

## 🟡 Tier 3: Senior/Advanced Awareness

* [ ] React 19 concepts
* [ ] Actions
* [ ] `useActionState`
* [ ] `useOptimistic`
* [ ] `useFormStatus`
* [ ] `use`
* [ ] Streaming SSR
* [ ] Server Components
* [ ] Advanced rendering behavior
* [ ] Production architecture
* [ ] Performance profiling

---

# 35. Interview Mindset

For every question, practice answering in this order:

1. **Definition**
2. **Why it exists**
3. **How it works**
4. **Small example**
5. **When to use it**
6. **When NOT to use it**
7. **Performance / trade-off**

If you can explain the Tier 1 questions without notes and handle the scenario questions calmly, you have a much stronger interview foundation than simply memorizing React definitions.
