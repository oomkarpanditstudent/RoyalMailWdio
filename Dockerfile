FROM node
WORKDIR /usr/src
RUN git clone https://github.com/oomkarpanditstudent/RoyalMailWdio.git
WORKDIR /usr/src/RoyalMailWdio
COPY . .
RUN npm install