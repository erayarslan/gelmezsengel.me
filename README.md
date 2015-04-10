![Logo](http://s22.postimg.org/8g4c7b8j5/lele.jpg)

# gelmezsengel.me

dont call me back!

# about

with new tech!

# example

```
http://gelmezsengel.me/eray     --- output : iPNE ERAY ✔
http://gelmezsengel.me          --- output : iPNE BURAK ✔
http://gelmezsengel.me/amk/kızı --- output : AMK KIZI ✔
```

# nginx conf (single-page seo)

```nginx
# seo server      : 127.0.0.1:10300
# gelmezsengel.me : 127.0.0.1:4141

location  / {

    proxy_pass http://127.0.0.1:4141;

    if ($http_user_agent ~* bot)  {
        proxy_pass http://127.0.0.1:10300;
    }

    if ($http_user_agent ~* facebookexternalhit) {
        proxy_pass http://127.0.0.1:10300;
    }

}
```

## contributing

1. fork it!
2. create your feature branch: `git checkout -b my-new-feature`
3. commit your changes: `git commit -m 'Add some feature'`
4. push to the branch: `git push origin my-new-feature`
5. submit a pull request :D

## license

mit.