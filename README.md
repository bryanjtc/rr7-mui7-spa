# MUI7 and React Router 7 SPA Hydration Mismatch Reproduction

This repository contains a minimal reproduction for a hydration mismatch error that occurs when using Material UI 7 (MUI) with React Router 7 in SPA (Single Page Application) mode.

## Issue Description

When using MUI 7 components within a React Router 7 SPA setup, hydration mismatches occur between the server-rendered content and the client-side rendered content. This leads to UI inconsistencies and React warnings in the console.

## Reproduction Steps

1. Clone this repository
2. Install dependencies with `yarn install`
3. Run the development server with `yarn dev`
4. Open your browser console to observe hydration mismatch errors

## Environment Details

- Material UI: v7.x
- React Router: v7.x
- React: v18.x
- TypeScript: v5.x