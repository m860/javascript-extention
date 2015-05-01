/*
* @item:Array的元素
* @index:当前索引值
* @list:当前Array的引用
* [].each(function(item,index,list){
*
* });
*
* */
if (!Array.prototype.each) {
    Array.prototype.each = function (callback) {
        var i = 0, len = this.length;
        for (; i < len; i++) {
            callback(this[i], i, this);
        }
    };
}
