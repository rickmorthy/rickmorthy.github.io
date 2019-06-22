
var cookies = (function(window){
    window.set = function(name,value,expire,path,domain){
        try{
            if(!name){return false;};
                !expire ? time = 30 : time = expire;
                var now = new Date(new Date().setDate(new Date().getDate() + time));
                    document.cookie = [
                        escape(name) + '=' + value,
                        ' expires='+now,
                        path ? "path=" + path : "",
                        domain ? "domain=" + domain : ""
                    ].join(';');
                        return true;
                }
        catch(error){
            console.log(error);
            return false;
        }
    };

        window.get = function(name){
            try{
                var str = this.getArray();
                var chunk;
                for(i=0;i<str.length;i++){
                    chunk = str[i].split('=');
                    if(chunk[0].replace(' ','') === name){
                        // console.log(chunk[1]);
                        return chunk[1];
                    }else{
                        console.log('No matches');
                    }
                }
            }
            catch(error){
                console.log(error);
            }
        };
        window.remove = function(name){
            if(document.cookie === 'undefined'){
            return 'Can\'t find cookie container';
            }
            try{
                name ? document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;': console.log('Something went wrong');
            }
            catch(err){
                console.log(err);
            }
        };


        window.getArray = function(name){
             return document.cookie ? document.cookie.split(';') : [];
        };
        window.removeAll = function(){
            var cookie = this.getArray(),
                i = 0;
            for(;i<cookie.length;i++){
                chunk = cookie[i].split('=');
                document.cookie = chunk[0] +'='+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
        };
        return window;
}(window));
