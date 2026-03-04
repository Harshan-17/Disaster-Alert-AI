# 🚨 Real-Time Disaster Alert System - Source Code

## 📁 Complete File Structure

```
disaster-alert-system/
├── src/
│   └── app/
│       ├── App.tsx                 ✅ Main entry point
│       ├── routes.ts               ✅ Routing configuration
│       │
│       ├── contexts/
│       │   └── AuthContext.tsx     ✅ Authentication state management
│       │
│       ├── data/
│       │   └── mockData.ts         ✅ Indian regions & disaster data
│       │
│       ├── components/
│       │   ├── Header.tsx          ✅ Navigation header
│       │   └── MapComponent.tsx    ✅ Interactive map
│       │
│       └── pages/
│           ├── Home.tsx            ✅ Landing page
│           ├── Dashboard.tsx       ✅ Live monitoring
│           ├── AIPredictor.tsx     ✅ AI disaster predictor
│           ├── Alerts.tsx          ✅ Alert management
│           ├── Admin.tsx           ✅ Admin panel
│           ├── About.tsx           ✅ About & awareness
│           ├── Login.tsx           ✅ Authentication
│           └── NotFound.tsx        ✅ 404 page
│
├── package.json                    ✅ Dependencies
└── SOURCE_CODE_DOCUMENTATION.md    ✅ Full documentation

Total: 15 source files
```

---

## 🎯 Key Files Overview

### Core Application Files

#### 1️⃣ **App.tsx** (Entry Point)
**Location:** `/src/app/App.tsx`
```tsx
import { RouterProvider } from 'react-router';
import { AuthProvider } from './contexts/AuthContext';
import { router } from './routes';

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
```
**Purpose:** Application root with authentication and routing

---

#### 2️⃣ **routes.ts** (Navigation)
**Location:** `/src/app/routes.ts`
**Lines of Code:** 44
**Routes:**
- `/` - Home
- `/dashboard` - Live Dashboard
- `/ai-predictor` - AI Predictor (NEW!)
- `/alerts` - Alert Management
- `/admin` - Admin Panel
- `/about` - About Page
- `/login` - Login
- `*` - 404 Page

---

### Data & Context Files

#### 3️⃣ **AuthContext.tsx** (Authentication)
**Location:** `/src/app/contexts/AuthContext.tsx`
**Lines of Code:** 90
**Features:**
- User state management
- Mock login (email/password)
- Mock Google OAuth
- Location updates
- Role-based access (user/admin)

---

#### 4️⃣ **mockData.ts** (Data Layer)
**Location:** `/src/app/data/mockData.ts`
**Lines of Code:** 314
**Contains:**
- 8 Indian states with districts
- 7 active disaster alerts
- AI prediction data (24-hour forecast)
- Emergency contact numbers
- Alert history
- Accuracy metrics

**Data Examples:**
```typescript
// States: Maharashtra, Kerala, Tamil Nadu, Karnataka, 
// Gujarat, Uttarakhand, West Bengal, Assam

// Disasters: Flood, Earthquake, Fire, Cyclone, Landslide

// Current Alerts:
- Kochi Flood (Critical)
- Dehradun Earthquake (Medium)
- Visakhapatnam Cyclone (High)
- Bandipur Fire (High)
- Darjeeling Landslide (High)
- Guwahati Flood (Critical)
- Mumbai Cyclone (Medium)
```

---

### Component Files

#### 5️⃣ **Header.tsx** (Navigation)
**Location:** `/src/app/components/Header.tsx`
**Lines of Code:** 140
**Features:**
- Responsive navigation
- Active route highlighting
- User profile display
- Mobile menu
- Admin access control

---

#### 6️⃣ **MapComponent.tsx** (Interactive Map)
**Location:** `/src/app/components/MapComponent.tsx`
**Lines of Code:** 150+
**Features:**
- Color-coded risk zones
- State markers (clickable)
- Alert indicators (animated)
- Legend
- State info popup

---

### Page Components

#### 7️⃣ **Home.tsx** (Landing Page)
**Location:** `/src/app/pages/Home.tsx`
**Lines of Code:** 250+
**Sections:**
- Hero section with CTA buttons
- Statistics dashboard (4 cards)
- Live risk map
- Active alerts feed (4 alerts)
- Call-to-action
- Footer with links

---

