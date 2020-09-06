//rateLimiter class

class RateLimiter {
    constructor(opt) {
        this.limit = opt.limit;
        this.requestQueue = []
        this.waitingQueue = []
        this.lock = false
    }
    do(cb) {

        return this.executeFunc(cb)
    }
    throttle(func,delay){
        let startTime = new Date().getTime()
        return function(){
            let ctx = this;
            let args = arguments;
            let now = new Date().getTime()
            if(now - startTime > delay){
                func.apply(ctx,args);
                startTime = now
            }
        }
    }
}

async function getHTTP() {
    await setTimeout(() => {
        return { name: "jhon", id: "1230011" }
    }, 3000)
}

const userList = ['user_a', 'user_b', 'user_c'];
const rateLimiter = new RateLimiter({ limit: 2 });
const promises = userList.map((user) => rateLimiter.do(async () => {
    console.log(`Getting user data of ${user}...`);
    const userData = await getHTTP(`https://some-api-with-rate-limit.io/users/${user}`);
    console.log(`Got user data of ${user}.`);
    return userData;
})
);

async function getResult() {
    const results = await Promise.all(promises);
    console.log(results);
}
getResult()
// [data of user_a, user_b, user_c, ...]