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
		client: {"start":"_app/immutable/entry/start.CIGHAJBK.js","app":"_app/immutable/entry/app.bAtDCwf4.js","imports":["_app/immutable/entry/start.CIGHAJBK.js","_app/immutable/chunks/entry.Bdu1o9NN.js","_app/immutable/chunks/runtime.DyBmv-sb.js","_app/immutable/chunks/index.D6Ei6y7t.js","_app/immutable/chunks/utils.DHY6tlTO.js","_app/immutable/entry/app.bAtDCwf4.js","_app/immutable/chunks/runtime.DyBmv-sb.js","_app/immutable/chunks/render.C8oWre7s.js","_app/immutable/chunks/disclose-version.Dh9KmkWA.js","_app/immutable/chunks/props.KZfLxWr8.js","_app/immutable/chunks/store.BUNmnxnG.js","_app/immutable/chunks/utils.DHY6tlTO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-i0DFufOy.js')),
			__memo(() => import('./chunks/1-BqiFTL-f.js')),
			__memo(() => import('./chunks/2-BJSiuhvL.js'))
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
