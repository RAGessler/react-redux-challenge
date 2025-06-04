# Restaurant Picker - React Redux Challenge

A hands-on learning exercise for interns to master React and Redux Toolkit fundamentals.

## 🎯 Learning Objectives

- React functional components and hooks
- Redux Toolkit setup and configuration
- State management with createSlice
- Connecting React components to Redux
- TypeScript integration with Redux

## 📋 Lab Tasks

### Phase 1: Complete AddRestaurantForm Component

**File:** `src/components/AddRestaurantForm.tsx`

1. Import `useDispatch` from `react-redux`
2. Import `addRestaurant` action from `../store`
3. Initialize dispatch hook
4. Implement form submission

```typescript
import { useDispatch } from "react-redux";
import { addRestaurant, AppDispatch } from "../store";

const dispatch = useDispatch<AppDispatch>();
dispatch(addRestaurant(formData));
```

### Phase 2: Connect to App

**File:** `src/components/App/App.js`

1. Import `AddRestaurantForm` component
2. Add component where TODO comment indicates

### Phase 3: Bonus Challenge

add a button to remove a selected restaurant

## ✅ Completion Checklist

- [ ] Form adds restaurants to Redux store
- [ ] Restaurant list updates in real-time
- [ ] Random picker works with new restaurants
- [ ] No console errors
- [ ] TypeScript compiles without errors

## 🐛 Common Issues

- **State not updating** - Check dispatch is called correctly
- **TypeScript errors** - Verify imports and type annotations
- **Form not submitting** - Ensure preventDefault() is called

Good luck! 🚀
