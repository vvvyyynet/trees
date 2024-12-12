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
		client: {"start":"_app/immutable/entry/start.BCG2aA0e.js","app":"_app/immutable/entry/app.CjOEHs-j.js","imports":["_app/immutable/entry/start.BCG2aA0e.js","_app/immutable/chunks/entry.BRDyw4-n.js","_app/immutable/chunks/runtime.DFjr8Tfh.js","_app/immutable/entry/app.CjOEHs-j.js","_app/immutable/chunks/preload-helper.C6YoSxLD.js","_app/immutable/chunks/runtime.DFjr8Tfh.js","_app/immutable/chunks/render.BzNsRBdj.js","_app/immutable/chunks/events.CSDXwEx8.js","_app/immutable/chunks/disclose-version.Ck9J-1aR.js","_app/immutable/chunks/store.jTfjTbva.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Dj3XwwqX.js')),
			__memo(() => import('./chunks/1-BcemH6Wb.js')),
			__memo(() => import('./chunks/2-yxG1BngA.js')),
			__memo(() => import('./chunks/3-BvyQRoRH.js')),
			__memo(() => import('./chunks/4-DL0jM4Jh.js'))
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
