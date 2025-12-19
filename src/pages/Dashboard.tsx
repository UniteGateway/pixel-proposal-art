import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  MapPin,
  TrendingUp,
  Building2,
  Users,
  BarChart3,
  Navigation,
  Home,
  Globe,
  ChevronRight,
  ArrowUpRight,
  Plane,
  Train,
  Car,
  Building,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

// Quarterly milestones for sales projections
const quarterlyMilestones = [
  { month: "Mar 25", label: "Q1 2025", target: 15, achievement: "Phase 1 Launch" },
  { month: "Jun 25", label: "Q2 2025", target: 28, achievement: "50 Units Milestone" },
  { month: "Sep 25", label: "Q3 2025", target: 42, achievement: "Pre-launch Buzz" },
  { month: "Dec 25", label: "Q4 2025", target: 62, achievement: "Year 1 Target" },
  { month: "Mar 26", label: "Q1 2026", target: 88, achievement: "Phase 2 Launch" },
  { month: "Jun 26", label: "Q2 2026", target: 122, achievement: "100+ Units" },
  { month: "Sep 26", label: "Q3 2026", target: 165, achievement: "Phase 3 Start" },
  { month: "Dec 26", label: "Q4 2026", target: 210, achievement: "Year 2 Target" },
  { month: "Mar 27", label: "Q1 2027", target: 255, achievement: "250 Units" },
  { month: "Jun 27", label: "Q2 2027", target: 300, achievement: "Phase 4 Launch" },
  { month: "Sep 27", label: "Q3 2027", target: 370, achievement: "Final Push" },
  { month: "Dec 27", label: "Q4 2027", target: 435, achievement: "Project Complete" },
];
import logoNorthscape from "@/assets/logo-northscape.png";

// Sales projection data for 2 years (2025-2027)
const salesProjectionData = [
  { month: "Jan 25", units: 8, revenue: 12 },
  { month: "Feb 25", units: 12, revenue: 18 },
  { month: "Mar 25", units: 15, revenue: 22 },
  { month: "Apr 25", units: 18, revenue: 27 },
  { month: "May 25", units: 22, revenue: 33 },
  { month: "Jun 25", units: 28, revenue: 42 },
  { month: "Jul 25", units: 32, revenue: 48 },
  { month: "Aug 25", units: 38, revenue: 57 },
  { month: "Sep 25", units: 42, revenue: 63 },
  { month: "Oct 25", units: 48, revenue: 72 },
  { month: "Nov 25", units: 55, revenue: 82 },
  { month: "Dec 25", units: 62, revenue: 93 },
  { month: "Jan 26", units: 70, revenue: 105 },
  { month: "Feb 26", units: 78, revenue: 117 },
  { month: "Mar 26", units: 88, revenue: 132 },
  { month: "Apr 26", units: 98, revenue: 147 },
  { month: "May 26", units: 110, revenue: 165 },
  { month: "Jun 26", units: 122, revenue: 183 },
  { month: "Jul 26", units: 135, revenue: 202 },
  { month: "Aug 26", units: 150, revenue: 225 },
  { month: "Sep 26", units: 165, revenue: 247 },
  { month: "Oct 26", units: 180, revenue: 270 },
  { month: "Nov 26", units: 195, revenue: 292 },
  { month: "Dec 26", units: 210, revenue: 315 },
  { month: "Jan 27", units: 225, revenue: 337 },
  { month: "Feb 27", units: 240, revenue: 360 },
  { month: "Mar 27", units: 255, revenue: 382 },
  { month: "Apr 27", units: 270, revenue: 405 },
  { month: "May 27", units: 285, revenue: 427 },
  { month: "Jun 27", units: 300, revenue: 450 },
  { month: "Jul 27", units: 320, revenue: 480 },
  { month: "Aug 27", units: 345, revenue: 517 },
  { month: "Sep 27", units: 370, revenue: 555 },
  { month: "Oct 27", units: 395, revenue: 592 },
  { month: "Nov 27", units: 415, revenue: 622 },
  { month: "Dec 27", units: 435, revenue: 652 },
];

