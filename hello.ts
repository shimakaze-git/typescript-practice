var Hello = (function () {
    function Hello(msg) {
        this.msg = msg;
    }
    Hello.prototype.hello = function () {
        return "Hello, " + this.msg;
    };
    return Hello;
})();
