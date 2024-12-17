import { ElMessage } from 'element-plus';

// const messageQueue = []
// let showingMessageFlag = false;
// let currentMessageInstance = null;

const showMessage = (messageOptions) => {
    // if (showingMessageFlag) {
    //     messageQueue.push(messageOptions);
    //     if (currentMessageInstance) {
    //         currentMessageInstance.close();
    //     }
    //     return;
    // }
    // showingMessageFlag = true;
    currentMessageInstance = ElMessage({
        duration:3000,
        plain:true,
        grouping: true,
        ...messageOptions,
        // onClose: () => {
        //     showingMessageFlag = false
        //     currentMessageInstance = null;
        //     if (messageQueue.length > 0) {
        //         const nextMessage = messageQueue.shift();
        //         showMessage(nextMessage);
        //     }

        // }
    })
}

const message = {
    error: (msg) => {
        showMessage({ message: msg, type: "error" });
    },
    success: (msg) => {
        showMessage({ message: msg, type: "success" });
    },
    warning: (msg) => {
        showMessage({ message: msg, type: "warning" });
    },
    info: (msg) => {
        showMessage({ message: msg, type: "info" });
    },
}

export default message;