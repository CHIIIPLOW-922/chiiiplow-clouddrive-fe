export let loginFinished = false;

export function setLoginFinished() {
    loginFinished = true
}

export function waitForLoginFinish(timeout = 2000) {
    return new Promise((resolve) => {
        const start = Date.now()
        const check = () => {
            if (loginFinished || Date.now() - start > timeout) {
                resolve();
            } else {
                requestAnimationFrame(check)
            }
        };
        check();
    })
}
