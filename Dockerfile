FROM node:0.10

ENV PLUGIN_HOME /home/plugin

RUN npm install mocha -g
RUN npm install istanbul -g

RUN mkdir $PLUGIN_HOME
WORKDIR $PLUGIN_HOME

ADD ./package.json $PLUGIN_HOME/package.json

RUN npm install
RUN mv node_modules ../

ADD . $PLUGIN_HOME

# Port 3000 for server
EXPOSE 3000
EXPOSE 5858