# Easy Cookie

This is a simple, javascript cookie wrapper to make code cleaner I guess...?

### Set Cookie
```javascript
Cookie.set('name', 'value')
```

By default the cookie never expires. If you want it to expire, set expiration in minutes. For instance, expire in 1 hour would be

```javascript
Cookie.set('name', 'value', 60)
```

You could add a path if you want, by default it's set to be "/"

```javascript
Cookie.set('name', 'value', 60*24*365, document.location)
```

So, overall set function takes 4 params, (name, value, expiry, path)

### Get Cookie
```javascript
Cookie.get('name')
```

Pretty straightforward, returns the value of the cookie if it exits, 'undefined' if it does not exists.

### Remove Cookie
```javascript
Cookie.remove('name')
```

Removes the cookie with that name if it exists, obviously.

### Exists Cookie
```javascript
Cookie.exists('name')
```

Checks if a cookie is currently set on the client by the provided name. Returns TRUE or FALSE

---
That's about it  ¯\_(ツ)_/¯

Note: Might make a TypeScript version soon or maybe update the laziness out of this one.
