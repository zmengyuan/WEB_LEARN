# Promise的理解与使用
##  Promise是什么

1. 抽象表达
   1. Promise 是一门新的技术(ES6 规范) 
   2. Promise 是 JS 中`进行异步编程`的新解决方案 备注：旧方案是单纯使用回调函数
2. 具体表达
   1. 从语法上来说: Promise 是一个`构造函数`
   2. 从功能上来说: promise 对象用来封装一个异步操作并可以获取其成功/ 失败的结果值

##  为什么要用Promise

> 指定回调函数的方式更加灵活
1. 旧的: 必须在启动异步任务前指定 
2. promise: 启动异步任务 => 返回promie对象 => 给promise对象绑定回调函 数(甚至可以在异步任务结束后指定/多个)
> 支持链式调用, 可以解决回调地狱问题
1. 什么是回调地狱
回调函数嵌套调用, 外部回调函数异步执行的结果是嵌套的回调执行的条件，一个回调函数中又嵌套着另外的异步任务
![](img\回调地狱.png)
2. 回调地狱的缺点?
不便于阅读 不便于异常处理
## Promise的实践
其实就是把异步任务放到new Promise中

**中奖**
```
//生成随机数
function rand(m,n){
    return Math.ceil(Math.random() * (n-m+1)) + m-1;
}
/**
  点击按钮,  1s 后显示是否中奖(30%概率中奖)
      若中奖弹出    恭喜恭喜, 奖品为 10万 RMB 劳斯莱斯优惠券
      若未中奖弹出  再接再厉
*/
//获取元素对象
const btn = document.querySelector('#btn');
//绑定单击事件
btn.addEventListener('click', function(){
    //定时器
    // setTimeout(() => {
    //     //30%  1-100  1 2 30
    //     //获取从1 - 100的一个随机数
    //     let n = rand(1, 100);
    //     //判断
    //     if(n <= 30){
    //         alert('恭喜恭喜, 奖品为 10万 RMB 劳斯莱斯优惠券');
    //     }else{
    //         alert('再接再厉');
    //     }
    // }, 1000);

    //Promise 形式实现 ，实例化需要接收一个参数，这个参数是函数类型的值
    // resolve 解决  函数类型的数据
    // reject  拒绝  函数类型的数据
    const p = new Promise((resolve, reject) => {
      //把异步任务包裹进来
        setTimeout(() => {
            //30%  1-100  1 2 30
            //获取从1 - 100的一个随机数
            let n = rand(1, 100);
            //判断 resolve和reject可以不传参，也可以传参，传递的参数就是后续then处理时候的实参
            if(n <= 30){
                resolve(n); // 将 promise 对象的状态设置为 『成功』
            }else{
                reject(n); // 将 promise 对象的状态设置为 『失败』
            }
        }, 1000);
    });

  //处理成功和失败
    console.log(p);
    //调用 then 方法 p.then(()=>{}, ()=>{})
    // value 值
    // reason 理由
    p.then((value) => {
        alert('恭喜恭喜, 奖品为 10万 RMB 劳斯莱斯优惠券, 您的中奖数字为 ' + value);
    }, (reason) => {
        alert('再接再厉, 您的号码为 ' + reason);
    });

});
```

**2-Promise实践练习-fs模块.js**
```
//
const fs = require('fs');

//回调函数 形式
// fs.readFile('./resource/content.txt', (err, data) => {
//     // 如果出错 则抛出错误
//     if(err)  throw err;
//     //输出文件内容
//     console.log(data.toString());
// });

//Promise 形式
let p = new Promise((resolve , reject) => {
    fs.readFile('./resource/content.tx', (err, data) => {
        //如果出错
        if(err) reject(err);
        //如果成功
        resolve(data);
    });
});

//调用 then 
p.then(value=>{
    console.log(value.toString());
}, reason=>{
    console.log(reason);
});

```

**3-Promise实践练习-AJAX请求.html**
```
//接口地址 https://api.apiopen.top/getJoke
//获取元素对象
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    //创建 Promise
    const p = new Promise((resolve, reject) => {
        //1.创建对象
        const xhr = new XMLHttpRequest();
        //2. 初始化
        xhr.open('GET', 'https://api.apiopen.top/getJoke');
        //3. 发送
        xhr.send();
        //4. 处理响应结果
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                //判断响应状态码 2xx   
                if(xhr.status >= 200 && xhr.status < 300){
                    //控制台输出响应体
                    resolve(xhr.response);
                }else{
                    //控制台输出响应状态码
                    reject(xhr.status);
                }
            }
        }
    });
    //调用then方法
    p.then(value=>{
        console.log(value);
    }, reason=>{
        console.warn(reason);
    });
});
```

