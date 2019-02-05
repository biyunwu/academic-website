import Sitemap from 'react-router-sitemap'
import Router from './src/Router'

const sitemap = (
    new Sitemap(Router)
        .build('https://taojiangscholar.com')
        .save('./sitemap.xml')
);