#### 8️⃣ **Dashboard.tsx** (Live Monitoring)
**Location:** `/src/app/pages/Dashboard.tsx`
**Lines of Code:** 300+
**Features:**
- Quick stats (4 metrics)
- Interactive map
- Disaster type filters
- Real-time alert feed
- AI accuracy metrics
- Weekly trends chart
- 24-hour predictions (Line chart)

**Charts Used:**
- Bar Chart (Risk distribution)
- Area Chart (Weekly trends)
- Line Chart (24-hour predictions)

---

#### 9️⃣ **AIPredictor.tsx** (NEW! - AI Predictions)
**Location:** `/src/app/pages/AIPredictor.tsx`
**Lines of Code:** 400+
**Input Parameters:**
- Location (dropdown)
- Temperature (slider: 0-50°C)
- Humidity (slider: 0-100%)
- Wind Speed (slider: 0-100 km/h)
- Rainfall (slider: 0-50 mm/h)
- Seismic Activity (slider: 0-10)

**Output:**
- Overall risk percentage
- Risk level (Low/Medium/High/Critical)
- Individual disaster predictions
- AI confidence score
- Recommendations
- Radar chart (multi-hazard profile)
- Timeline chart (24-hour progression)

**Algorithm:**
```javascript
Flood = rainfall*8 + humidity*0.5 + (100-temp*2)
Earthquake = seismic*15 + random
Fire = temp*2 + (100-humidity)*0.8 + wind*1.5
Cyclone = wind*3 + humidity*0.6 + rainfall*5
Landslide = rainfall*7 + seismic*10 + humidity*0.4
```

---

#### 🔟 **Alerts.tsx** (Alert Management)
**Location:** `/src/app/pages/Alerts.tsx`
**Lines of Code:** 350+
**Features:**
- Location detection
- Email/SMS/Push toggles
- Disaster type selection
- Alert history (5 past alerts)
- Emergency contacts (9 services)
- Safety tips

---

#### 1️⃣1️⃣ **Admin.tsx** (Admin Panel)
**Location:** `/src/app/pages/Admin.tsx`
**Lines of Code:** 400+
**Features:**
- Statistics dashboard (4 cards)
- Dataset upload (CSV/JSON/XLSX)
- Emergency broadcast system
- State/region selector
- Severity level selector
- AI model performance chart
- Disaster distribution (Pie chart)
- Recent activities log
- System status monitor

---

#### 1️⃣2️⃣ **About.tsx** (Information)
**Location:** `/src/app/pages/About.tsx`
**Lines of Code:** 350+
**Sections:**
- Key features (4 cards)
- How it works (4 steps)
- AI model explanation
- Technology stack
- Data sources
- Safety guidelines (4 disasters)
- Government resources (4 links)
- Statistics footer

---

#### 1️⃣3️⃣ **Login.tsx** (Authentication)
**Location:** `/src/app/pages/Login.tsx`
**Lines of Code:** 150+
**Features:**
- Email/password form
- Google sign-in button
- Error handling
- Demo credentials display
- Public alerts link

**Demo Credentials:**
- User: any email
- Admin: admin@example.com
- Password: any

---

#### 1️⃣4️⃣ **NotFound.tsx** (404)
**Location:** `/src/app/pages/NotFound.tsx`
**Lines of Code:** 30+
**Simple 404 page with home button**

---

## 📊 Code Statistics

| Category | Files | Lines of Code |
|----------|-------|---------------|
| Pages | 8 | ~2,400 |
| Components | 2 | ~300 |
| Contexts | 1 | 90 |
| Data | 1 | 314 |
| Config | 2 | 55 |
| **Total** | **14** | **~3,159** |

---

## 🎨 UI Components Used

### From Tailwind CSS
- Gradient backgrounds
- Responsive grid layouts
- Hover effects
- Animations (pulse, spin)
- Shadow effects

### From Lucide React (Icons)
- AlertTriangle, Brain, MapPin, Bell
- Shield, User, Activity, TrendingUp
- Phone, Mail, Lock, Chrome
- And 20+ more icons

### From Recharts (Charts)
- LineChart - 24-hour predictions
- BarChart - Risk distribution
- AreaChart - Weekly trends
- RadarChart - Multi-hazard profile
- PieChart - Disaster distribution

### Custom Components
- Interactive map with markers
- Risk level indicators
- Alert cards
- Statistics dashboards
- Form controls with sliders

---

## 🔧 Technology Stack

