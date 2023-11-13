exports.authenticateUser = (req, res) => {
    // authenticated users have admin set to true in their body details - they should be redirected back to the endpoint for the response
    // Anyone not an admin is not authenticated and shouldn't be allowed access and their response should be sent from in here
};
