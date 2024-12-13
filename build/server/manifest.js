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
		client: {"start":"_app/immutable/entry/start.V2YIc34P.js","app":"_app/immutable/entry/app.H3IZFIj5.js","imports":["_app/immutable/entry/start.V2YIc34P.js","_app/immutable/chunks/entry.MaRXoTCJ.js","_app/immutable/chunks/runtime.Dd0jTHCb.js","_app/immutable/chunks/index.DtYY5Es6.js","_app/immutable/chunks/utils.DuracJeR.js","_app/immutable/entry/app.H3IZFIj5.js","_app/immutable/chunks/preload-helper.C0-HPEzy.js","_app/immutable/chunks/runtime.Dd0jTHCb.js","_app/immutable/chunks/store.DyrHtE07.js","_app/immutable/chunks/utils.DuracJeR.js","_app/immutable/chunks/render.DMA68nXL.js","_app/immutable/chunks/disclose-version.M3PKwsxC.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-D-3yMScU.js')),
			__memo(() => import('./chunks/1-BifbBaMY.js')),
			__memo(() => import('./chunks/2-BUIwo9LR.js')),
			__memo(() => import('./chunks/3-HqYZQlCC.js')),
			__memo(() => import('./chunks/4-IF6AlkvO.js'))
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
