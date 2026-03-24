
# Blueprint: VT BIO Informational Website

## Overview

This document outlines the plan for creating a modern, premium single-page informational website for **VT BIO**, a leading biotechnology company specializing in cell therapies for degenerative brain diseases. The website is built using framework-less Web Components (HTML, CSS, JavaScript) and adheres to modern web standards (Baseline).

## Current Design and Features

*   **Structure:** Single-page responsive layout.
*   **Architecture:** Modular Web Components for scalability and encapsulation.
*   **Key Sections:**
    *   `<main-header>`: Sticky navigation with company branding.
    *   `<hero-section>`: High-impact introduction to VT BIO's mission.
    *   `<pipeline-section>`: Detailed view of R&D candidates (VT301, VT012, etc.).
    *   `<research-section>`: Overview of core technology and clinical milestones.
    *   `<video-section>`: Embedded educational content on T-cell therapy.
    *   `<main-footer>`: Corporate info and copyright.

## Design Strategy (Premium Aesthetic)

1.  **Typography:** Utilize 'Noto Sans KR' with high-contrast font weights and sizes (e.g., 4rem for hero text) to emphasize authority.
2.  **Color Palette:** Use `oklch` for vibrant, perceptually uniform colors (Primary: Deep Blue, Secondary: Medical Teal).
3.  **Depth & Texture:**
    *   Apply subtle grain/noise texture to backgrounds for a premium feel.
    *   Use multi-layered `box-shadow` to create a sense of "lift" for cards.
4.  **Interactivity:** Smooth transitions and "glow" effects on interactive elements.

## Plan for Current Request (Content & UI Update)

1.  **Research-Driven Content Update:** 
    *   Update `main.js` to replace placeholders with real data: **VT301** (Regulatory T Cell Therapy for Alzheimer's), **VT012** (Herbal formula for neurogenesis), and clinical status (US FDA Phase 1/2a).
2.  **Visual Overhaul:**
    *   Revise `style.css` with modern CSS features (`oklch`, container queries, `:has()`).
    *   Enhance component templates in `main.js` with better styling and structural layout.
3.  **Deployment Verification:** Prepare for Cloudflare Pages integration.
