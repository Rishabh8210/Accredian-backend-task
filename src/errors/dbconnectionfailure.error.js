const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class DbConnectionFailure extends BaseError {
	constructor() {
		super(
			"DB_Connection_Failure",
			StatusCodes.BAD_GATEWAY,
			`With given db configuration, server could not able to connect to the database.`,
			{
				"Database":"Connection failure"
			}
		);
	}
}

module.exports = DbConnectionFailure;
