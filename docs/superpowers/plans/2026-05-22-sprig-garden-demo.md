# Sprig Garden Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing Pingnan plant atlas into a clickable single-page pixel game prototype for `种种花园（Sprig Garden）`.

**Architecture:** Keep the app static and dependency-free. `index.html` owns the screen markup, `styles.css` owns the pixel game visual system, and `main.js` owns in-memory prototype state and interactions.

**Tech Stack:** Plain HTML, CSS, and JavaScript.

---

## File Structure

- Modify `/Users/comedy/pingnan-plants-site/index.html`: replace the atlas landing page with app shell, gardener header, garden, map, AR discovery, atlas, and expedition panels.
- Modify `/Users/comedy/pingnan-plants-site/styles.css`: replace the current atlas styling with responsive pixel-game app styling.
- Modify `/Users/comedy/pingnan-plants-site/main.js`: replace filter logic with tab navigation, garden dialogue, AR capture, atlas unlock, level/task progress, photo mode, and expedition state.

### Task 1: Build Static App Shell

**Files:**
- Modify: `/Users/comedy/pingnan-plants-site/index.html`
- Modify: `/Users/comedy/pingnan-plants-site/styles.css`

- [ ] **Step 1: Replace page markup**

Create a single app container with persistent gardener header, screen panels for `garden`, `map`, `discover`, `atlas`, and `expedition`, plus bottom navigation.

- [ ] **Step 2: Add base responsive styling**

Style the prototype as a top-down pixel garden app that opens directly to `我的花园`, with all panels hidden except the active one.

- [ ] **Step 3: Verify static layout**

Open `/Users/comedy/pingnan-plants-site/index.html` in a browser and confirm the first screen is the garden, not a landing page.

### Task 2: Add Prototype Interactions

**Files:**
- Modify: `/Users/comedy/pingnan-plants-site/main.js`
- Modify: `/Users/comedy/pingnan-plants-site/index.html`

- [ ] **Step 1: Implement tab navigation**

Clicking bottom navigation should switch the active panel without reloading the page.

- [ ] **Step 2: Implement garden knowledge bubbles**

Clicking a `种种` should show that spirit's local knowledge and behavior.

- [ ] **Step 3: Implement photo mode**

Clicking photo mode should briefly hide UI chrome or add a share-ready photo state.

### Task 3: Add Discovery, Atlas, Tasks, And Expedition State

**Files:**
- Modify: `/Users/comedy/pingnan-plants-site/main.js`
- Modify: `/Users/comedy/pingnan-plants-site/index.html`
- Modify: `/Users/comedy/pingnan-plants-site/styles.css`

- [ ] **Step 1: Implement map-to-AR flow**

Clicking `发现附近种种` should switch to `AR发现`.

- [ ] **Step 2: Implement AR capture stages**

AR buttons should progress through `拍照`, `识别植物`, `AR显示种种`, and `捕捉`.

- [ ] **Step 3: Implement capture result**

Capturing should unlock `蒲公英种种`, add it to the garden, mark it in the atlas, complete task progress, and increase level progress from `Lv.1`.

- [ ] **Step 4: Implement expedition dispatch**

Dispatching a `种种` should mark it `探险中`, show return findings, and complete task progress.

### Task 4: Manual Verification

**Files:**
- Read: `/Users/comedy/pingnan-plants-site/index.html`

- [ ] **Step 1: Desktop verification**

Open the page at desktop width. Check all tabs, knowledge bubbles, AR capture, atlas unlock, task/level progress, photo mode, and expedition dispatch.

- [ ] **Step 2: Mobile verification**

Check the page at a narrow width and confirm there is no obvious text overlap or broken navigation.

- [ ] **Step 3: Final cleanup**

Remove stale atlas-only markup or unused script behavior, leaving the static prototype easy to demo.
