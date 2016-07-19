## National Geographic Photo of the Day
Unofficial National Geographic Photo of the Day API.

Check out the [photo of the day on National Geographic's website](http://photography.nationalgeographic.com/photography/photo-of-the-day/).

# Usage
You can run the API on your own server or use the web version (slower, because it's hosted on the Heroku free tier. This is the URL for the web version:  [https://natgeoapi.herokuapp.com/api/dailyphoto](https://natgeoapi.herokuapp.com/api/dailyphoto).

```npm install --save nat-geo-api```

Require and initialize (example):

```
var photo = require("nat-geo-api");

photo.run({
  port: 8000
});
```

# Documentation
To run the API, call the ```run``` method, which accepts a single options object.

### Options (object)
- ```port``` (optional) - (integer) port for the API to run on
- ```cors``` (optional) - (boolean) wether or not to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)


### Photo of the Day API:
- Type: GET
- Params: none
- URL: /api/dailyphoto
- Example Response:

```
{
  "src":  "//images.nationalgeographic.com/wpf/media-live/photos/000/888/cache/polar-bear-prey-kaktovik_88865_990x742.jpg",
  "alt":  "Picture of a polar bear and cub with prey in Kaktovik, Alaska",
  "description": "It was still weeks before the sea freezes. The polar bears were hungry and unable to go out to sea to hunt for seals. The whale bone pile had nothing edible left. During this time of the year, polar bears survive on seagulls."
  "credit":  "Photograph by <a href=\"http://yourshot.nationalgeographic.com/profile/804116/\">Yoh Fong Chan</a>, National Geographic Your Shot"
}
```

### License
MIT. Copyright (c) [Sterling Whitley](http://sterlingw.com)
