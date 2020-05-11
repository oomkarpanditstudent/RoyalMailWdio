FROM node
WORKDIR /usr/src
RUN git clone https://github.com/oomkarpanditstudent/RoyalMailWdio.git
WORKDIR /usr/src/RoyalMailWdio
RUN rm -rf node_modules
RUN npm install