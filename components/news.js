export default {
    showPrincipalNews() {
        /* Create worker */
        const worker = new Worker('./storage/wkNews.js')
        /* DOM selections */
        const newsContainer = document.querySelector('#news');
        /* onmessage (Get the worker data using e.data.join) */
        worker.onmessage = (e) => {
            newsContainer.innerHTML = e.data.join('')
        }
        /* Post message with any message */
        worker.postMessage('start send data')
    }

}
