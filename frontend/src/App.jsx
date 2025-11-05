import { useState, useEffect } from 'react';

function App() {
  const [health, setHealth] = useState(null);
  const [hello, setHello] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE = '/api';

  const fetchHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/health`);
      const data = await response.json();
      setHealth(data);
    } catch (err) {
      setError('Failed to fetch health status');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchHello = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/hello`);
      const data = await response.json();
      setHello(data);
    } catch (err) {
      setError('Failed to fetch hello message');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/data`);
      const data = await response.json();
      setItems(data.items);
    } catch (err) {
      setError('Failed to fetch data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>🚀 Two-Layer App Demo</h1>
        <p>React Frontend + Node.js Backend API</p>
      </header>

      <main>
        <section className="card">
          <h2>Backend Health Check</h2>
          {health ? (
            <div className="result success">
              <p><strong>Status:</strong> {health.status}</p>
              <p><strong>Message:</strong> {health.message}</p>
              <p><strong>Time:</strong> {new Date(health.timestamp).toLocaleString()}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <button onClick={fetchHealth} disabled={loading}>
            🔄 Refresh Health
          </button>
        </section>

        <section className="card">
          <h2>Hello Endpoint</h2>
          {hello && (
            <div className="result">
              <p><strong>Message:</strong> {hello.message}</p>
              <p><strong>Version:</strong> {hello.version}</p>
            </div>
          )}
          <button onClick={fetchHello} disabled={loading}>
            👋 Call Hello API
          </button>
        </section>

        <section className="card">
          <h2>Data Endpoint</h2>
          {items.length > 0 && (
            <div className="result">
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    <strong>{item.name}</strong>: {item.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={fetchData} disabled={loading}>
            📊 Fetch Data
          </button>
        </section>

        {error && (
          <div className="error">
            ⚠️ {error}
          </div>
        )}

        {loading && (
          <div className="loading">
            Loading...
          </div>
        )}
      </main>

      <footer>
        <p>Running in Docker with Codespaces 🐳☁️</p>
      </footer>
    </div>
  );
}

export default App;
