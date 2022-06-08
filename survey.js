const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
              console.log(`---------${name}'s Profile Generated---------------`);
              console.log(`${name} enjoys listening to ${music} while ${activity}.`);
              console.log(`${name} loves eating ${food} for ${meal}.`);
              console.log(`${name} loves ${sport} and will take any opportunity to watch or play it.`);
              console.log(`Don't tell anyone, but ${name}'s superpower is ${power}, so watch out!`);
            rl.close();
            });
          });
        });
      });
    });
  });
});



