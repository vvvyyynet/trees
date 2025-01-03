# DOCKERFILE FROM STANISLAV
# ---------------------------------------
# -> https://www.youtube.com/watch?v=NLjolI9FwCU
# FROM node:20.2-alpine AS sk-build
# WORKDIR /usr/src/app
# ARG TZ=Europe/Stockholm
# ARG PUBLIC_HELLO
# COPY . /usr/src/app
# RUN apk --no-cache add curl tzdata
# RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# RUN npm install
# RUN npm run build
# FROM node:20.2-alpine
# WORKDIR /usr/src/app
# ARG TZ=Europe/Stockholm
# RUN apk --no-cache add curl tzdata
# RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
# COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json
# RUN npm i --only=production
# COPY --from=sk-build /usr/src/app/build /usr/src/app/build
# EXPOSE 3000
# CMD ["node", "build/index.js"]



# # PUSH PRE-BUILT APP
# # ---------------------------------------
  FROM node:20.10-alpine AS sk-build
  WORKDIR /usr/src/app
  
  # Copy app files to the container
  COPY . /usr/src/app
  COPY build ./build
  COPY ./static ./static
  
  # Install any required system packages (optional)
  RUN apk --no-cache add curl tzdata
  
  # Install dependencies
  RUN npm install
  
  # Expose the application port
  EXPOSE 3000
  
  # Start the application
  CMD ["node", "build/index.js"]
  