let regeneratorRuntime = require("regenerator-runtime");
const indexController = {
  index(){
    return async(ctx, next) => {
        ctx.body = await ctx.render('./test')
      }
  }
}
export default indexController;
