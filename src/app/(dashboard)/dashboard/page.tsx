import React from 'react'

interface DashboardCardProps {
  title: string;
  content: string;
}
const DashboardCard: React.FC<DashboardCardProps> = ({ title, content }) => {
  return (
    <div className="dashboard-card">
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="card-actions">
        <button className="button">Más información</button>
      </div>
    </div>
  );
};
function dashboard() {
    return (
    <div className="dashboard-container">
      <DashboardCard title="Card 1" content="Contenido de la tarjeta 1" />
      <DashboardCard title="Card 2" content="Contenido de la tarjeta 2" />
      <DashboardCard title="Card 3" content="Contenido de la tarjeta 3" />
      <DashboardCard title="Card 4" content="Contenido de la tarjeta 4" />
    </div>
    )
}

export default dashboard