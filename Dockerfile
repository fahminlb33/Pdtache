FROM telkomindonesia/alpine:nodejs-10-puppeteer

WORKDIR /usr/src/app
COPY package.json* /usr/src/app/

RUN npm install \
    && mkdir -p /.pki/nssdb \
    && chown -R root:root /.pki/nssdb \
    && chmod -R 775 /.pki/nssdb

COPY . .
EXPOSE 5000
ENTRYPOINT ["npm", "start"]
