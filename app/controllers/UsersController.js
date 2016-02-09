module.exports = function () {

    return {
        index: function (request, response) {
            return response.render('users/index', { title: 'Web sockets' });
        }
    };
};