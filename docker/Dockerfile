# pull official base image
FROM node:14.18.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
EXPOSE 5173

# install app dependencies
COPY ./sales_helper/package.json /app
COPY ./sales_helper/package-lock.json /app
RUN npm i
RUN npm run build

# add app
COPY ./sales_helper/ /app

# start app
CMD ["npm", "run", "dev"]
