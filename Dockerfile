# 1. Estágio de Build
FROM node:20-slim AS builder
WORKDIR /app
# Assume-se que o estágio 'deps' existe ou as dependências são instaladas aqui
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Estágio de Produção
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Segurança: Criar usuário e grupo
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nuxtjs

# CORREÇÃO: Copiar os arquivos garantindo que o dono seja o usuário 'nuxtjs'
COPY --from=builder --chown=nuxtjs:nodejs /app/.output ./.output

# Usar o usuário não-root
USER nuxtjs

EXPOSE 3000

# Comando de execução para Nuxt 3 (Nitro)
CMD ["node", ".output/server/index.mjs"]
