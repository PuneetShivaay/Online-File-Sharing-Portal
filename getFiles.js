    async function getFiles(e) {
        var files = [];

        files = e.files;
        for (let i = 0; i < files.length; i++) {
            console.log(files[i]);
            await saveToStorage(files[i])
        }
    }
