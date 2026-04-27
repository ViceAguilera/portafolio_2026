# syntax=docker/dockerfile:1.7

FROM node:20-alpine AS base
RUN apk add --no-cache git
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 9666
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "9666"]

FROM deps AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS prod
RUN mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled
COPY docker/nginx/portfolio.conf /etc/nginx/sites-available/portfolio.conf
RUN rm -f /etc/nginx/conf.d/default.conf \
  && ln -sf /etc/nginx/sites-available/portfolio.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1
CMD ["nginx", "-g", "daemon off;"]
