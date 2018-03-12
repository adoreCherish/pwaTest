### pwa优势
	* Web App Manifest – 在主屏幕添加app图标，定义手机标题栏颜色之类
	* Service Worker – 缓存，离线开发，以及地理位置信息处理等
	* App Shell – 先显示APP的主结构，再填充主数据，更快显示更好体验
	* Push Notification – 消息推送

### 使用条件
	* 浏览器版本 兼容性
		Chrome 63.0 64.0 完全支持
		navigator.serviceWorker : ios/safari 不支持
		App Manifest : 安卓原生(Chrome/手机百度/百度浏览器) ios 微信 不支持
		caches : safari 不支持
		notification : chrome firefox opera 支持 ios、safari 微信不支持

		参考https://lavas.baidu.com/ready/browser?lang=zh
	* 访问限制
		https(利用github) || 开发时使用localhost/127.0.0.1
	* 消息推送
		使用消息推送 需要使用公钥，确保消息是加密的

### 使用场景
	* 使用service worker 利用cache storage对必要文件进行缓存操作
	* 在不依赖大厅的情况下使用 可以利用service worker缓存 并利用manifest生成桌面应用体验类原生的应用

### 如何使用
	* service-worker.js 读取文件进行相应的缓存操作  
		注意勾选【update on reload】不然每次刷新都会起一个新的service worker，然后由于是串行执行，会等待前一个执行完，不然得手动点【skipWaiting】
		不勾选 需要更改cacheName 避免service-worker的缓存
	* manifest.json     桌面图标的定义以及自定义的首页标题栏等配置，再index.html中直接使用 触发桌面图标事件，站点在同一浏览器中被访问至少两次，两次访问间隔至少为 5 分钟 display （必须为 standalone 或 fullscreen）
	* 在index.html中调用navigator.serviceWorker.register方法 注册service-worker
	* 通过application调试，可以观察到service worker的生命周期
	* 可以通过application模拟消息推送，通过push事件监听，模拟调试消息推送 可配置推送的内容，图标以及跳转链接

### 有哪些可实现功能	
	* service-worker 根据需求 利用cache storage进行缓存操作，由于缓存可能无法更新，需要在sw的activate状态下执行客户端更新操作，并根据需求将指定的缓存清除，当service-worker重新更新时，为了避免第二个sw一直处于install状态，需要在install状态下执行skipWaiting快速进入activate状态
	* 根据manifest的配置生成指定的桌面图标以及首页渲染，根据display的4个不同属性，展示不同的效果
		* fullscreen	应用的显示界面将占满整个屏幕	standalone
		* standalone	浏览器相关UI（如导航栏、工具栏等）将会被隐藏	minimal-ui
		* minimal-ui	显示形式与standalone类似，浏览器相关UI会最小化为一个按钮，不同浏览器在实现上略有不同	browser
		* browser	浏览器模式，与普通网页在浏览器中打开的显示一致	(None)
	* 消息推送