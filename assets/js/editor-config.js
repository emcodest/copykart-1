(function () {


const editor = new EditorJS({
    holder: 'editorjs',
    /** 
     * Available Tools list. 
     * Pass Tool's class or Settings object for each Tool you want to use 
     */
    tools: {
        header: Header,
        delimiter: Delimiter,
        embed: Embed,
        image: SimpleImage,
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        image: {
            class: ImageTool,
            config: {
                endpoints: {
                    byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                    byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                }
            }
        }
    }
});

const editorTwo = new EditorJS({
    holder: 'editorjs-two',
    /** 
     * Available Tools list. 
     * Pass Tool's class or Settings object for each Tool you want to use 
     */
    tools: {
        header: Header,
        delimiter: Delimiter,
        embed: Embed,
        image: SimpleImage,
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        image: {
            class: ImageTool,
            config: {
                endpoints: {
                    byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                    byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                }
            }
        }
    }
});

})();