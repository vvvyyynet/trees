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
		client: {"start":"_app/immutable/entry/start.BvLBjXt5.js","app":"_app/immutable/entry/app.D9zTB4J8.js","imports":["_app/immutable/entry/start.BvLBjXt5.js","_app/immutable/chunks/entry.5FZYlQ7u.js","_app/immutable/chunks/runtime.LGvzfdqq.js","_app/immutable/entry/app.D9zTB4J8.js","_app/immutable/chunks/runtime.LGvzfdqq.js","_app/immutable/chunks/render.CDipcTd1.js","_app/immutable/chunks/disclose-version.DIz2xj-h.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-D2YOzxtu.js')),
			__memo(() => import('./chunks/1-CyFhOUED.js')),
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
