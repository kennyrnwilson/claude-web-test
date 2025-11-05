# Two-Layer Web Application

A simple two-layer application with a React frontend and Node.js/Express backend API, designed to run in Docker and GitHub Codespaces.

## Architecture

```
┌─────────────────┐         ┌──────────────────┐
│  React Frontend │ ───────>│  Express Backend │
│   (Port 5173)   │  API    │   (Port 3000)    │
└─────────────────┘         └──────────────────┘
```

## Features

- **Backend API**: Simple Express.js REST API with multiple endpoints
- **Frontend**: React app with Vite that calls the backend API
- **Docker**: Fully containerized with Docker Compose
- **Codespaces**: Pre-configured for GitHub Codespaces

## Running in GitHub Codespaces (Recommended)

This is the easiest way to run and test the app entirely from your browser!

### Step 1: Create a Codespace

1. Go to your GitHub repository
2. Click the **Code** button (green button)
3. Click **Codespaces** tab
4. Click **Create codespace on [branch-name]**

### Step 2: Start the Application

Once your Codespace is ready, open the terminal and run:

```bash
docker compose up --build
```

**Note:** If you have an older Docker version, you may need to use `docker-compose` (with hyphen) instead.

### Step 3: Access the Application

Codespaces will automatically forward the ports:

- **Frontend**: Port 5173 will auto-open in your browser
  - If not, click on the "Ports" tab and click the globe icon next to port 5173

- **Backend API**: Port 3000 is also forwarded
  - Test it directly: Click the globe icon next to port 3000 and add `/api/health`

### Step 4: Test the App

The frontend will load with three sections:
1. **Backend Health Check** - Shows the API is running
2. **Hello Endpoint** - Simple API call test
3. **Data Endpoint** - Fetches sample data from the API

Click the buttons to make API calls and see the results!

## Running Locally with Docker

### Prerequisites

- Docker Desktop installed
- Docker Compose installed

### Steps

1. Clone the repository:
```bash
git clone <your-repo-url>
cd claude-web-test
```

2. Start both services:
```bash
docker compose up --build
```

3. Access the application:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000/api/health

4. Stop the application:
```bash
docker compose down
```

## API Endpoints

The backend provides these endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api/hello` - Simple hello message
- `GET /api/data` - Returns sample data
- `POST /api/echo` - Echoes back the request body

## Project Structure

```
.
├── backend/
│   ├── server.js         # Express API server
│   ├── package.json      # Backend dependencies
│   └── Dockerfile        # Backend container config
├── frontend/
│   ├── src/
│   │   ├── App.jsx       # Main React component
│   │   ├── main.jsx      # React entry point
│   │   └── index.css     # Styles
│   ├── index.html        # HTML template
│   ├── vite.config.js    # Vite configuration
│   ├── package.json      # Frontend dependencies
│   └── Dockerfile        # Frontend container config
├── .devcontainer/
│   └── devcontainer.json # Codespaces configuration
├── docker-compose.yml    # Docker Compose config
└── README.md            # This file
```

## Development

### Backend Development

The backend is in the `backend/` directory:

```bash
cd backend
npm install
npm start
```

### Frontend Development

The frontend is in the `frontend/` directory:

```bash
cd frontend
npm install
npm run dev
```

## Technologies Used

- **Frontend**: React 18, Vite 5
- **Backend**: Node.js, Express 4
- **Containerization**: Docker, Docker Compose
- **Cloud IDE**: GitHub Codespaces

## Troubleshooting

### Ports not forwarding in Codespaces?

- Check the "Ports" tab in VS Code
- Manually forward ports 3000 and 5173 if needed
- Make sure docker compose is running

### Cannot connect to backend from frontend?

- Ensure both containers are running: `docker compose ps`
- Check backend logs: `docker compose logs backend`
- Verify the backend is listening on 0.0.0.0, not localhost

### Frontend not loading?

- Check frontend logs: `docker compose logs frontend`
- Make sure port 5173 is accessible
- Try rebuilding: `docker compose up --build`

## Next Steps

Ideas to extend this app:

1. Add a database (PostgreSQL, MongoDB)
2. Add authentication (JWT, OAuth)
3. Add more API endpoints
4. Add automated tests
5. Set up CI/CD with GitHub Actions
6. Deploy to a cloud platform (AWS, Azure, Vercel)

## License

MIT
