const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/Visualisierung_Baumoekosysteme.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dv1AnRlA.js","app":"_app/immutable/entry/app.emZ4Jlm9.js","imports":["_app/immutable/entry/start.Dv1AnRlA.js","_app/immutable/chunks/entry.C3vVJj8r.js","_app/immutable/chunks/runtime.DJmhe8UL.js","_app/immutable/chunks/index.DWDzLkAL.js","_app/immutable/chunks/utils.CxNHRzZ3.js","_app/immutable/entry/app.emZ4Jlm9.js","_app/immutable/chunks/preload-helper.-xZNpBsJ.js","_app/immutable/chunks/runtime.DJmhe8UL.js","_app/immutable/chunks/store.CIcwvlTn.js","_app/immutable/chunks/utils.CxNHRzZ3.js","_app/immutable/chunks/render.DfULjR8S.js","_app/immutable/chunks/disclose-version.DbNCdHmw.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CIslT8xJ.js')),
			__memo(() => import('./chunks/1-D6hHAbDg.js')),
			__memo(() => import('./chunks/2-uATDCUCt.js')),
			__memo(() => import('./chunks/3-CCgXaGMS.js')),
			__memo(() => import('./chunks/4-DrYKJzYz.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/info",
				pattern: /^\/info\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/requirements",
				pattern: /^\/requirements\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
