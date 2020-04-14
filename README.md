**FreeCodeCamp**

#3 needs clarification - Were we supposed to make up a random number or use Math.random()? I made up a number and it passed.

#8 middleware. FCC issues - Didn't mention to declare mongoDB var, change title variable to 'Home Page' per advice here: https://www.freecodecamp.org/forum/t/mongoerror-cannot-do-raw-queries-on-admin-in-atlas-for-advanced-node-and-express-challenge/268294/7?u=thiggs

and here: https://github.com/freeCodeCamp/freeCodeCamp/issues/18201#issuecomment-435695091

#11 This is where I was stuck before, and it was in part because of the challenges from #8. I also needed to fix some of the references to the database and collection names to make them consistent. In addition, the notes from the hint:
Hint 1
Be sure to edit views/pug/profile.pug, line 11:

h1.border.center FCC Advanced Node and Express
into

h1.border.center Profile Home
or else the tests wouldn’t pass

Although I'm still not passing....but the page works for me?

Followed this advice, still not working
https://www.freecodecamp.org/forum/t/advanced-node-and-express-registration-of-new-users/208071/9?u=thiggs

Changed the title of index page to Home Profile per this advice, passing 1 more test but still not passing:
https://www.freecodecamp.org/forum/t/advanced-node-and-express-registration-of-new-users/208071/3?u=thiggs

Changed the profile page title to Profile Home and Home Profile....still failing under both. Changed it to Profile Page Still not working. Changed index page to Home Page, and that broke the second test again, so I think that definitely needs to be "Home Profile".

Added freeCodeCampTester to the end of the h1 lines of both profile and index pages and it passed!

Summary of changes that may have made it pass:
1. Doublecheck references to database and collection names throughout server.js Make sure they actually refer to the database on MongoDB in every instance.

2. On the index page, change the title to: Home Profile
and change the h1 to h1.border.center Home Page freeCodeCampTester

3. On the profile page, change the title to Profile Page
and change the h1 to h1.border.center Profile Home freeCodeCampTester

4. go into Mongo DB, and delete your database. Run the tests (Some say you have to run it twice, but I passed on the first go.)


DONE!