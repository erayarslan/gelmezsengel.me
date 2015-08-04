![Logo](http://s22.postimg.org/8g4c7b8j5/lele.jpg)

# gelmezsengel.me
dont call me back!

# example
```
http://gelmezsengel.me/eray     --- output : iPNE ERAY ✔
http://gelmezsengel.me          --- output : iPNE BURAK ✔
http://gelmezsengel.me/amk/kızı --- output : AMK KIZI ✔
```

# seo
[archive.is](https://archive.is/c0uAa)

# nginx
```nginx
# seo server      : 127.0.0.1:10300
# gelmezsengel.me : 127.0.0.1:4141

server {
  listen *:80;
  server_name gelmezsengel.me www.gelmezsengel.me burak.gelmezsengel.me www.burak.gelmezsengel.me;

  access_log /var/log/nginx/gelmezsengelme.access.log;
  error_log /var/log/nginx/gelmezsengelme.error.log;

  root /srv/gelmezsengel.me;
  index index.html index.htm index.php;

  location  / {
    proxy_pass http://127.0.0.1:4141;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    if ($http_user_agent ~* bot)  {
      proxy_pass http://127.0.0.1:10300;
    }

    if ($http_user_agent ~* facebookexternalhit) {
      proxy_pass http://127.0.0.1:10300;
    }
  }
}
```

# dependencies
[moviepilot-seoserver](https://github.com/moviepilot/seoserver)

## contributing
1. fork it!
2. create your feature branch: `git checkout -b my-new-feature`
3. commit your changes: `git commit -m 'Add some feature'`
4. push to the branch: `git push origin my-new-feature`
5. submit a pull request :D

## license
mit.
