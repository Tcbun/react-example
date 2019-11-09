// 关于react
import React from 'react';
import Router from 'koa-router';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Home from '../src/pages/home';
// //关于koa
import Koa from 'koa';
import KoaStatic from 'koa-static';
// // 关于node
import fs from 'fs';
import path from 'path';


const app = new Koa();

const router = new Router();

router.get('/', async (ctx) => {
    const context = {};
    const reactAppString = await renderToString(
        (
            <div className="App">
                <h1>react-example</h1>
                <StaticRouter
                location={ctx.url}
                context={context}
                >
                    <Home />
                </StaticRouter>
            </div>
        )
    );
    const indexFile = await path.resolve(__dirname + 'build/index.html').replace('server','');
    const data = await fs.readFileSync(indexFile,'utf8',function(err,data){
        return data;
    });
    let dataReplaced = await data.replace('<div id="root"></div>',`<div id="root">${reactAppString}</div>`);
    // console.log(dataReplaced)
    ctx.body = dataReplaced;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(KoaStatic(
    path.resolve(__dirname + 'build').replace('server', '')
));

app.listen(8889, () => {
    console.log('ssr starting');
})