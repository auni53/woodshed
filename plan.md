v1 features:
- input one drill
- specify the speed
"Jae can do major scales at 108 bpm."

v2:
- persist your drill
"Jae continues to be able to do major scales at 108 bpm."
"Jae logs in and increases speed to 104 bpm."

v3:
- add multiple drills

v4: 
- auto metronome


~~ API:

> GET /user/exercises
> POST /user { userid, exercisename, speed }

~~ Table:

Users
id username

Exercises
userid name speed
