module.exports = {
    sum: function(n1, n2) {
        return n1 + n2; 
    }, 
    sub: (n1, n2) => {
        return n1 - n2; 
    }, 
    mult: (n1, n2) => {
        return n1 * n2; 
    }, 
    div: (n1, n2) => {
        return n1 / n2; 
    }, 
    calc: function(n1, n2) {
        return this.sum(n1,n2); 
    }
}; 