// Hyderabad growth data
const hyderabadGrowthData = [
  { year: "2019", population: 9.7, gdp: 85, realEstate: 100 },
  { year: "2020", population: 10.0, gdp: 78, realEstate: 92 },
  { year: "2021", population: 10.3, gdp: 95, realEstate: 115 },
  { year: "2022", population: 10.6, gdp: 112, realEstate: 138 },
  { year: "2023", population: 10.9, gdp: 128, realEstate: 165 },
  { year: "2024", population: 11.2, gdp: 145, realEstate: 195 },
  { year: "2025*", population: 11.5, gdp: 165, realEstate: 230 },
];

// Area distribution data
const areaDistributionData = [
  { name: "Residential", value: 65, color: "#2d5a3d" },
  { name: "Green Spaces", value: 20, color: "#4a8c5e" },
  { name: "Amenities", value: 10, color: "#c9a227" },
  { name: "Roads", value: 5, color: "#8b7355" },
];

// Proximity data
const proximityData = [
  { name: "Airport", distance: 15, icon: Plane },
  { name: "ORR Junction", distance: 2, icon: Car },
  { name: "IT Corridor", distance: 8, icon: Building },
  { name: "Metro Station", distance: 5, icon: Train },
];

// Villa types data
const villaTypesData = [
  { type: "3 BHK Villa", sqft: 2400, price: 1.2, units: 60 },
  { type: "4 BHK Villa", sqft: 3200, price: 1.8, units: 90 },
  { type: "5 BHK Villa", sqft: 4000, price: 2.5, units: 50 },
  { type: "Premium Villa", sqft: 5000, price: 3.5, units: 10 },
];

// Phase-wise sales breakdown data
const phaseSalesData = [
  { 
    phase: "Phase 1", 
    totalVillas: 100, 
    timeline: "Q1 2025 - Q2 2025",
    acres: 7,
    types: { "3BHK": 25, "4BHK": 45, "5BHK": 25, "Premium": 5 },
    revenue: 180,
    status: "Launching",
    color: "#2d5a3d"
  },
  { 
    phase: "Phase 2", 
    totalVillas: 120, 
    timeline: "Q3 2025 - Q4 2025",
    acres: 8,
    types: { "3BHK": 20, "4BHK": 50, "5BHK": 40, "Premium": 10 },
    revenue: 240,
    status: "Planning",
    color: "#4a8c5e"
  },
  { 
    phase: "Phase 3", 
    totalVillas: 115, 
    timeline: "Q1 2026 - Q3 2026",
    acres: 8,
    types: { "3BHK": 15, "4BHK": 50, "5BHK": 40, "Premium": 10 },
    revenue: 250,
    status: "Planned",
    color: "#c9a227"
  },
  { 
    phase: "Phase 4", 
    totalVillas: 100, 
    timeline: "Q4 2026 - Q2 2027",
    acres: 7,
    types: { "3BHK": 10, "4BHK": 40, "5BHK": 35, "Premium": 15 },
    revenue: 230,
    status: "Planned",
    color: "#8b7355"
  },
];

// Phase sales chart data
const phaseSalesChartData = phaseSalesData.map(p => ({
  name: p.phase,
  villas: p.totalVillas,
  revenue: p.revenue,
  acres: p.acres
}));