**4-Promise封装练习-fs模块.js**
```
/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数:  path  文件路径
 * 返回:  promise 对象
 */
function mineReadFile(path){
    return new Promise((resolve, reject) => {
        //读取文件
        require('fs').readFile(path, (err, data) =>{
            //判断
            if(err) reject(err);
            //成功
            resolve(data);
        });
    });
}

mineReadFile('./resource/content.txt')
.then(value=>{
    //输出文件内容
    console.log(value.toString());
}, reason=>{
    console.log(reason);
});

```
 
**node.js内置了一个方法 uitl模块的promisify方法**
```
/**
 * util.promisify 方法
 */
//引入 util 模块
const util = require('util');
//引入 fs 模块
const fs = require('fs');
//返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./resource/content.txt').then(value=>{
    console.log(value.toString());
});
```

**封装 ajax**
```
/**
  * 封装一个函数 sendAJAX 发送 GET AJAX 请求
  * 参数   URL
  * 返回结果 Promise 对象
  */
function sendAJAX(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("GET", url);
        xhr.send();
        //处理结果
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                //判断成功
                if(xhr.status >= 200 && xhr.status < 300){
                    //成功的结果
                    resolve(xhr.response);
                }else{
                    reject(xhr.status);
                }
            }
        }
    });
}

sendAJAX('https://api.apiopen.top/getJok')
.then(value => {
    console.log(value);
}, reason => {
    console.warn(reason);
});
```

## Promise的状态
是Promise实例对象的一个属性`[[PromiseState]]`
- pending 未决定的
- resolved / fullfilled 成功
- rejected 失败
  
**promise 的状态改变**
- pending 变为 resolved
- pending 变为 rejected
  
promise 的状态改变只有这 2 种, 且一个 promise 对象只能改变一次 无论变为成功还是失败, 都会有一个结果数据 成功的结果数据一般称为 value, 失败的结果数据一般称为 reason

## Promise对象的值
是Promise实例对象的一个属性`[[PromiseResult]]`，是异步任务执行成功/失败之后返回的结果。
如何修改这个值
- resolve
- reject

## Promise工作流程
![](img\Promise系统学习_promise工作流程.png)

## Promise使用

### Ⅰ- Promise 构造函数: Promise (excutor) {}
- executor 函数: 执行器 (resolve, reject) => {}
- resolve 函数: 内部定义成功时我们调用的函数 value => {}
- reject 函数: 内部定义失败时我们调用的函数 reason => {}
- executor 会在 Promise 内部立即同步调用,异步操作在执行器中执行,换话说Promise支持同步也支持异步操作

### Ⅱ-Promise.prototype.then 方法: (onResolved, onRejected) => {}
- onResolved 函数: 成功的回调函数 (value) => {}
- onRejected 函数: 失败的回调函数 (reason) => {}
- 指定用于得到成功 value 的成功回调和用于得到失败 reason 的失败回调 返回一个新的 promise 对象

### Ⅲ-Promise.prototype.catch 方法: (onRejected) => {}
-  onRejected 函数: 失败的回调函数 (reason) => {}
-  说明: then()的语法糖, 相当于: then(undefined, onRejected)
-  异常穿透使用:当运行到最后,没被处理的所有异常错误都会进入这个方法的回调函数中

### Ⅳ-Promise.resolve 方法: (value) => {}
- value: 成功的数据或 promise 对象
- 说明: 返回一个成功/失败的 promise 对象,直接改变promise状态
  ```
   let p3 = Promise.resolve(new Promise((resolve, reject) => {  reject('OK'); })); //返回一个失败的proimse,浏览器会报错，因为如果返回失败的promise,必须要处理，所以可以用catch     
  console.log(p3);
  ```
- 如果传入的参数 为非promise类型的对象，则返回的结果为成功promise
- 如果传入的参数 为promise对象，则参数的结果决定了resolve的结果
  
### Ⅴ-Promise.reject 方法: (reason) => {}
- reason: 失败的原因
- 说明: 返回一个失败的 promise 对象,直接改变promise状态,代码示例同上
- 返回的Promise的`[[PromiseState]]`是rejected，`[[PromiseResult]]`是传入的Promise
  ```
  let p3 = Promise.reject(new Promise((resolve, reject) => {  resolve('OK'); }));      
  console.log(p3);
  ```

