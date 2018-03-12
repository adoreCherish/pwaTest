let regeneratorRuntime = require("regenerator-runtime");
const indexController = {
  index(){
    return async(ctx, next) => {
        ctx.body = await ctx.render('./test')
      }
  },
  newHtml(){
  	return async(ctx, next) => {
  		ctx.body = await ctx.render('./new')
  	}
  }
}
export default indexController;
