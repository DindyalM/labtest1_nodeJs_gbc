const os = require("os")
module.exports =  {
    getSystemInfo: function() {
        return "info:" + os.arch() + os.hostname() + os.platform()
    },

    getUserInfo: function() {
        return "info:" +os.userInfo()
    }

}
   
