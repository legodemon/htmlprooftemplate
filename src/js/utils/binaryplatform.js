const param = function (name) {
    const query = document.location.search.split('+').join(' ');

    let params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(query)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params[name];
},
    host = 'ws://bali.trunk.alpari-ru.dom:8004',
    token = param('token') || 'p24d545382bf132265c7bcb71acddbae0',
    isGuest = !!param('guest') || true,
    theme = param('theme') || 'dark',
    locale = param('locale') || 'ru',
    links = {
        mobileapp: {
            appstore: 'https://itunes.apple.com/ru/app/alpari-options/id1087276550?mt=8',
            playmarket: 'https://play.google.com/store/apps/details?id=gtt.android.apps.invest'
        },
        protectionrate: 'http://www.alpari.ru/ru/promo_bonus/promo/agent-protection-rate/',
        freedeal: 'http://www.alpari.ru/ru/promo_bonus/promo/free-binary-options-for-everyone/'
    },
    starter = () => new Bali({
        element: document.getElementById('app'),
        host: host,
        token: token,
        isGuest: isGuest,
        locale: locale,
        theme: theme,
        links: links
    });

export default starter