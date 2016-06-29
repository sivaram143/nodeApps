log4js = require("log4js");
log4js.configure(__dirname + "/logging.json");
logger = log4js.getLogger();

logger.error("This send you an email!");
logger.info("But won't.");
