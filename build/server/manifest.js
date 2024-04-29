const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CXVf3HeD.js","app":"_app/immutable/entry/app.BTV1TAX-.js","imports":["_app/immutable/entry/start.CXVf3HeD.js","_app/immutable/chunks/entry.B3GOiDHG.js","_app/immutable/chunks/runtime.LGvzfdqq.js","_app/immutable/entry/app.BTV1TAX-.js","_app/immutable/chunks/runtime.LGvzfdqq.js","_app/immutable/chunks/render.CDipcTd1.js","_app/immutable/chunks/disclose-version.DIz2xj-h.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-D2YOzxtu.js')),
			__memo(() => import('./chunks/1-DEHK5dhx.js')),
			__memo(() => import('./chunks/2-Bz6d8GAu.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
