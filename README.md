# 📊 Portfolio Snapshot

A modern, responsive portfolio  built with **Next.js**, **Tailwind CSS**, and **Recharts**. It provides a clean snapshot of investment data including user summary, asset allocation, and holdings.

---

## 🚀 Features

- 📅 Date-based portfolio snapshots
- 📈 Asset allocation pie chart using `recharts`
- 💼 Holdings table with return % and SIP info
- 🔔 Toast notifications
- 📱 Responsive design (mobile-friendly)

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) (App Router, JavaScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)

---

## 📂 Folder Structure
src/
│
├── app/ # App Router pages
│ ├── layout.js
│ └── page.js
│
├── components/ # UI and functional components
│ ├── Header.js
│ ├── UserSummaryCard.js
│ ├── AssetAllocationChart.js
│ ├── HoldingsTable.js
│ ├── Toast.js
│ └── ui/
│ ├── button.js
│ └── card.js
│
├── data/
│ └── portfolioData.js # Static mock data
│
└── styles/
└── globals.css # Tailwind setup

## ⚙️ Getting Started

1. Clone the Repository

git clone https://github.com/your-username/portfolio-snapshot.git
cd portfolio-snapshot

2. Install Dependencies

npm install

3. Run the Dev Server

npm run dev

