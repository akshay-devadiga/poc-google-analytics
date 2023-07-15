// /plugins/ga.client.js

import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ isDev, app, $config:{googleAnalyticsId} }) => {
	if (!isDev){
		Vue.use(VueGtag, {
			config: { id: googleAnalyticsId }
		},
		app.router);
	} else {
		console.log("Skipping GA in development")
	}
}