var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: "mascarenhas",
  // Password optional, prompted if none given
  password: "gutmas",
  host: "ateliers.nomades.ch",
  port: 21,
  localRoot: __dirname + "/dist/academicus",
  remoteRoot: "/public_html/academicus/",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*", "**/*", ".*"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**"
  ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  forcePasv: true
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
