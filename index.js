module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "DELFRINANDO PRANATA ON COHORT 3 THIS EVENING",
        },
        null,
        2
      ),
    };
  };