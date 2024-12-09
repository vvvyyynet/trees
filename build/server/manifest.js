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
		client: {"start":"_app/immutable/entry/start.BG_qbV4i.js","app":"_app/immutable/entry/app.D-0KyUln.js","imports":["_app/immutable/entry/start.BG_qbV4i.js","_app/immutable/chunks/entry.Dx4mm2hv.js","_app/immutable/chunks/runtime.CT1JsHoh.js","_app/immutable/entry/app.D-0KyUln.js","_app/immutable/chunks/runtime.CT1JsHoh.js","_app/immutable/chunks/store.U0BEbgDD.js","_app/immutable/chunks/disclose-version.DmngbV3w.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DsFSFbg-.js')),
			__memo(() => import('./chunks/1-Cqa3NPZO.js')),
			__memo(() => import('./chunks/2-Cfh9SimX.js'))
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
