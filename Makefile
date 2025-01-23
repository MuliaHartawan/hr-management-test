install-app:
	cd backend/api-gateway  && cp .env.example .env
	cd backend/account  && cp .env.example .env
	cd backend/attendance  && cp .env.example .env
	cd backend/employee  && cp .env.example .env
	cd frontend  && cp .env.example .env

run-migration:
	cd backend/account && pnpm sequelize db:migrate
	cd backend/attendance && pnpm sequelize db:migrate
	cd backend/employee && pnpm sequelize db:migrate

run-seeder:
	cd backend/account && pnpm sequelize db:seed:all
	cd backend/attendance && pnpm sequelize db:seed:all
	cd backend/employee && pnpm sequelize db:seed:all

run-app-dev:
	cd backend/api-gateway && pnpm start-dev
	cd backend/account && pnpm start-dev
	cd backend/attendance && pnpm start-dev
	cd backend/employee && pnpm start-dev
	cd frontend && pnpm start-dev