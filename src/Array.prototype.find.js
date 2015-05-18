/*!
 * Created by Jean on 5/18/2015.
 * 
 * email:mahai_1986@126.com
 *
 */
if(!Array.prototype.find){
    Array.prototype.find=function(fn){
        var i= 0,len=this.length;
        for(;i<len;i++){
            if(fn(this[i])){
                return this[i];
            }
        }
        return null;
    };
}