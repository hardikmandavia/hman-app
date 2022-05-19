FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 9000
CMD npm run production

# docker build -t hardikmandavia/hman-app-ui .
# docker push hardikmandavia/hman-app-ui
# docker run --rm -d -p 9000:9000 hardikmandavia/hman-app-api
# kubectl create deployment --image hardikmandavia/hma-app-api node-app
# kubectl expose deployment node-app --type NodePort --port 3000  

# kubectl get node -o wide //// check nodes