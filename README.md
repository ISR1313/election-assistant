# 🇮🇳 Election Assistant

An interactive, multilingual web application designed to educate and empower Indian voters by simplifying the electoral process.

## 🌟 Overview

The Election Assistant provides a centralized platform for citizens to understand election timelines, explore state-specific voting information, and interact with an AI-powered assistant for quick answers to electoral queries.

### Key Features
- **🤖 AI Assistant Chat**: Get instant answers to complex questions about the voting process.
- **🗺️ State Explorer**: Interactive data visualization for state-wise election information.
- **⏳ Interactive Timeline**: Visual breakdown of the election phases and important dates.
- **🗂️ Educational Flashcards**: Quick, bite-sized learning about voting rights and procedures.
- **🌐 Multilingual Support**: Seamlessly switch between English and Hindi.

## 🏗️ Architecture

```mermaid
graph TD
    User([User]) --> App[React App Container]
    App --> Lang[Language Provider - i18n]
    Lang --> Header[Header & Language Toggle]
    Lang --> Dashboard[Main Dashboard]
    
    subgraph Components
        Dashboard --> SE[State Explorer]
        Dashboard --> FD[Flashcard Deck]
        Dashboard --> IT[Interactive Timeline]
        Dashboard --> AC[Assistant Chat]
    end
    
    subgraph Data Layer
        SE --> Data[(Election Stats)]
        FD --> Content[Educational Content]
        IT --> Schedule[Phase Dates]
        AC --> AI[AI Prompt Logic]
    end
```

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Vanilla CSS (Custom Design System)
- **Icons**: Lucide React
- **Containerization**: Docker
- **Web Server**: Nginx

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ISR1313/election-assistant.git
   cd election-assistant
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run in development mode:
   ```bash
   npm run dev
   ```

### Docker Deployment
The project is container-ready for easy deployment:
```bash
docker build -t election-assistant .
docker run -p 8080:80 election-assistant
```

## 📄 License
Distributed under the MIT License.
