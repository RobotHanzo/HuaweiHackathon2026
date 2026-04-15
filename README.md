# Cufflink - AI Networking Hub

Cufflink is a premium, mobile-first networking platform designed to streamline interaction capture and follow-up using AI-driven workflows. Built for high-stakes networking environments, Cufflink transforms brief encounters into actionable CRM data and personalized outreach.

## 🚀 Key Features

- **3D Interactive Profile Pass**: A dynamic digital business card with a 3D flip animation to reveal your personal networking QR code.
- **AI Outreach Generator**: Context-aware drafting logic that creates personalized follow-up messages based on interaction transcripts.
- **Smart Contact Capture**: Simulation of voice memo recording with live AI transcription for capturing meeting context on the fly.
- **Holographic QR Scanner**: A modern QR scanning interface for instant connection establishment.
- **Networking Timeline**: A chronological history of all interactions with integrated AI follow-up actions.
- **Relationship CRM**: Bento-style CRM view for deep-diving into contact details and relationship health.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Vanilla CSS (Modern Design System), Tailwind CSS (Base)
- **Icons**: Lucide React
- **Animations**: CSS Keyframes & Framer-like transitions

## 📦 Project Structure

```text
website/
├── src/
│   ├── components/
│   │   ├── AiDraftGenerator.tsx  # Reusable AI drafting logic
│   │   └── AppShell.tsx          # Navigation & Layout management
│   ├── HomeProfile.tsx           # Home Pass & QR Scanner
│   ├── NearbyAlert.tsx           # Proximity-based alerts
│   ├── ContactCapture.tsx        # Voice memo & Transcription
│   ├── NetworkingTimeline.tsx    # Interaction history
│   ├── RelationshipCrm.tsx       # Contact management
│   ├── App.tsx                   # Main Routing
│   └── index.css                 # Global Design System
└── public/                       # Static assets
```

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) (v1 or v3)

### Installation

1. Clone the repository
2. Navigate to the website directory:
   ```bash
   cd website
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```

### Development

Run the local development server:
```bash
yarn dev
```
The app will be available at `http://localhost:5173`.

### Production Build

Create a production-ready bundle:
```bash
yarn build
```
The output will be generated in the `dist/` directory, ready for deployment to platforms like GitHub Pages or Vercel.

---

*Built for the Huawei Hackathon 2026.*