### Ⅵ-Promise.all 方法: (promises) => {}
- promises: 包含 n 个 promise 的数组
- 说明: 返回一个新的 promise, 只有所有的 promise 都成功才成功, 只要有一个失败了就直接失败
  ```
  let p1 = new Promise((resolve, reject) => { resolve('成功');  })
  let p2 = Promise.reject('Error');
  let p3 = Promise.resolve('也是成功')
  const result = Promise.all([p1, p2, p3]);
  console.log(result);
  ```
  ![](img\微信截图_20230103142314.png)
  ![](img\微信截图_20230103142409.png)

### Ⅶ-Promise.race 方法: (promises) => {}
- promises: 包含 n 个 promise 的数组
- 说明: 返回一个新的 promise, 第一个完成的 promise 的结果状态就是最终的结果状态,
- 如p1延时,开启了异步,内部正常是同步进行,所以p2>p3>p1,结果是P2
  ```
   let p1 = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('OK');
     }, 1000);
   })
   let p2 = Promise.resolve('Success');
   let p3 = Promise.resolve('Oh Yeah');
   //调用
   const result = Promise.race([p1, p2, p3]);
   console.log(result);
  ```

## Promise的几个关键问题
### 如何改变 promise 的状态?
- resolve(value): 如果当前是 pending 就会变为 resolved
- reject(reason): 如果当前是 pending 就会变为 rejected
- 抛出异常: 如果当前是 pending 就会变为 rejected
### 一个 promise 指定多个成功/失败回调函数, 都会调用吗?
当 promise 改变为对应状态时都会调用,改变状态后,多个回调函数都会调用,并不会自动停止
```
let p = new Promise((resolve, reject) => {  resolve('OK');});
  ///指定回调 - 1
  p.then(value => {  console.log(value); });
  //指定回调 - 2
  p.then(value => { alert(value);});
```
### 改变promise状态（resolve和reject）和指定回调函数（then或者catch）谁先谁后?
- (1) 都有可能, 正常情况下是先指定回调再改变状态, 但也可以先改状态再指定回调
  - 先指定回调再改变状态(异步):先指定回调--> 再改变状态 -->改变状态后才进入异步队列执行回调函数
  - 先改状态再指定回调(同步):改变状态 -->指定回调 并马上执行回调
- (2) 如何先改状态再指定回调? -->注意:指定并不是执行
  - 在执行器中直接调用 resolve()/reject() -->即,不使用定时器等方法,执行器内直接同步操作
  - 延迟更长时间才调用 then() -->即,在.then()这个方法外再包一层例如延时器这种方法
- (3) 什么时候才能得到数据?
  - 如果先指定的回调, 那当状态发生改变时, 回调函数就会调用, 得到数据
  - 如果先改变的状态, 那当指定回调时, 回调函数就会调用, 得到数据
```
let p = new Promise((resolve, reject) => {
//异步写法,这样写会先指定回调,再改变状态
setTimeout(() => {resolve('OK'); }, 1000);
//这是同步写法,这样写会先改变状态,再指定回调
resolve('OK'); 
});
p.then(value => {console.log(value);}, reason => {})
```
### promise.then()返回的新 promise 的结果状态由什么决定?
- 简单表达: 由 then()指定的回调函数执行的结果决定
- 详细表达:
  - 如果抛出异常, 新 promise 变为 rejected, reason 为抛出的异常
  - 如果返回的是非 promise 的任意值, 新 promise 变为 resolved, value 为返回的值
  - 如果返回的是另一个新 promise, 此 promise 的结果就会成为新 promise 的结果

```
let p = new Promise((resolve, reject) => {
resolve('ok');
});
//执行 then 方法
let result = p.then(value => {
console.log(value);
// 1. 抛出错误 ,变为 rejected
throw '出了问题';
// 2. 返回结果是非 Promise 类型的对象,新 promise 变为 resolved
return 521;
// 3. 返回结果是 Promise 对象,此 promise 的结果就会成为新 promise 的结果
return new Promise((resolve, reject) => {
  // resolve('success');
  reject('error');
});
}, reason => {
console.warn(reason);
});
```

