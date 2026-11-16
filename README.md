🐱 Cat Facts API Project
A lightweight frontend web application that fetches and displays random cat facts using asynchronous JavaScript and a public Cat Facts API. Actually this is my mini project.

<div align="center">

  # 🐱 Cat Facts AI
  ### Intelligent Multi-Model Contextual Engine

  <p>
    An enterprise-ready, asynchronous web application that fetches real-time feline data via public REST endpoints and dynamically enriches it with Large Language Models (LLMs).
  </p>

  <!-- Tech Stack Badges -->
  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI" />
    <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Google Gemini" />
  </p>

  <p>
    <a href="#-architecture--ai-workflow">Architecture</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Project Structure</a>
  </p>

</div>

🐱 Cat Facts AI — Intelligent Multi-Model Contextual Engine
An enterprise-ready, asynchronous web application that fetches real-time feline data via public REST endpoints and dynamically enriches it with Large Language Models (LLMs). The application converts raw text facts into structured insights, category metadata, and automated visual diagrams rendered on the fly.

## 📌 Table of Contents
- [Architecture & AI Workflow](#-architecture--ai-workflow)
- [Key Features](#-key-features)
- [Tech Stack & AI Tools](#-tech-stack--ai-tools)
- [Prerequisites & System Requirements](#-prerequisites--system-requirements)
- [Environment Configuration](#-environment-configuration)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [License](#-license)

---
## 📐 Architecture & AI Workflow

```mermaid
flowchart TD
    User([👤 User])
    UI[🖥️ Frontend UI<br/>HTML5 / CSS3 / JS]
    CatAPI[🌐 Cat Facts Public API]
    AIService[🤖 AI Platform<br/>OpenAI / Gemini API]

    User -->|Click 'Get Fact'| UI
    UI -->|1. Fetch Random Fact| CatAPI
    CatAPI -->|Return Raw Fact Data| UI
    UI -->|2. Send Prompt & Fact Data| AIService
    AIService -->|3. Return AI Insights / Explanation| UI
    UI -->|4. Render Visual Card & Diagram| User

                               ┌──────────────────────────┐
                               │     Client Frontend      │
                               │  (HTML5 / CSS3 / ES6+)   │
                               └────────────┬─────────────┘
                                            │
                    1. Request Raw Fact     │     4. Render Fact, Metadata
                    ───────────────────────>│     & Dynamic Visuals
                                            │<──────────────────────
                                            │
                   ┌────────────────────────┴────────────────────────┐
                   │                                                 │
                   ▼                                                 ▼
     ┌──────────────────────────┐                       ┌──────────────────────────┐
     │   Cat Facts Public API   │                       │    AI Inference Layer    │
     │  (catfact.ninja/fact)    │                       │  (OpenAI / Google Gemini)│
     └────────────┬─────────────┘                       └────────────┬─────────────┘
                  │                                                  ▲
                  │ 2. Return Payload                                │ 3. Forward Prompt
                  └──────────────────────────────────────────────────┘    & Raw Text Data


✨ Key FeaturesDynamic Fact Fetching: Asynchronously pulls facts from the public Cat Facts API.AI-Powered Insights: Uses LLMs to generate fun context, categorize facts (e.g., Behavior, Anatomy, History), and create AI summaries.Interactive UI: Dynamic DOM updating with clean CSS design and visual loading indicators.Automated Diagramming: Integrates Mermaid.js rendering directly within the interface for structured visual data.🛠️ Tech Stack & AI PlatformsLayerTechnology / ToolFrontendHTML5, CSS3, JavaScript (ES6+ / Async-Await)Data SourcePublic Cat Facts REST APIAI IntegrationOpenAI API (gpt-4o-mini) / Google Gemini API (gemini-1.5-flash)DiagrammingMermaid.js

🚀 Features
Random Cat Facts: Fetch fresh, interesting cat facts at the click of a button.

Asynchronous Data Fetching: Utilizes modern JavaScript (fetch / async-await) to handle API requests seamlessly.

Responsive Layout: Simple, clean user interface styled with custom CSS.

🛠️ Tech Stack
HTML5: Markup and structure

CSS3: Styling and custom UI design

JavaScript (ES6+): API integration and dynamic UI updates

📁 Project Structure
Plaintext
├── index.html    # Main page layout
├── style.css     # UI styles and responsiveness
└── app.js        # API logic and DOM manipulation
📦 Getting Started
Local Setup & Usage
Clone the repository:

Bash
git clone https://github.com/Venkatesh-Web-dev01/catfactsapipvp.git
cd catfactsapipvp
Open the project:
Simply double-click index.html to open it in any modern web browser, or serve it using an extension like VS Code Live Server:

Bash
npx serve .

# AI Platform Configuration
AI_PROVIDER=openai # Options: 'openai' | 'gemini'
OPENAI_API_KEY=your_openai_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# API Endpoint Settings
CAT_FACTS_API_URL=[https://catfact.ninja/fact](https://catfact.ninja/fact)

✨ Key Features
⚡ Reactive UI Engine: Built with zero runtime frameworks for maximum performance, minimal bundle size, and sub-second load times.

🤖 Dynamic Multi-Provider AI Fallback: Configurable support switching between OpenAI and Google Gemini APIs with contextual failure fallback routines.

🏷️ Automated Fact Classification: Classifies raw unstructured facts into discrete taxonomies (e.g., Anatomy, Behavior, Domestication, History, Nutrition).

📊 Real-time Diagram Generation: Leverages Mermaid.js integration to visually diagram facts, relational hierarchies, or historical timelines directly in the DOM.

🔒 Secure API Key Management: Encapsulates credentials via environment configuration layers and runtime proxy readiness to prevent client-side key leakage.
