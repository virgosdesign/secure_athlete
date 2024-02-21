const _default = new Proxy({"src":"/_astro/default.BOHV0qv1.png","width":2400,"height":1256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/assets/images/default.png";
							}
							
							return target[name];
						}
					});

export { _default as default };