### promise 如何串连多个操作任务?
- promise 的 then()返回一个新的 promise, 可以开成 then()的链式调用
- 通过 then 的链式调用串连多个同步/异步任务,这样就能用then()将多个同步或异步操作串联成一个同步队列
```
let p = new Promise((resolve, reject) => { setTimeout(() => {resolve('OK'); }, 1000); });
p.then(value => {return new Promise((resolve, reject) => { resolve("success"); });})
.then(value => {console.log(value);})//打印success
.then(value => { console.log(value);})//打印undefined
```
### promise 异常传透
- 当使用 promise 的 then 链式调用时, 可以在最后指定失败的回调
- 前面任何操作出了异常, 都会传到最后失败的回调中处理
```
getJSON('./hong.json')
   .then(function(posts) { throw new Error('抛出异常') })
  .then(res=>console.log(res),e=>console.log('被then的错误回调捕获',e) )
   .catch(function(error) {
		 // 处理 getJSON 和 前一个回调函数运行时发生的错误
 		console.log('错误捕获: ', error);
  });
//执行结果: 被then的错误回调捕获 Error: 抛出异常

/******************** 利用异常穿透 ****************************************/
getJSON('./hong.json')
   .then(function(posts) { throw new Error('抛出异常') })
  .then(res=>console.log(res) ) //此处差异,不指定 reject 回调,利用异常穿透传到最后
   .catch(function(error) {
 		console.log('错误捕获: ', error);
  });
//执行结果:  错误捕获:  Error: 抛出异常
```

### 中断 promise 链
在关键问题2中,可以得知,当promise状态改变时,他的链式调用都会生效,那如果我们有这个一个实际需求:我们有5个then(),但其中有条件判断,如当我符合或者不符合第三个then条件时,要直接中断链式调用,不再走下面的then,该如何?
(1) 当使用 promise 的 then 链式调用时, 在中间中断, 不再调用后面的回调函数
(2) 办法: 在回调函数中返回一个 pendding 状态的promise 对象
```
let p = new Promise((resolve, reject) => {setTimeout(() => { resolve('OK');}, 1000);});
p.then(value => {return new Promise(() => {});})//有且只有这一个方式
.then(value => { console.log(222);})
.then(value => { console.log(333);})
.catch(reason => {console.warn(reason);});
```

# async 和 await
## async函数
- 函数的返回值为 promise 对象
- promise 对象的结果由 async 函数执行的返回值决定
```
async function main(){
  //1、非Promise fullfilled
  return 521;
  //2、promise对象
  return new Promise((resolve,reject)=> {resolve('OK')});
  //3、抛出异常，失败的Promise
  throw "Oh no";
}
let result = main();
console.log(result);
```

## await表达式
- await 右侧的表达式一般为 promise 对象, 但也可以是其它的值
- 如果表达式是 promise 对象, await 返回的是 promise 成功的值
- 如果表达式是其它值, 直接将此值作为 await 的返回值
  
**其实await就是为了简化获取Promise的值，以前还要then()处理，但是为了使用await，又必须在外面使用async**
  
**注意**
- await 必须写在 async 函数中, 但 async 函数中可以没有 await
- 如果 await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理

```
async function main(){
  let p = new Promise((resolve,reject) => {reject('Error')});
  //1、右侧为promise
  let res = await p;
  //2、右侧为其他
  let res2 = await 20;
  //3、如果promise是失败的状态
  try{
    let res3 = await p;
  }catch(e){
    console.log(e);
  }

}
main();
```

**实战**
```
/**
 * resource  1.html  2.html 3.html 文件内容
 */

const fs = require('fs');
const util = require('util');
const mineReadFile = util.promisify(fs.readFile);

//回调函数的方式
// fs.readFile('./resource/1.html', (err, data1) => {
//     if(err) throw err;
//     fs.readFile('./resource/2.html', (err, data2) => {
//         if(err) throw err;
//         fs.readFile('./resource/3.html', (err, data3) => {
//             if(err) throw err;
//             console.log(data1 + data2 + data3);
//         });
//     });
// });

//async 与 await
async function main(){
    try{
        //读取第一个文件的内容，这种虽然写法是同步的，但是内部执行却是异步的
        let data1 = await mineReadFile('./resource/1x.html');
        let data2 = await mineReadFile('./resource/2.html');
        let data3 = await mineReadFile('./resource/3.html');
        console.log(data1 + data2 + data3);
    }catch(e){
        console.log(e.code);
    }
}

main();
```

ajax
```
//axios
function sendAJAX(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("GET", url);
        xhr.send();
        //处理结果
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                //判断成功
                if(xhr.status >= 200 && xhr.status < 300){
                    //成功的结果
                    resolve(xhr.response);
                }else{
                    reject(xhr.status);
                }
            }
        }
    });
}

//段子接口地址 https://api.apiopen.top/getJoke
let btn = document.querySelector('#btn');

btn.addEventListener('click',async function(){
    //获取段子信息
    let duanzi = await sendAJAX('https://api.apiopen.top/getJoke');
    console.log(duanzi);
});
```