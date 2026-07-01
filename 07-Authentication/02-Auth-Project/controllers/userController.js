const getProfile = (req, res) => {

    return res.status(200).json({
        message: "Welcome to your profile!"
    });

};

module.exports = {
    getProfile
};