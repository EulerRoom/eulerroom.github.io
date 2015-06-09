EulerRoom
===================

This is copied and hastily adapted from the dorkbotlondon.org website, hope
they don't mind.

How to add EulerRoom events
--------------------------------------------------------
This website is generted by jekyll, and automatically builds when
someone (maybe you!) pushes a new version to github.

The entries for each stream live in the _posts directory, and are named as YEAR-MONTH-DAY-STREAMNUMBER.html.

At the top of each file you find a section of metadata, the only things you need to care about are:
* `number`. Which should be the EulerRoom stream number. Look for the latest one and add a number.
* `start`. The date + time the stream starts. We need to support timezones! But don't.
* `end`. Obvious.
* `where`. A reference to where the stream comes from - this needs to match up to an entry in _data/locations.yaml.
* `tags`. This should be a list of all the people who performed at this event. If it's just you streaming that'll just be the one.
* Optionally, `title`. This is used for named events.

Below the --- line, you can put whatever you like, it'll be inside a `<pre>` tag on the website, but you can use html tags and other fancy things.

If you want to preview the website after you've added a new event or changed an old one, run `jekyll serve` (assuming you have it installed) and it'll give you a webserver address to visit.

When you're done, `git add`, `git commit` and `git push` the changes.

Adding new locations
-----------------------------------------
Look in the `_data/locations.yaml` file, it should be somewhat obvious.
