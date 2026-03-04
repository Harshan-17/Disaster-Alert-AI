// Mock data for Indian regions and disaster alerts

export interface DisasterAlert {
  id: string;
  type: 'flood' | 'earthquake' | 'fire' | 'cyclone' | 'landslide';
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: string;
  state: string;
  latitude: number;
  longitude: number;
  description: string;
  timestamp: Date;
  affectedArea: string;
  expectedImpact: string;
  instructions: string[];
}

export interface RegionData {
  state: string;
  districts: string[];
  riskLevel: 'low' | 'medium' | 'high';
  activeAlerts: number;
  population: number;
  coordinates: { lat: number; lng: number };
}

export const indianStates: RegionData[] = [
  {
    state: 'Maharashtra',
    districts: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
    riskLevel: 'medium',
    activeAlerts: 3,
    population: 112374333,
    coordinates: { lat: 19.7515, lng: 75.7139 }
  },
  {
    state: 'Kerala',
    districts: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
    riskLevel: 'high',
    activeAlerts: 7,
    population: 33406061,
    coordinates: { lat: 10.8505, lng: 76.2711 }
  },
  {
    state: 'Tamil Nadu',
    districts: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
    riskLevel: 'medium',
    activeAlerts: 2,
    population: 72147030,
    coordinates: { lat: 11.1271, lng: 78.6569 }
  },
  {
    state: 'Karnataka',
    districts: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi'],
    riskLevel: 'low',
    activeAlerts: 1,
    population: 61095297,
    coordinates: { lat: 15.3173, lng: 75.7139 }
  },
  {
    state: 'Gujarat',
    districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
    riskLevel: 'medium',
    activeAlerts: 4,
    population: 60439692,
    coordinates: { lat: 22.2587, lng: 71.1924 }
  },
  {
    state: 'Uttarakhand',
    districts: ['Dehradun', 'Haridwar', 'Nainital', 'Almora', 'Tehri'],
    riskLevel: 'high',
    activeAlerts: 5,
    population: 10086292,
    coordinates: { lat: 30.0668, lng: 79.0193 }
  },
  {
    state: 'West Bengal',
    districts: ['Kolkata', 'Howrah', 'Darjeeling', 'Siliguri', 'Durgapur'],
    riskLevel: 'medium',
    activeAlerts: 3,
    population: 91276115,
    coordinates: { lat: 22.9868, lng: 87.8550 }
  },
  {
    state: 'Assam',
    districts: ['Guwahati', 'Dibrugarh', 'Jorhat', 'Silchar', 'Nagaon'],
    riskLevel: 'high',
    activeAlerts: 8,
    population: 31169272,
    coordinates: { lat: 26.2006, lng: 92.9376 }
  }
];

export const currentAlerts: DisasterAlert[] = [
  {
    id: 'DA001',
    type: 'flood',
    severity: 'critical',
    location: 'Kochi',
    state: 'Kerala',
    latitude: 9.9312,
    longitude: 76.2673,
    description: 'Heavy rainfall causing severe flooding in low-lying areas',
    timestamp: new Date('2026-02-23T08:30:00'),
    affectedArea: '15 km radius',
    expectedImpact: 'Road blockages, power outages, displacement of 5000+ residents',
    instructions: [
      'Move to higher ground immediately',
      'Avoid flooded roads and areas',
      'Keep emergency supplies ready',
      'Follow local authority instructions'
    ]
  },
  {
    id: 'DA002',
    type: 'earthquake',
    severity: 'medium',
    location: 'Dehradun',
    state: 'Uttarakhand',
    latitude: 30.3165,
    longitude: 78.0322,
    description: 'Seismic activity detected - 4.5 magnitude earthquake',
    timestamp: new Date('2026-02-23T06:15:00'),
    affectedArea: '50 km radius',
    expectedImpact: 'Minor structural damage, aftershocks expected',
    instructions: [
      'Stay away from buildings and power lines',
      'Drop, Cover, and Hold during tremors',
      'Prepare for aftershocks',
      'Check for gas leaks'
    ]
  },
  {
    id: 'DA003',
    type: 'cyclone',
    severity: 'high',
    location: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    latitude: 17.6868,
    longitude: 83.2185,
    description: 'Cyclone approaching coastal areas - wind speed 110 km/h',
    timestamp: new Date('2026-02-23T05:00:00'),
    affectedArea: '100 km coastal region',
    expectedImpact: 'Heavy rain, strong winds, storm surge expected',
    instructions: [
      'Evacuate coastal areas immediately',
      'Secure loose objects',
      'Stock up on essential supplies',
      'Stay indoors during the cyclone'
    ]
  },
  {
    id: 'DA004',
    type: 'fire',
    severity: 'high',
    location: 'Bandipur Forest',
    state: 'Karnataka',
    latitude: 11.6694,
    longitude: 76.5747,
    description: 'Forest fire spreading rapidly due to dry conditions',
    timestamp: new Date('2026-02-23T07:45:00'),
    affectedArea: '25 km² forest area',
    expectedImpact: 'Wildlife displacement, air quality deterioration, nearby villages at risk',
    instructions: [
      'Evacuate nearby settlements',
      'Avoid forest areas',
      'Use face masks due to smoke',
      'Report new fire spots to authorities'
    ]
  },
  {
    id: 'DA005',
    type: 'landslide',
    severity: 'high',
    location: 'Darjeeling',
    state: 'West Bengal',
    latitude: 27.0360,
    longitude: 88.2627,
    description: 'Heavy rainfall triggering landslides in hilly areas',
    timestamp: new Date('2026-02-23T09:00:00'),
    affectedArea: 'Hill routes and settlements',
    expectedImpact: 'Road blockages, risk to hillside communities',
    instructions: [
      'Avoid travel in hilly areas',
      'Stay alert for warning signs',
      'Keep drainage systems clear',
      'Move away from slopes if cracks appear'
    ]
  },
  {
    id: 'DA006',
    type: 'flood',
    severity: 'critical',
    location: 'Guwahati',
    state: 'Assam',
    latitude: 26.1445,
    longitude: 91.7362,
    description: 'Brahmaputra river water level rising - flood warning issued',
    timestamp: new Date('2026-02-23T04:30:00'),
    affectedArea: 'Riverine areas and low-lying zones',
    expectedImpact: '10,000+ people affected, agriculture damage',
    instructions: [
      'Evacuate low-lying areas immediately',
      'Move livestock and valuables to higher ground',
      'Follow evacuation routes marked by authorities',
      'Keep emergency contact numbers handy'
    ]
  },
  {
    id: 'DA007',
    type: 'cyclone',
    severity: 'medium',
    location: 'Mumbai',
    state: 'Maharashtra',
    latitude: 19.0760,
    longitude: 72.8777,
    description: 'Coastal storm warning - high tides expected',
    timestamp: new Date('2026-02-23T10:15:00'),
    affectedArea: 'Coastal Mumbai and suburbs',
    expectedImpact: 'Flooding in coastal areas, transport disruptions',
    instructions: [
      'Avoid marine activities',
      'Stay away from beaches',
      'Secure outdoor items',
      'Monitor weather updates'
    ]
  }
];

