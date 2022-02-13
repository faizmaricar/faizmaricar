const { execSync } = require('child_process');
const { TwitterApi } = require('twitter-api-v2');

const {
  TWITTER_API_KEY: appKey,
  TWITTER_API_KEY_SECRET: appSecret,
  TWITTER_ACCESS_TOKEN: accessToken,
  TWITTER_ACCESS_TOKEN_SECRET: accessSecret,
} = process.env;

const twitterClient = new TwitterApi({
  appKey,
  appSecret,
  accessToken,
  accessSecret,
});

function getLastCommitMessage() {
  const gitLastCommitMessage = 'git log -1 --pretty=%B';
  return execSync(gitLastCommitMessage).toString().trim();
}

function isPublishCommitMessage(commitMessage) {
  const commitMessageRegex =
    /Merge pull request #\d+ from faizmaricar\/cms\/blog\/.+\/index/;

  return commitMessageRegex.test(commitMessage);
}

function sendPublishTweet(lastCommitMessage) {
  const slugRegex = /(?=\/blog)(.*)(?=\/index)/;
  const [slug] = lastCommitMessage.match(slugRegex);
  const tweet = `Check out my latest blog post https://www.faizmaricar.com${slug}`;

  twitterClient.v1
    .tweet(tweet)
    .then((val) => {
      console.log(val);
      console.log('Successfully tweeted latest blog entry');
    })
    .catch((err) => {
      console.log(err);
    });

  return tweet;
}

exports.handler = function (event, context) {
  const lastCommitMessage = getLastCommitMessage();

  if (isPublishCommitMessage(lastCommitMessage)) {
    sendPublishTweet(lastCommitMessage);
  } else {
    console.log('This is not a blog publish commit');
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};
