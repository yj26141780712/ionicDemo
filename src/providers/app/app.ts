import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';

@Injectable()
export class AppGlobal {
    //缓存key的配置
    static cache: any = {
        slides: "_dress_slides",
        functions: "_dress_functions",
        machines: "_dress_machines"
    }
    //接口基地址
    //static domain = "http://localhost:50525/" 
    //static domain = "http://192.168.3.3:8084/ionicDemoApi/" 
    static domain = "http://192.168.3.158:8084/ionicDemoApi/";
    //接口地址
}

@Injectable()
export class AppProvider {

    constructor(public http: Http,
        public loadingCtrl: LoadingController, 
        private alertCtrl: AlertController,
        private toastCtrl: ToastController, ) { }

    // 表单校验
    formValidate(controls: any): string {
        for (let key in controls) { //遍历对象使用for in
            let ct = controls[key];
            if (ct.invalid) {
                let strError = this.errorCheckReturn(ct, key);
                return strError;
            }
        }
        return null;
    }
    /**
     * 
     * @param ct 表单控件
     * @param name 表单name
     */
    errorCheckReturn(ct: any, name): string {
        for (let key in ct.errors) {
            let error = ct.errors[key];
            switch (key) {
                case "required":
                    return `请输入${name}`;
                case "minlength":
                    return `${name}长度不能小于${error.requiredLength}`;
                case "requiredUserError":
                    return error || `请输入${name}`;
                case "reCheckError":
                    return error || `${name}规则不符`;
                default:
                    return null;
            }
        }
        return null;
    }

    /**
     * 对参数进行编码
     * @param params 
     */
    encode(params) {
        var str = '';
        if (params) {
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    var value = params[key];
                    str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
                }
            }
            str = '?' + str.substring(0, str.length - 1);
        }
        return str;
    }


    httpGet(url, params, callback, loader: boolean = false) {
        //alert(AppGlobal.domain + url + this.encode(params)); 
        let loading = this.loadingCtrl.create({});
        if (loader) {
            loading.present();
        }
        this.http.get(AppGlobal.domain + url + this.encode(params))
            .toPromise()
            .then(res => {
                var d = res.json();
                if (loader) {
                    loading.dismiss();
                }
                callback(d == null ? "[]" : d);
            })
            .catch(error => {
                if (loader) {
                    loading.dismiss();
                }
                this.handleError(error);
            });
    }

  
    httpPost(url, params, callback, loader: boolean = false) {
        let loading = this.loadingCtrl.create();
        if (loader) {
            loading.present();
        }
        this.http.post(AppGlobal.domain + url, params)
            .toPromise()
            .then(res => {
                var d = res.json();
                if (loader) {
                    loading.dismiss();
                }
                callback(d == null ? "[]" : d);
            }).catch(error => {
                if (loader) {
                    loading.dismiss();
                }
                this.handleError(error);
            });
    }

    httpPut(url:string,params:any,callback,loader:boolean){       
        this.http.put(AppGlobal.domain+url,params)
            .toPromise()
            .then(res=>{

            })
    }
    private handleError(error: Response | any) {
        let msg = '';
        if (error.status == 400) {
            msg = '请求无效(code：404)';
            console.log('请检查参数类型是否匹配');
        }
        if (error.status == 404) {
            msg = '请求资源不存在(code：404)';
            console.error(msg + '，请检查路径是否正确');
        }
        if (error.status == 500) {
            msg = '服务器发生错误(code：500)';
            console.error(msg + '，请检查路径是否正确');
        }
        console.log(error);
        if (msg != '') {
            this.toast(msg);
        }
    }

    alert(message, callback?) {
        if (callback) {
            let alert = this.alertCtrl.create({
                title: '提示',
                message: message,
                buttons: [{
                    text: "确定",
                    handler: data => {
                        callback();
                    }
                }]
            });
            alert.present();
        } else {
            let alert = this.alertCtrl.create({
                title: '提示',
                message: message,
                buttons: ["确定"]
            });
            alert.present();
        }
    }

    toast(message, callback?) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            dismissOnPageChange: true,
            position: 'top',
            cssClass:"text-center"
        });
        toast.present();
        if (callback) {
            callback();
        }
    }

    setItem(key: string, obj: any) {
        try {
            var json = JSON.stringify(obj);
            window.localStorage[key] = json;
        }
        catch (e) {
            console.error("window.localStorage error:" + e);
        }
    }
    getItem(key: string, callback) {
        try {
            var json = window.localStorage[key];
            var obj = JSON.parse(json);
            callback(obj);
        }
        catch (e) {
            console.error("window.localStorage error:" + e);
        }
    }

    
}