export const aiPredictions = {
  next24Hours: [
    { hour: '00:00', floodRisk: 35, earthquakeRisk: 15, fireRisk: 20, cycloneRisk: 45 },
    { hour: '03:00', floodRisk: 42, earthquakeRisk: 18, fireRisk: 22, cycloneRisk: 52 },
    { hour: '06:00', floodRisk: 55, earthquakeRisk: 20, fireRisk: 25, cycloneRisk: 60 },
    { hour: '09:00', floodRisk: 68, earthquakeRisk: 22, fireRisk: 30, cycloneRisk: 70 },
    { hour: '12:00', floodRisk: 75, earthquakeRisk: 25, fireRisk: 35, cycloneRisk: 75 },
    { hour: '15:00', floodRisk: 70, earthquakeRisk: 23, fireRisk: 40, cycloneRisk: 68 },
    { hour: '18:00', floodRisk: 62, earthquakeRisk: 20, fireRisk: 38, cycloneRisk: 55 },
    { hour: '21:00', floodRisk: 50, earthquakeRisk: 18, fireRisk: 32, cycloneRisk: 48 },
  ],
  weeklyTrend: [
    { day: 'Mon', incidents: 12 },
    { day: 'Tue', incidents: 15 },
    { day: 'Wed', incidents: 9 },
    { day: 'Thu', incidents: 18 },
    { day: 'Fri', incidents: 14 },
    { day: 'Sat', incidents: 20 },
    { day: 'Sun', incidents: 16 },
  ],
  accuracyMetrics: {
    overall: 94.5,
    flood: 96.2,
    earthquake: 89.8,
    fire: 93.5,
    cyclone: 97.1,
    landslide: 91.4
  }
};

export const emergencyContacts = [
  { service: 'National Disaster Response Force (NDRF)', number: '011-26105763', category: 'emergency' },
  { service: 'Emergency (Police/Fire/Ambulance)', number: '112', category: 'emergency' },
  { service: 'Fire Services', number: '101', category: 'fire' },
  { service: 'Police Control Room', number: '100', category: 'police' },
  { service: 'Ambulance', number: '102', category: 'medical' },
  { service: 'Disaster Management Helpline', number: '1078', category: 'disaster' },
  { service: 'National Emergency Number', number: '112', category: 'emergency' },
  { service: 'Women Helpline', number: '1091', category: 'emergency' },
  { service: 'Child Helpline', number: '1098', category: 'emergency' },
];

export const alertHistory = [
  {
    id: 'AH001',
    type: 'flood',
    location: 'Chennai, Tamil Nadu',
    severity: 'medium',
    date: new Date('2026-02-22T14:30:00'),
    status: 'resolved'
  },
  {
    id: 'AH002',
    type: 'earthquake',
    location: 'Shimla, Himachal Pradesh',
    severity: 'low',
    date: new Date('2026-02-21T09:15:00'),
    status: 'resolved'
  },
  {
    id: 'AH003',
    type: 'cyclone',
    location: 'Puri, Odisha',
    severity: 'critical',
    date: new Date('2026-02-20T06:00:00'),
    status: 'resolved'
  },
  {
    id: 'AH004',
    type: 'fire',
    location: 'Nainital, Uttarakhand',
    severity: 'high',
    date: new Date('2026-02-19T16:45:00'),
    status: 'resolved'
  },
  {
    id: 'AH005',
    type: 'landslide',
    location: 'Munnar, Kerala',
    severity: 'high',
    date: new Date('2026-02-18T11:20:00'),
    status: 'resolved'
  }
];
