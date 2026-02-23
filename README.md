# TechShuttle Website

Official website for **TechShuttle** - The Technical Society of BVCOE, New Delhi.

## 🚀 About TechShuttle

TechShuttle is a student-run technical society at Bharati Vidyapeeth's College of Engineering (BVCOE), New Delhi. We organize workshops, coding competitions, tech talks, and collaborative events to empower students in their tech journey.

## 📁 Project Structure

```
TechShuttle-Website/
├── public/
│   ├── index.html
│   ├── robots.txt
│   └── img/
│       ├── faculty.jpg
│       ├── Team2025/          # Current team photos
│       ├── event1/            # Event 1 images
│       ├── event2/            # Event 2 images
│       ├── event3/            # Event 3 images
│       ├── event4/            # Tech Baliye images
│       ├── event5/            # CodeSpirit: PyLaunch images
│       ├── event6/            # Code Golfing images
│       └── event7/            # TechTussle images
│
├── src/
│   ├── App.js                 # Main app component with routing
│   ├── App.css                # Global styles
│   ├── index.js               # Entry point
│   │
│   ├── assets/
│   │   ├── animations/        # Lottie animation JSON files
│   │   └── svg/               # SVG assets
│   │
│   ├── data/
│   │   ├── data2025.json      # Current team (2025) data
│   │   ├── eventsData.json    # Events information
│   │   └── index.json         # Previous team members data
│   │
│   └── Pages/
│       └── Home/
│           ├── Homescreen/
│           │   └── index.jsx      # Home page layout
│           ├── Navbar.jsx         # Navigation bar
│           ├── HeroSection.jsx    # Hero with particle animation
│           ├── Statistics.jsx     # Animated counters
│           ├── Features.jsx       # What we offer section
│           ├── AboutMe.jsx        # About us section
│           ├── Events.jsx         # Events grid
│           ├── EventPics.jsx      # Event gallery
│           ├── Team.jsx           # Current team section
│           ├── OldTeamSlider.jsx  # Alumni slider
│           ├── Testimonials.jsx   # Testimonials carousel
│           ├── Timeline.jsx       # Society journey/story
│           ├── Partners.jsx       # Partner societies
│           ├── Newsletter.jsx     # Newsletter signup
│           ├── Footer.jsx         # Footer
│           └── components/
│               └── EventsPopup.jsx # Event details modal
│
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **React 19** - Frontend framework
- **React Router DOM 7** - Client-side routing
- **Swiper** - Touch slider for carousels
- **Lottie React** - Animations
- **CSS3** - Custom styling with CSS variables

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/TechShuttle-Website.git

# Navigate to project directory
cd TechShuttle-Website

# Install dependencies
npm install

# Start development server
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## 📝 Adding Events

To add a new event, edit `src/data/eventsData.json`:

```json
{
  "id": 8,
  "title": "Event Name",
  "tag": "Workshop",
  "description": "Event description...",
  "speakers": ["Speaker 1", "Speaker 2"],
  "agenda": ["Item 1", "Item 2"],
  "date": "Month Day, Year at Time",
  "venue": "BVCOE, New Delhi",
  "images": ["./img/event8/photo1.jpg"],
  "highlights": ["Highlight 1", "Highlight 2"]
}
```

Then add event images to `public/img/event8/`.

## 📝 Updating Team

- **Current Team**: Edit `src/data/data2025.json`
- **Previous Team**: Edit `src/data/index.json`
- **Photos**: Add to `public/img/Team2025/`

## 📄 License

This project is maintained by TechShuttle, BVCOE.

---

Made with ❤️ by TechShuttle
