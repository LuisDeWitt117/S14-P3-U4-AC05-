import { useState } from 'react';
import { BarChart3, LineChart, ScatterChart, Wind } from 'lucide-react';
import './index.css';

const charts = [
  {
    id: 'polar_bar',
    title: 'Polar Bar Chart',
    description: 'Displays wind direction and frequency using a polar bar chart.',
    icon: BarChart3,
    file: '/polar_bar.html'
  },
  {
    id: 'polar_line',
    title: 'Polar Line Chart',
    description: 'Visualizes continuous wind data trends across different angles.',
    icon: LineChart,
    file: '/polar_line.html'
  },
  {
    id: 'polar_scatter',
    title: 'Polar Scatter Chart',
    description: 'Shows individual wind data points mapped on polar coordinates.',
    icon: ScatterChart,
    file: '/polar_scatter.html'
  }
];

function App() {
  const [activeChart, setActiveChart] = useState(charts[0]);

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <div className="dashboard-container">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <Wind size={28} color="#a5b4fc" />
            <h1>Wind Analytics</h1>
          </div>
          
          <ul className="nav-list">
            {charts.map((chart) => {
              const Icon = chart.icon;
              const isActive = activeChart.id === chart.id;
              
              return (
                <li 
                  key={chart.id}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveChart(chart)}
                >
                  <Icon />
                  <span>{chart.title}</span>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          <header className="content-header">
            <h2>{activeChart.title}</h2>
            <p>{activeChart.description}</p>
          </header>
          
          <div className="chart-container">
            <iframe 
              src={activeChart.file} 
              title={activeChart.title}
              className="chart-frame"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
