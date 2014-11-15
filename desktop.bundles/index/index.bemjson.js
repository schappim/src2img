({
    block : 'page',
    title : 'SRC to PNG converter',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block: 'canvas-renderer',
            content: [        
                {
                    block: 'textarea',
                    mix: { block: 'canvas-renderer', elem: 'source' },
                    val: '',
                    mods: { theme: 'islands', size: 'm' },
                    placeholder: 'Source code'
                },
                
                {
                    block : 'select',
                    mix: { block: 'canvas-renderer', elem: 'lang' },
                    mods : { mode : 'radio', theme : 'islands', size : 'l' },
                    name : 'lang',
                    options : [
                        { val : 1, text : 'Ruby' }
                    ]
                },
                
                {
                    block : 'select',
                    mix: { block: 'canvas-renderer', elem: 'style' },
                    mods : { mode : 'radio', theme : 'islands', size : 'l' },
                    name : 'style',
                    options : [
                        { val : 1, text : 'Default' }
                    ]
                },
                
                { 
                    block: 'canvas-renderer', elem: 'preview'
                },
                
                {
                    block : 'button',
                    text : 'Get PNG',
                    mods : { theme : 'islands', size : 'm' }
                }
            ]
        }
    ]
})
