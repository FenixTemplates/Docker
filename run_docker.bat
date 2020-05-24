docker run \
-it \
--name '<$ fnx.render('container_name') $>' \
--hostname '<$ fnx.render('container_name') $>' \
<$ fnx.render('image_name') $>