// Navigation menu items
const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "#overview" },
  { icon: MapPin, label: "Location", href: "#location" },
  { icon: Building2, label: "Area Analysis", href: "#area" },
  { icon: TrendingUp, label: "Sales Projections", href: "#sales" },
  { icon: Home, label: "Phase Breakdown", href: "#phases" },
  { icon: BarChart3, label: "Market Growth", href: "#growth" },
  { icon: Navigation, label: "Connectivity", href: "#connectivity" },
  { icon: Users, label: "Demographics", href: "#demographics" },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-6 h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoNorthscape} alt="Northscape" className="h-10" />
            </Link>
            <span className="text-muted-foreground">|</span>
            <h1 className="text-lg font-semibold text-foreground">Analytics Dashboard</h1>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Presentation
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 min-h-[calc(100vh-4rem)] bg-card border-r border-border p-4">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-all group"
              >
                <item.icon className="w-5 h-5 group-hover:text-accent" />
                <span className="font-medium">{item.label}</span>
                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>

          {/* Quick Stats */}
          <div className="mt-8 p-4 bg-primary/10 rounded-xl">
            <h3 className="text-sm font-semibold text-foreground mb-3">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Villas</span>
                  <span className="font-semibold text-foreground">435</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Project Area</span>
                  <span className="font-semibold text-foreground">30 Acres</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Project Cost</span>
                  <span className="font-semibold text-foreground">₹800-900 Cr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Timeline</span>
                  <span className="font-semibold text-foreground">2-3 Years</span>
                </div>
              </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 space-y-6">
          {/* Overview Stats */}
          <section id="overview">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-90">Total Project Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">₹800-900 Cr</div>
                  <p className="text-xs opacity-75 mt-1 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> 2-3 Years Timeline
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-90">Total Units</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">435</div>
                  <p className="text-xs opacity-75 mt-1">Premium Villas</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Project Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">30 Acres</div>
                  <p className="text-xs text-muted-foreground mt-1">Dundigal, Hyderabad</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Project Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">2-3 Years</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3 text-green-600" /> Phased Development
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* Location & Map Section */}
          <section id="location" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-accent" />
                    Location Map - Dundigal, Hyderabad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15218.79668877837!2d78.41!3d17.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fbb1c7f11c5%3A0x32a329e23ec6c3e8!2sDundigal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Project Location Map"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Satellite View
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15218.79668877837!2d78.41!3d17.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fbb1c7f11c5%3A0x32a329e23ec6c3e8!2sDundigal%2C%20Telangana!5e1!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Satellite View"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* Location Highlights */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Location Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "RGIA Airport", value: "15 km", sublabel: "20 mins drive" },
                    { label: "ORR Junction", value: "2 km", sublabel: "5 mins drive" },
                    { label: "Financial District", value: "25 km", sublabel: "35 mins drive" },
                    { label: "BHEL Township", value: "8 km", sublabel: "15 mins drive" },
                    { label: "IIT Hyderabad", value: "12 km", sublabel: "20 mins drive" },
                    { label: "Kompally", value: "10 km", sublabel: "18 mins drive" },
                    { label: "JNTU Hyderabad", value: "15 km", sublabel: "25 mins drive" },
                    { label: "Medchal", value: "6 km", sublabel: "12 mins drive" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="p-4 bg-secondary/50 rounded-lg text-center"
                    >
                      <p className="text-2xl font-bold text-primary">{item.value}</p>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.sublabel}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Area Analysis */}
          <section id="area" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Area Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={areaDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {areaDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Villa Types & Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={villaTypesData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="type" width={100} />
                      <Tooltip
                        formatter={(value: number, name: string) =>
                          name === "price" ? `₹${value} Cr` : value
                        }
                      />
                      <Legend />
                      <Bar dataKey="units" fill="#2d5a3d" name="Units Available" />
                      <Bar dataKey="price" fill="#c9a227" name="Price (Cr)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sales Projections */}
          <section id="sales">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  2-Year Sales Projections (2025-2027)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesProjectionData}>
                      <defs>
                        <linearGradient id="colorUnits" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2d5a3d" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#2d5a3d" stopOpacity={0.1} />
                        </linearGradient>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#c9a227" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#c9a227" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" tick={{ fontSize: 11 }} interval={2} />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip 
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            const milestone = quarterlyMilestones.find(m => m.month === label);
                            return (
                              <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                                <p className="font-semibold text-foreground">{label}</p>
                                {milestone && (
                                  <p className="text-accent font-medium text-sm mb-1">
                                    🎯 {milestone.achievement}
                                  </p>
                                )}
                                <p className="text-sm text-muted-foreground">
                                  Units: {payload[0]?.value}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Revenue: ₹{payload[1]?.value} Cr
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Legend />
                      {/* Quarterly milestone reference lines */}
                      {quarterlyMilestones.filter((_, i) => i % 4 === 3).map((milestone) => (
                        <ReferenceLine
                          key={milestone.month}
                          x={milestone.month}
                          yAxisId="left"
                          stroke="#c9a227"
                          strokeDasharray="5 5"
                          strokeWidth={2}
                          label={{
                            value: milestone.label,
                            position: "top",
                            fill: "#c9a227",
                            fontSize: 10,
                            fontWeight: "bold",
                          }}
                        />
                      ))}
                      <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="units"
                        stroke="#2d5a3d"
                        fillOpacity={1}
                        fill="url(#colorUnits)"
                        name="Cumulative Units Sold"
                      />
                      <Area
                        yAxisId="right"
                        type="monotone"
                        dataKey="revenue"
                        stroke="#c9a227"
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                        name="Revenue (₹ Cr)"
                      />
                      {/* Quarterly milestone dots */}
                      {quarterlyMilestones.map((milestone, index) => (
                        <ReferenceDot
                          key={milestone.month}
                          x={milestone.month}
                          y={milestone.target}
                          yAxisId="left"
                          r={6}
                          fill={index % 4 === 3 ? "#c9a227" : "#2d5a3d"}
                          stroke="#fff"
                          strokeWidth={2}
                        />
                      ))}
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                {/* Milestone Legend */}
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                  {quarterlyMilestones.filter((_, i) => i % 4 === 3).map((milestone) => (
                    <div key={milestone.label} className="flex items-center gap-2 text-xs bg-muted/50 rounded-lg p-2">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <div>
                        <span className="font-semibold">{milestone.label}:</span>{" "}
                        <span className="text-muted-foreground">{milestone.achievement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Phase-wise Sales Breakdown */}
          <section id="phases">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  Phase-wise Villa Distribution & Sales Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Phase Overview Chart */}
                <div className="h-64 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={phaseSalesChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip 
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            const phase = phaseSalesData.find(p => p.phase === label);
                            return (
                              <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                                <p className="font-semibold text-foreground">{label}</p>
                                <p className="text-xs text-muted-foreground mb-2">{phase?.timeline}</p>
                                <p className="text-sm">Villas: <span className="font-semibold">{payload[0]?.value}</span></p>
                                <p className="text-sm">Revenue: <span className="font-semibold">₹{payload[1]?.value} Cr</span></p>
                                <p className="text-sm">Land: <span className="font-semibold">{phase?.acres} Acres</span></p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Legend />
                      <Bar yAxisId="left" dataKey="villas" name="Total Villas" fill="#2d5a3d" radius={[4, 4, 0, 0]} />
                      <Bar yAxisId="right" dataKey="revenue" name="Revenue (₹ Cr)" fill="#c9a227" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Phase Details Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {phaseSalesData.map((phase) => (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow"
                      style={{ borderLeftColor: phase.color, borderLeftWidth: 4 }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-lg">{phase.phase}</h4>
                        <span 
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ 
                            backgroundColor: phase.status === "Launching" ? "#2d5a3d20" : "#c9a22720",
                            color: phase.status === "Launching" ? "#2d5a3d" : "#c9a227"
                          }}
                        >
                          {phase.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{phase.timeline}</p>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Total Villas</span>
                          <span className="font-semibold">{phase.totalVillas}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Land Area</span>
                          <span className="font-semibold">{phase.acres} Acres</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Est. Revenue</span>
                          <span className="font-semibold text-accent">₹{phase.revenue} Cr</span>
                        </div>
                      </div>

                      {/* Villa Type Breakdown */}
                      <div className="border-t border-border pt-3">
                        <p className="text-xs font-semibold mb-2">Villa Distribution</p>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">3 BHK:</span>
                            <span>{phase.types["3BHK"]}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">4 BHK:</span>
                            <span>{phase.types["4BHK"]}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">5 BHK:</span>
                            <span>{phase.types["5BHK"]}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Premium:</span>
                            <span>{phase.types["Premium"]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Completion</span>
                          <span>{phase.status === "Launching" ? "10%" : phase.status === "Planning" ? "5%" : "0%"}</span>
                        </div>
                        <Progress 
                          value={phase.status === "Launching" ? 10 : phase.status === "Planning" ? 5 : 0} 
                          className="h-1.5"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Summary Stats */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">435</p>
                    <p className="text-xs text-muted-foreground">Total Villas</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">₹900 Cr</p>
                    <p className="text-xs text-muted-foreground">Total Revenue</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">30</p>
                    <p className="text-xs text-muted-foreground">Total Acres</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">4</p>
                    <p className="text-xs text-muted-foreground">Total Phases</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Hyderabad Growth */}
          <section id="growth">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  Hyderabad Market Growth Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={hyderabadGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="population"
                        stroke="#2d5a3d"
                        strokeWidth={2}
                        name="Population (Million)"
                        dot={{ fill: "#2d5a3d" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="gdp"
                        stroke="#c9a227"
                        strokeWidth={2}
                        name="GDP Index"
                        dot={{ fill: "#c9a227" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="realEstate"
                        stroke="#4a8c5e"
                        strokeWidth={2}
                        name="Real Estate Index"
                        dot={{ fill: "#4a8c5e" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Connectivity */}
          <section id="connectivity">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-accent" />
                  Connectivity & Proximity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {proximityData.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="relative p-6 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.name}</p>
                          <p className="text-2xl font-bold text-foreground">{item.distance} km</p>
                        </div>
                      </div>
                      <Progress value={100 - item.distance * 5} className="mt-4" />
                    </motion.div>
                  ))}
                </div>

                {/* Connectivity Details */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Road Connectivity</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• NH-44 (2 km)</li>
                      <li>• Outer Ring Road (2 km)</li>
                      <li>• Regional Ring Road (Proposed - 5 km)</li>
                      <li>• Medchal-Malkajgiri Corridor</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Public Transport</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Metro (Proposed Extension)</li>
                      <li>• MMTS Station (8 km)</li>
                      <li>• TSRTC Bus Depot (3 km)</li>
                      <li>• Cab Services Available</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Future Infrastructure</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Pharma City (15 km)</li>
                      <li>• Aerospace Park (10 km)</li>
                      <li>• New IT SEZ (Proposed)</li>
                      <li>• Metro Line Extension</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Demographics */}
          <section id="demographics" className="pb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Target Demographics & Market Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <p className="text-4xl font-bold text-primary">65%</p>
                    <p className="text-sm text-muted-foreground mt-2">IT Professionals</p>
                  </div>
                  <div className="text-center p-6 bg-accent/10 rounded-xl">
                    <p className="text-4xl font-bold text-accent">20%</p>
                    <p className="text-sm text-muted-foreground mt-2">NRI Investors</p>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <p className="text-4xl font-bold text-foreground">10%</p>
                    <p className="text-sm text-muted-foreground mt-2">Business Owners</p>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-xl">
                    <p className="text-4xl font-bold text-foreground">5%</p>
                    <p className="text-sm text-muted-foreground mt-2">Government Officials</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-4">Key Investment Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "15% Annual Appreciation Expected",
                      "100% Loan Eligibility",
                      "RERA Approved Project",
                      "Clear Legal Titles",
                      "Gated Community",
                      "Premium Amenities",
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;