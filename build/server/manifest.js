const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/Visualisierung_Baumoekosysteme.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.gjxyY6_Z.js","app":"_app/immutable/entry/app.nahgUC5a.js","imports":["_app/immutable/entry/start.gjxyY6_Z.js","_app/immutable/chunks/entry.CT6HkUhM.js","_app/immutable/chunks/runtime.DiIO-n5k.js","_app/immutable/entry/app.nahgUC5a.js","_app/immutable/chunks/preload-helper.BNxVQIK3.js","_app/immutable/chunks/runtime.DiIO-n5k.js","_app/immutable/chunks/render.DKGHszxP.js","_app/immutable/chunks/events.CVmn9GpM.js","_app/immutable/chunks/disclose-version.C5a5Vo_S.js","_app/immutable/chunks/store.Jax0cOK7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-B_hLEJut.js')),
			__memo(() => import('./chunks/1-CotlOsbb.js')),
			__memo(() => import('./chunks/2-Ds4nNcR9.js')),
			__memo(() => import('./chunks/3-sJvARjOR.js')),
			__memo(() => import('./chunks/4-COOn8GlG.js'))
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
