server {
  listen 80;
  listen [::]:80;
  server_name portfolio.iamsirius.cl;
  return 301 https://portfolio.iamsirius.cl$request_uri;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name portfolio.iamsirius.cl;

  ssl_certificate     /home/sirius/portfolio/ssl/yeipi.pem;
  ssl_certificate_key /home/sirius/portfolio/ssl/yeipi.key;
  ssl_protocols       TLSv1.2 TLSv1.3;
  ssl_ciphers         ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305;
  ssl_prefer_server_ciphers off;
  ssl_session_cache   shared:SSL:10m;
  ssl_session_timeout 1d;
  ssl_session_tickets off;

  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
  add_header X-Frame-Options DENY always;
  add_header X-Content-Type-Options nosniff always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;

  access_log /var/log/nginx/portfolio.access.log;
  error_log  /var/log/nginx/portfolio.error.log;

  location = /healthz {
    proxy_pass http://127.0.0.1:9666/healthz;
  }

  location / {
    proxy_pass http://127.0.0.1:9666;
    proxy_http_version 1.1;
    proxy_set_header Host               $host;
    proxy_set_header X-Real-IP          $remote_addr;
    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto  $scheme;
    proxy_set_header CF-Connecting-IP   $http_cf_connecting_ip;
    proxy_set_header CF-RAY             $http_cf_ray;
    proxy_set_header CF-IPCountry       $http_cf_ipcountry;
  }
}
