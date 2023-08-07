    const fibonacci = function(n) {
        if (n<0)
        return "OOPS";

        if(n === 0)
        return 0;

        if(n===1 || n===2)
        return 1;

        let prev = 1;
        let cur = 1;

        for (i=3;i<=n;i++){
        const next = prev + cur;
        prev = cur;
        cur = next;
        }
        return cur;

    };

    // Do not edit below this line
    module.exports = fibonacci;
