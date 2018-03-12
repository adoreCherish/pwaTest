import indexController from './indexController';
const initController = {
  init(app,router){
    app.use(router(_ => {
      _.get('/index/index', indexController.index())
      _.get('/index/newHtml',indexController.newHtml())
      // _.get('/index/update', indexController.update())

    }))
  }
}
export default initController;
