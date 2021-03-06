module.exports = {
	dest: "./public",
	locales: {
		"/": {
			lang: "en-US",
			title: "Paperback",
			description: "An ad-free manga reader for iOS.",
		},
		"/fr/": {
			lang: "fr-FR",
			title: "Paperback",
			description: "Un lecteur de manga, sur iOS, sans publicités.",
		},
		"/it/": {
			lang: "it-IT",
			title: "Paperback",
			description: "Un lettore di manga per iOS, senza pubblicità.",
		}
	},
	themeConfig: {
		logo: "/assets/logo.png",
		docsDir: "src",
		repo: "Paperback-iOS/app",
		docsRepo: "Paperback-iOS/website",
		editLinks: true,
		displayAllHeaders: true,
		sidebarDepth: 1,
		editLinkText: "Help us improve this page",
		lastUpdated: "Last updated",
		locales: {
			"/": {
				label: "English",
				selectText: "Languages",
				artiaLabel: "Select language",
				nav: require("./config/nav/en"),
				sidebar: require("./config/sidebar/en"),
			},
			"/fr/": {
				label: "Français",
				selectText: "Langues",
				artiaLabel: "Choisir la langue",
				editLinkText: "Aidez-nous à améliorer cette page",
				lastUpdated: "Dernière mise à jour",
				nav: require("./config/nav/fr"),
				sidebar: require("./config/sidebar/fr"),
			},
			"/it/": {
				label: "Italiano",
				selectText: "Lingue",
				artiaLabel: "Scegliere la lingua",
				editLinkText: "Aiutaci a migliorare la pagina!",
				lastUpdated: "Ultimo aggiornamento",
				nav: require("./config/nav/it"),
				sidebar: require("./config/sidebar/it"),
			},
		},
	},
	plugins: require("./config/plugins"),
	extraWatchFiles: [
		".vuepress/config/plugins.js",
		".vuepress/config/nav/en.js",
		".vuepress/config/nav/fr.js",
		".vuepress/config/nav/it.js",
		".vuepress/config/sidebar/en.js",
		".vuepress/config/sidebar/fr.js",
		".vuepress/config/sidebar/it.js",
	],
};
