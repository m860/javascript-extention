/**
 * Created by Jean on 4/25/2015.
 */
if(!Object.extend){
    Object.extend=function(origion,target){
        for(var p in target){
            origion[p]=target[p];
        }
    }
}