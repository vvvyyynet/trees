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
		client: {"start":"_app/immutable/entry/start.BpGCXR29.js","app":"_app/immutable/entry/app.CmffmikX.js","imports":["_app/immutable/entry/start.BpGCXR29.js","_app/immutable/chunks/entry.DeStPbd-.js","_app/immutable/chunks/runtime.LGvzfdqq.js","_app/immutable/entry/app.CmffmikX.js","_app/immutable/chunks/runtime.LGvzfdqq.js","_app/immutable/chunks/render.CDipcTd1.js","_app/immutable/chunks/disclose-version.DIz2xj-h.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-D2YOzxtu.js')),
			__memo(() => import('./chunks/1-BBqDjt3T.js')),
			__memo(() => import('./chunks/2-EwvzwjXB.js'))
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
