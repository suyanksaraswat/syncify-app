export default {
	name: 'Syncify',
	slug: process.env.SLUG || 'Syncify',
	platforms: ['ios', 'android', 'web'],
	version: '1.0.0',
	orientation: 'portrait',
	icon: './assets/images/icon.png',
	scheme: 'myapp',
	splash: {
		image: './assets/images/splash.png',
		resizeMode: 'contain',
		backgroundColor: '#ffffff',
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ['**/*'],
	ios: {
		supportsTablet: true,
		infoPlist: {
			UIBackgroundModes: ['audio'],
		},
	},
}
