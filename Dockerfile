# syntax=docker/dockerfile:1.6

# ──────────────────────────────────────────────
# Base con dependencias
# ──────────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ──────────────────────────────────────────────
# Stage de desarrollo (Vite + hot reload)
# ──────────────────────────────────────────────
FROM node:20-alpine AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 9666
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "9666"]

# ──────────────────────────────────────────────
# Stage de build de produccion
# ──────────────────────────────────────────────
FROM node:20-alpine AS build
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ──────────────────────────────────────────────
# Stage de produccion (Nginx sirviendo dist/)
# ──────────────────────────────────────────────
FROM nginx:1.27-alpine AS prod
COPY docker/nginx/portfolio.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
