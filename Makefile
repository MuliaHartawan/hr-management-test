run-app:
	cd backend/account && cp .env.example .env
	cd backend/api-gateway && cp .env.example .env
	cd backend/attendance && cp .env.example .env
	cd backend/employee && cp .env.example .env
	cd frontend && cp .env.example .env
