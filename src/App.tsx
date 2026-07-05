import waterIcon from './assets/water-icon.png'
import './App.css'

function App() {
  const apps = [
    {
      name: 'WaterQuality',
      description: 'Aplicativo para monitoramento e análise da qualidade da água.',
      filename: 'WaterQuality.apk',
      icon: waterIcon,
    },
  ]

  return (
    <div className="container">
      <header className="header">
        <h1>Aplicativos do Projeto Pibiti</h1>
        <p className="intro">
          Aplicativos desenvolvidos por meio de bolsas de pesquisa, voltados
          para contextos agrícolas e gestão de recursos ambientais.
        </p>
      </header>

      <section className="apps-grid">
        {apps.map((app) => (
          <div key={app.filename} className="app-card">
            <img src={app.icon} alt={app.name} className="app-icon" />
            <h2 className="app-name">{app.name}</h2>
            <p className="app-desc">{app.description}</p>
            <a href="https://github.com/ZirlangioFilho/pibiti-web/releases/download/v1.0.0/WaterQuality.apk" className="download-btn" download>
              Download APK
            </a>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>Repositório de Aplicativos &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