```json
{
  "frontend": {
    "framework": "React 18.3.1",
    "language": "TypeScript",
    "styling": "Tailwind CSS v4",
    "routing": "React Router 7",
    "charts": "Recharts 2.15.2",
    "icons": "Lucide React 0.487.0",
    "ui": "Radix UI"
  },
  "backend": {
    "type": "Mock Implementation",
    "auth": "Context API",
    "state": "React Hooks",
    "data": "In-memory"
  },
  "build": {
    "bundler": "Vite 6.3.5",
    "dev-server": "Vite Dev Server"
  }
}
```

---

## 🚀 Quick Start

### 1. View Files
All source code is in `/src/app/` directory

### 2. Run Application
```bash
npm run dev
# or
pnpm dev
```

### 3. Access Pages
- Home: http://localhost:5173/
- Dashboard: http://localhost:5173/dashboard
- AI Predictor: http://localhost:5173/ai-predictor
- Login: http://localhost:5173/login

### 4. Test Features
- Try AI Predictor with different parameters
- Login with "admin@example.com" for admin access
- Explore all 7 active disaster alerts
- Check charts and visualizations

---

## 📱 Features Checklist

### Landing Page ✅
- [x] Hero section
- [x] Live map
- [x] Active alerts
- [x] Statistics
- [x] Emergency button

### Live Dashboard ✅
- [x] Interactive map
- [x] Real-time feed
- [x] Filters
- [x] AI charts
- [x] Metrics

### AI Predictor ✅
- [x] Parameter inputs
- [x] Real-time calculations
- [x] Risk assessment
- [x] Radar chart
- [x] Timeline
- [x] Recommendations

### Alert System ✅
- [x] Location detection
- [x] Notifications
- [x] History
- [x] Contacts

### Admin Panel ✅
- [x] Upload system
- [x] Broadcast
- [x] Statistics
- [x] Monitoring

### About Page ✅
- [x] Features
- [x] How it works
- [x] AI explanation
- [x] Safety guides
- [x] Resources

---

## 🎯 Main Features

### 1. AI Disaster Predictor (NEW!)
**File:** `AIPredictor.tsx`
- Input environmental parameters
- Get instant risk predictions
- View multi-hazard analysis
- See 24-hour risk timeline
- Receive personalized recommendations

### 2. Real-Time Monitoring
**File:** `Dashboard.tsx`
- Live map with 8 states
- 7 active disaster alerts
- Filter by disaster type
- AI accuracy: 94.5%

### 3. Interactive Map
**File:** `MapComponent.tsx`
- Color-coded zones
- Clickable markers
- State information
- Alert indicators

### 4. Alert Management
**File:** `Alerts.tsx`
- Location-based
- Multi-channel notifications
- Emergency contacts
- Alert history

### 5. Admin Control
**File:** `Admin.tsx`
- Dataset management
- Emergency broadcasts
- Performance monitoring
- System status

---

## 📖 Documentation Files

1. **SOURCE_CODE_DOCUMENTATION.md** - Complete guide
2. **README.md** - This file with code overview
3. **Code comments** - Throughout all files

---

## 🔐 Authentication

**File:** `/src/app/contexts/AuthContext.tsx`

**Mock Users:**
```javascript
// Regular user
email: "user@example.com"
role: "user"

// Admin user
email: "admin@example.com"
role: "admin"
```

**Password:** Any string (mock auth)

---

## 📂 How to Access Source Code

All files are in your current workspace:

```bash
# Navigate to source
cd src/app

# View file
cat pages/AIPredictor.tsx

# Or open in your editor
code .
```

---

## 💡 Key Implementation Details

### AI Prediction Algorithm
Located in: `/src/app/pages/AIPredictor.tsx` (lines 20-80)

### Mock Data
Located in: `/src/app/data/mockData.ts` (all 314 lines)

### Routing
Located in: `/src/app/routes.ts` (all 44 lines)

### Authentication
Located in: `/src/app/contexts/AuthContext.tsx` (all 90 lines)

---

## 🎨 UI/UX Features

- Responsive design (mobile + desktop)
- Color-coded risk levels
- Interactive charts
- Real-time updates simulation
- Smooth animations
- Accessible navigation
- Loading states
- Error handling

---

## 📞 Support

For the complete documented source code, see:
- **SOURCE_CODE_DOCUMENTATION.md** (Full guide)
- Individual files in `/src/app/`

**All source code is available in your workspace!**

---

**Built with React + TypeScript + Tailwind CSS**
**Real-Time Disaster Alert System v1.0**
