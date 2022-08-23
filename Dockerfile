FROM --platform=linux/amd64 node:16 AS builder
WORKDIR "/app"


COPY package*.json ./
COPY prisma ./prisma/

RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install

COPY . .
RUN npm rebuild bcrypt --build-from-source
RUN npx prisma generate
RUN npm run build

FROM --platform=linux/amd64 node:16 AS production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist


EXPOSE 3031
CMD [ "node", "dist/server"]